module.exports = {
	client: {
		service: {
			name: 'nextjsshoptest.myshopify.com',
			url: 'https://nextjsshoptest.myshopify.com/api/2024-07/graphql.json',
			headers: {
				'X-Shopify-Storefront-Access-Token':
					'6b8a7456bfd434da20023f9429d5730d',
			},
		},
		includes: ['./schema/**/*.ts'],
	},
};
