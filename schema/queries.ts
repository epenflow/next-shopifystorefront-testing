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
	query GetCollectionById($id: ID, $handle: String) {
		collection(id: $id, handle: $handle) {
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
export const GET_COLLECTION = gql`
	query GetCollection(
		$handle: String
		$id: ID
		$first: Int!
		$before: String
		$last: Int
	) {
		collection(handle: $handle, id: $id) {
			id
			handle
			seo {
				description
				title
			}
			products(first: $first, before: $before, last: $last) {
				nodes {
					id
					title
					images(first: $first, before: $before, last: $last) {
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
				id
				handle
				title
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
export const GET_RECOMMENDATION_COLLECTION = gql`
	query GetRecommendationCollection($id: ID!) {
		collection(id: $id) {
			title
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
					priceRange {
						minVariantPrice {
							amount
						}
					}
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
