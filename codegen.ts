import { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';
dotenv.config();

const SHOPIFY_DOMAIN = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`;
const SHOPIFY_ACCESS_TOKEN = `${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN}`;
const SHOPIFY_HEADER = `${process.env.NEXT_PUBLIC_SHOPIFY_HEADER}`;
const GENERATED_FOLDER = `./lib/generated/graphql.ts`;

const config: CodegenConfig = {
	schema: [
		{
			[SHOPIFY_DOMAIN]: {
				headers: {
					[SHOPIFY_HEADER]: SHOPIFY_ACCESS_TOKEN,
				},
			},
		},
	],
	documents: './schema/**/*.ts',
	generates: {
		[GENERATED_FOLDER]: {
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
			],
			config: {
				witHooks: true,
				withHOC: true,
				withComponent: false,
			},
		},
	},
};
export default config;
