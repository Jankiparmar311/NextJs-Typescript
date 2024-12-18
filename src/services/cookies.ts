import cookies from "js-cookie";
import conf from "../conf/conf";

// Cookie Configuration
const cookieConfig = {
  path: conf.cookiePath,
  domain: conf.cookieDomain,
  expires: +conf.cookieExpires,
};

// Strictly Typed Cookie Keys
export const cookieKeys = {
  TOKEN: "token",
  USER: "user",
  USER_ID: "userId",
} as const;

type CookieKey = (typeof cookieKeys)[keyof typeof cookieKeys];

class Cookies {
  // Get a cookie value and parse it as JSON
  static get<T = unknown>(key: CookieKey): T | null {
    const value = cookies.get(key);
    if (value) {
      try {
        return JSON.parse(value) as T;
      } catch (e) {
        console.error("Failed to parse cookie value:", e);
        return null;
      }
    }
    return null;
  }

  // Set a cookie value with config
  static set<T>(key: string, value: T, config = cookieConfig): void {
    cookies.set(key, JSON.stringify(value), config);
  }

  // Remove a cookie by key
  static remove(key: CookieKey, config = cookieConfig): void {
    cookies.remove(key, config);
  }

  // Clear all cookies defined in cookieKeys
  static clear(): void {
    (Object.values(cookieKeys) as CookieKey[]).forEach((key) => {
      Cookies.remove(key);
    });
  }
}

export default Cookies;
