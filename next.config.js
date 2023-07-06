/** @type {import('next').NextConfig} */

//! NextJS 13 layout re-render when changing route #42164
//* solution https://github.com/vercel/next.js/issues/42164
//? Good to know: Since Next.js 13.4, Strict Mode is true by default with app router,

const nextConfig = { reactStrictMode: false };

module.exports = nextConfig;
