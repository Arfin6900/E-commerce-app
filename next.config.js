/** @type {import('next').NextConfig} */
const nextConfig = {};
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
});
module.exports = withPWA({ ...nextConfig });
