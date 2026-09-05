export interface TurnstileVerificationResult {
  success: boolean;
  message?: string;
  errorCodes?: string[];
}

/**
 * Verifies a Cloudflare Turnstile token on the server.
 * Uses the CLOUDFLARE_TURNSTILE_SECRET_KEY environment variable.
 */
export async function verifyTurnstileToken(
  token?: string | null,
  remoteIp?: string | null
): Promise<TurnstileVerificationResult> {
  // 1. Missing token
  if (!token || typeof token !== "string" || token.trim() === "") {
    return {
      success: false,
      message: "Complete the security check.",
    };
  }

  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("[Turnstile Error] CLOUDFLARE_TURNSTILE_SECRET_KEY is not configured.");
    return {
      success: false,
      message: "Security verification server configuration is missing.",
    };
  }

  try {
    const formData = new URLSearchParams();
    formData.append("secret", secretKey);
    formData.append("response", token.trim());
    if (remoteIp) {
      formData.append("remoteip", remoteIp);
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`[Turnstile API Error] HTTP ${response.status}`);
      return {
        success: false,
        message: "Verification failed. Try again.",
      };
    }

    const data = await response.json();

    if (!data.success) {
      console.warn("[Turnstile Failed]", data["error-codes"]);
      return {
        success: false,
        message: "Verification failed. Try again.",
        errorCodes: data["error-codes"],
      };
    }

    return {
      success: true,
    };
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("[Turnstile Exception]", msg);
    return {
      success: false,
      message: "Verification failed. Try again.",
    };
  }
}
