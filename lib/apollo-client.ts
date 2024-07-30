import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const uri = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`;
const headers = {
	[`${process.env.NEXT_PUBLIC_SHOPIFY_HEADER}`]: `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
};

const client = new ApolloClient({
	link: new HttpLink({
		uri,
		headers,
	}),
	cache: new InMemoryCache(),
});
export default client;
