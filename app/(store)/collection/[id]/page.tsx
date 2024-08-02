'use client';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import {
	GetCollectionQuery,
	GetCollectionQueryVariables,
} from '@/lib/generated/graphql';
import { MappingWrapper } from '@/lib/mapping-wrapper';
import { GET_COLLECTION } from '@/schema/queries';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

interface CollectionPageProps {
	params: {
		id: string;
	};
}
export default function CollectionPage({ params }: CollectionPageProps) {
	const variables: GetCollectionQueryVariables = {
		first: 10,
		handle: params.id,
	};
	const { data } = useQuery<GetCollectionQuery>(GET_COLLECTION, {
		variables,
	});
	return (
		<div className="grid grid-cols-2 gap-2 px-2">
			<MappingWrapper
				items={data?.collection?.products.nodes}
				render={(product) => (
					<div key={product.id} className="border border-black p-2">
						<h1 className="line-clamp-1 py-10">{product.title}</h1>
						<Carousel>
							<CarouselContent>
								<MappingWrapper
									items={product.images.nodes}
									render={(img, index) => (
										<CarouselItem
											key={index}
											className="w-60 h-60">
											{img.url && (
												<Image
													src={img.url}
													alt={`${product.title}`}
													sizes="100vw"
													width={0}
													height={0}
													className="w-full h-full object-cover object-center border border-black"
												/>
											)}
										</CarouselItem>
									)}
								/>
							</CarouselContent>
						</Carousel>
					</div>
				)}
			/>
		</div>
	);
}
