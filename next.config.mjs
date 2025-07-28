/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./cloudinary-loader.ts",
  },
};

export default nextConfig;
