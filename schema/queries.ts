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
export const GET_COLLECTION_BY_ID = gql`
	query GetCollectionById($id: ID!) {
		collection(id: $id) {
			handle
			image {
				url
			}
			seo {
				description
				title
			}
			products(first: 10) {
				nodes {
					id
					title
					images(first: 10) {
						nodes {
							url
						}
					}
				}
			}
		}
	}
`;
