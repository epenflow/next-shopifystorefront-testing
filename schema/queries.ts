import { gql } from '@apollo/client';
export const GET_PRODUCTS = gql`
	query GetProducts {
		products(first: 10) {
			nodes {
				title
				productType
				publishedAt
				images(first: 10) {
					nodes {
						url
					}
				}
			}
			pageInfo {
				hasNextPage
				hasPreviousPage
			}
		}
	}
`;
