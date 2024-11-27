/* import type { NextConfig } from "next";
 */
/* const nextConfig: NextConfig = { */
  /* config options here */
 /*  images:{
    remotePatterns:[
      {
        protocol: "http",
        hostname: "res.cloudinary.com"
      }
    ]
  }
};

export default nextConfig;
 */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Cambiado a "https"
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
