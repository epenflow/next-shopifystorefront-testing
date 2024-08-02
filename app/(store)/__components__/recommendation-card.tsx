'use client';

import { RecommendationProductCard } from '@/app/(store)/__components__/recommendation-product-card';
import {
	GetRecommendationCollectionQuery,
	GetRecommendationCollectionQueryVariables,
} from '@/lib/generated/graphql';
import { MappingWrapper } from '@/lib/mapping-wrapper';
import {
	GET_COLLECTION_BY_ID,
	GET_RECOMMENDATION_COLLECTION,
} from '@/schema/queries';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

const variables: GetRecommendationCollectionQueryVariables = {
	id: 'gid://shopify/Collection/316132032689',
};
export const RecommendationCard = () => {
	const { data } = useQuery<GetRecommendationCollectionQuery>(
		GET_RECOMMENDATION_COLLECTION,
		{
			variables,
		},
	);
	console.log(data);
	return (
		<div className="py-10 space-y-3">
			<h1 className="capitalize text-4xl px-5">Recommendation for you</h1>
			<div className="w-full grid grid-cols-2 lg:grid-cols-5">
				<MappingWrapper
					items={data?.collection?.products.nodes}
					render={(product) => (
						<RecommendationProductCard
							key={product.id}
							amount={product.priceRange.minVariantPrice.amount}
							title={product.title}
							url={product.images.nodes[0].url}
						/>
					)}
				/>
			</div>
		</div>
	);
};
