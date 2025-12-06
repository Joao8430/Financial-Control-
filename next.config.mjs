/** @type {import('next').NextConfig} */
const nextConfig = { // Esse arquivo é o arquivo de configuração do Next.js
  typescript: { // Esse objeto é o objeto de configuração do TypeScript
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
