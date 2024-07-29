import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
console.log('API Version:', process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION);
console.log('Store Domain:', process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN);
console.log(
	'Access Token:',
	process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
);
const client = new ApolloClient({
	link: new HttpLink({
		uri: `https://
		${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`,
		headers: {
			'X-Shopify-Storefront-Access-Token': `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
		},
	}),
	cache: new InMemoryCache(),
});
export default client;
