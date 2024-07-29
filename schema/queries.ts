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
			title
			handle
			descriptionHtml
			image {
				url
				altText
			}
			image {
				url
				altText
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
export const GET_COLLECTIONS = gql`
	query GetCollections($first: Int!, $query: String) {
		collections(first: $first, query: $query) {
			nodes {
				title
				id
				image {
					url
					altText
				}
				seo {
					title
					description
				}
			}
		}
	}
`;
