const conf = {
  APIUrl: String(process.env.NEXT_PUBLIC_API_URL),
  cookiePath: String(process.env.NEXT_PUBLIC_COOKIE_PATH),
  cookieDomain: String(process.env.NEXT_PUBLIC_COOKIE_DOMAIN),
  cookieExpires: String(process.env.NEXT_PUBLIC_COOKIE_EXPIRES),
  superAdminProfile: String(process.env.NEXT_PUBLIC_SUPER_ADMIN_PERMISSION),
  imagePublicUrl: String(process.env.NEXT_PUBLIC_IMAGE_URL),
  encryptionKey: String(process.env.NEXT_PUBLIC_ENCRYPTION_KEY),
  encryptionIV: String(process.env.NEXT_PUBLIC_ENCRYPTION_IV),
};
export default conf;
