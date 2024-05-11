/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.unip.br',
				port: '',
				pathname: '/assets/img/home/**'
			},
			{
				protocol: 'https',
				hostname: 'i0.wp.com',
				port: '',
				pathname: '/lr1.com.br/wp-content/uploads/**'
			},
		]
	},
};

export default nextConfig;
