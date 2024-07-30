import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.shopify.com',
				port: '',
			},
		],
	},
};
export default MillionLint.next({
	rsc: true,
})(nextConfig);
