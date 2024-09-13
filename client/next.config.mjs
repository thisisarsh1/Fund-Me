/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      
    domains: ['images.pexels.com','img.freepik.com',"api.microlink.io",'images.unsplash.com','media.licdn.com','assets.aceternity.com','cdn.pixabay.com','127.0.0.1'],
  },
  // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

export default nextConfig;
