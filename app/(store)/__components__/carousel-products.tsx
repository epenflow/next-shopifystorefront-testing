'use client';
import { useQuery } from '@apollo/client';
import { GET_COLLECTIONS } from '@/schema/queries';
import {
	GetCollectionsQuery,
	GetCollectionsQueryVariables,
} from '@/lib/generated/graphql';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { MappingWrapper } from '@/lib/mapping-wrapper';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
const variables: GetCollectionsQueryVariables = {
	first: 10,
	query: "-'Recommendation'",
};
export const CarouselProducts = () => {
	const { data } = useQuery<GetCollectionsQuery>(GET_COLLECTIONS, {
		variables,
	});
	return (
		<Carousel
			opts={{
				loop: true,
				dragFree: true,
				dragThreshold: 10,
				skipSnaps: true,
			}}>
			<CarouselContent className="gap-2 pl-2 lg:gap-5 lg:pl-5">
				<MappingWrapper
					items={data?.collections.nodes}
					render={(collection) => (
						<CarouselItem
							key={collection.id}
							className="basis-4/5 lg:basis-1/2 flex-shrink-0 relative p-0 bg-card">
							<Image
								src={collection.image?.url}
								alt={`${collection.image?.url}`}
								sizes="100vw"
								width={0}
								height={0}
								className="w-full h-60 lg:h-96 object-cover object-center border"
							/>
							<div className="w-full flex text-end p-2 font-medium flex-col justify-end items-end capitalize border border-t-0">
								<h1 className="text-foreground/95 text-2xl">
									{collection.title}
								</h1>
								<Link
									className="text-sm text-foreground/85 hover:underline"
									href={'/'}>
									shop now
								</Link>
							</div>
						</CarouselItem>
					)}
				/>
			</CarouselContent>
		</Carousel>
	);
};
