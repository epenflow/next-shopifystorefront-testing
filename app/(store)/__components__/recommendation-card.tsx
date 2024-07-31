'use client';

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
			<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 px-5">
				<MappingWrapper
					items={data?.collection?.products.nodes}
					render={(product) => (
						<div
							key={product.id}
							className="flex gap-5 flex-col border">
							<Image
								src={product.images.nodes[0].url}
								alt={`${product.title}`}
								sizes="100vw"
								width={0}
								height={0}
								className="w-full h-96 lg:h-[520px] object-cover object-center border-b p-5"
							/>
							<div className="px-5 space-y-2 font-medium">
								<h1 className="line-clamp-1 text-2xl text-foreground/90 ">
									{product.title}
								</h1>
								<span className="text-foreground/85 text-sm">
									{product.priceRange.minVariantPrice.amount}
								</span>
							</div>
						</div>
					)}
				/>
			</div>
		</div>
	);
};
