/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "**",
        },],
        unoptimized: true,
    },
    allowedDevOrigins: ["192.168.1.*"],
    output: 'export',
    trailingSlash: true,
    experimental: {
        agentUpgrade: "security",
    }
};

export default nextConfig; 