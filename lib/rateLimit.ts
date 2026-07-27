import { NextRequest } from "next/server";

// In-memory registry to track rate limits by IP.
// Structure: Map<ipAddress, lastRequestTimeMs>
const ipRegistry = new Map<string, number>();

const WINDOW_MS = 30 * 1000; // 30 seconds rate-limit window
const CLEANUP_INTERVAL_MS = 5 * 60 * 1000; // Clean up memory every 5 minutes
let lastCleanupTime = Date.now();

/**
 * Periodically removes expired IP records from the registry to prevent memory growth.
 */
function runGarbageCollection() {
  const now = Date.now();
  if (now - lastCleanupTime < CLEANUP_INTERVAL_MS) return;

  for (const [ip, timestamp] of ipRegistry.entries()) {
    if (now - timestamp > WINDOW_MS) {
      ipRegistry.delete(ip);
    }
  }
  lastCleanupTime = now;
}

/**
 * Extracts the primary IP address of the client from incoming request headers.
 */
export function getClientIp(request: NextRequest): string {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    // x-forwarded-for can contain a chain of IPs. The first IP is the client.
    const ips = xForwardedFor.split(",").map((ip) => ip.trim());
    if (ips[0]) return ips[0];
  }

  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  // Cloudflare or other CDN fallbacks
  const cfConnectingIp = request.headers.get("cf-connecting-ip");
  if (cfConnectingIp) return cfConnectingIp.trim();

  // Fallback to local loopback if not detected (e.g. local environment)
  return "127.0.0.1";
}

export interface RateLimitResult {
  isLimited: boolean;
  retryAfter: number; // Seconds remaining until the block is lifted
}

/**
 * Applies a rate-limiting check to the incoming request.
 * Limits IP to 1 request per 30 seconds.
 */
export function rateLimit(request: NextRequest): RateLimitResult {
  const ip = getClientIp(request);
  const now = Date.now();

  runGarbageCollection();

  const lastRequestTime = ipRegistry.get(ip);
  if (lastRequestTime) {
    const elapsed = now - lastRequestTime;
    if (elapsed < WINDOW_MS) {
      const remainingSeconds = Math.ceil((WINDOW_MS - elapsed) / 1000);
      return {
        isLimited: true,
        retryAfter: remainingSeconds,
      };
    }
  }

  // Update the registry with the current request timestamp
  ipRegistry.set(ip, now);
  return {
    isLimited: false,
    retryAfter: 0,
  };
}
