import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "www.ignant.com"],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/home',
  //       permanent: true,
  //     },
  //   ];
  // },
};

export default nextConfig;
