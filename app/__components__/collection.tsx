'use client';

import { GetCollectionByIdQuery } from '@/lib/generated/graphql';
import { MappingWrapper } from '@/lib/mapping-wrapper';
import { GET_COLLECTION_BY_ID } from '@/schema/queries';
import { useQuery } from '@apollo/client';

export const Collection = () => {
	const id = 'gid://shopify/Collection/315946238129';
	const { data } = useQuery<GetCollectionByIdQuery>(GET_COLLECTION_BY_ID, {
		variables: {
			id: id,
		},
	});
	console.log(data);
	return (
		<div>
			<h1
				className="capitalize"
				aria-label={`${data?.collection?.handle}`}>
				{data?.collection?.handle}
			</h1>
			<p aria-label={`${data?.collection?.seo.title}`} aria-hidden hidden>
				{data?.collection?.seo.description}
			</p>
		</div>
	);
};
