/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
       
        {
          protocol: 'https',
          hostname: 'i.ibb.co', // replace with the correct hostname if different
          port: '',
          pathname: '/**',
        },
        
      ],
    },
};

export default nextConfig;
