import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION}`,
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
