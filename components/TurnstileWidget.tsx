"use client";

import { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: (error?: any) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "flexible";
          retry?: "auto" | "never";
          "refresh-expired"?: "auto" | "manual" | "never";
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

export interface TurnstileWidgetRef {
  reset: () => void;
}

  interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  theme?: "light" | "dark" | "auto";
  className?: string;
}

export const TurnstileWidget = forwardRef<TurnstileWidgetRef, TurnstileWidgetProps>(
  function TurnstileWidget({ onVerify, onError, onExpire, theme: explicitTheme, className = "" }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const widgetIdRef = useRef<string | null>(null);
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "";

    // Keep stable references to callbacks to prevent re-renders on keystroke/parent state changes
    const callbacksRef = useRef({ onVerify, onError, onExpire });
    callbacksRef.current = { onVerify, onError, onExpire };

    useImperativeHandle(ref, () => ({
      reset: () => {
        if (typeof window !== "undefined" && window.turnstile && widgetIdRef.current) {
          try {
            window.turnstile.reset(widgetIdRef.current);
          } catch {
            // ignore
          }
        }
      },
    }));

    useEffect(() => {
      if (!siteKey || !containerRef.current) return;

      let isMounted = true;

      // Determine website theme mode (light vs dark)
      const detectWebsiteTheme = (): "light" | "dark" => {
        if (explicitTheme && explicitTheme !== "auto") return explicitTheme;
        if (typeof document === "undefined") return "light";
        const isDark =
          document.documentElement.classList.contains("dark") ||
          document.body.classList.contains("dark") ||
          document.documentElement.getAttribute("data-theme") === "dark";
        return isDark ? "dark" : "light";
      };

      const initTurnstile = () => {
        if (!isMounted || !containerRef.current || !window.turnstile || widgetIdRef.current) return;

        try {
          // Clear any leftover inner nodes
          containerRef.current.innerHTML = "";
          
          const currentTheme = detectWebsiteTheme();

          const id = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme: currentTheme,
            size: "normal",
            callback: (token: string) => {
              callbacksRef.current.onVerify(token);
            },
            "error-callback": () => {
              callbacksRef.current.onError?.();
            },
            "expired-callback": () => {
              callbacksRef.current.onExpire?.();
            },
            "refresh-expired": "auto",
            retry: "auto",
          });
          widgetIdRef.current = id;
        } catch (err) {
          console.error("Turnstile render error:", err);
        }
      };

      if (window.turnstile) {
        initTurnstile();
      } else {
        const existingScript = document.getElementById("cf-turnstile-script");
        if (!existingScript) {
          const script = document.createElement("script");
          script.id = "cf-turnstile-script";
          script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
          script.async = true;
          script.defer = true;
          script.onload = () => {
            if (isMounted) initTurnstile();
          };
          document.head.appendChild(script);
        } else {
          existingScript.addEventListener("load", initTurnstile);
        }
      }

      return () => {
        isMounted = false;
        if (window.turnstile && widgetIdRef.current) {
          try {
            window.turnstile.remove(widgetIdRef.current);
          } catch {
            // ignore
          }
          widgetIdRef.current = null;
        }
      };
    }, [siteKey]);

    if (!siteKey) {
      return null;
    }

    return (
      <div className={`w-full flex items-center justify-center my-2 ${className}`}>
        {/* Fixed exact dimensions: 300px width, 65px height prevents any layout shift or jumps */}
        <div
          ref={containerRef}
          style={{ width: "300px", height: "65px", minHeight: "65px", maxHeight: "65px" }}
          className="flex items-center justify-center overflow-hidden"
        />
      </div>
    );
  }
);

TurnstileWidget.displayName = "TurnstileWidget";
