// utils/encryption.ts
import CryptoJS from "crypto-js";

const key = (() => {
  const envKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;
  if (!envKey)
    throw new Error("Encryption key is missing in environment variables.");
  return CryptoJS.enc.Utf8.parse(envKey); // Parse the key
})();

const iv = (() => {
  const envIV = process.env.NEXT_PUBLIC_ENCRYPTION_IV;
  if (!envIV)
    throw new Error("Encryption IV is missing in environment variables.");
  return CryptoJS.enc.Utf8.parse(envIV); // Parse the IV
})();

// Encrypt string function with proper TypeScript typing
export const encryptString = (string: string): string => {
  const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(string), key, {
    keySize: 128 / 8, // 16-byte key for AES-128
    iv: iv,
    mode: CryptoJS.mode.CBC, // Cipher Block Chaining mode
    padding: CryptoJS.pad.Pkcs7, // PKCS7 padding
  });
  return encrypted.toString(); // Return Base64-encoded encrypted string
};
