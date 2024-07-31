/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'res.cloudinary.com',
          port: ''
        }
      ]
    }
  };
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: "public",
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: "/offline", // if you want to fallback to a custom page rather than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
  },
  workboxOptions: {
    // disableDevLogs: true,
  },
});

export default withPWA(nextConfig);


// const withPWA2 = require("@ducanh2912/next-pwa").default({
//   cacheOnFrontEndNav: true,
//   aggressiveFrontEndNavCaching: true,
//   reloadOnOnline: true,
//   swcMinify: true,
//   dest: "public",
//   fallbacks: {
//     //image: "/static/images/fallback.png",
//     document: "/offline", // if you want to fallback to a custom page rather than /_offline
//     // font: '/static/font/fallback.woff2',
//     // audio: ...,
//     // video: ...,
//   },
//   workboxOptions: {
//     disableDevLogs: true,
//   },
//   // ... other options you like
// });
