import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';
dotenv.config();
/**
 *
 *
 */
const shopify_domain = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`;
const shopify_access_token = `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`;
const header = `${process.env.NEXT_PUBLIC_SHOPIFY_HEADER}`;
/**
 *
 *
 */
const config: CodegenConfig = {
	schema: [
		{
			[shopify_domain]: {
				headers: {
					[header]: shopify_access_token,
				},
			},
		},
	],
	documents: './schema/queries.ts',
	generates: {
		'./libs/generated/graphql.tsx': {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
			],
			config: {
				withHooks: true,
				withHOC: true,
				withComponent: false,
			},
		},
	},
};
export default config;
