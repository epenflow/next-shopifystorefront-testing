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
import Autoplay from 'embla-carousel-autoplay';
const variables: GetCollectionsQueryVariables = {
	first: 20,
	query: "-'Recommendation'",
};
export const CarouselProducts = () => {
	const { data } = useQuery<GetCollectionsQuery>(GET_COLLECTIONS, {
		variables,
	});
	console.log(data);
	return (
		<Carousel
			className="w-full"
			opts={{
				loop: true,
				dragFree: true,
				dragThreshold: 10,
				skipSnaps: true,
				align: 'center',
			}}
			plugins={[
				Autoplay({
					delay: 5000,
				}),
			]}>
			<CarouselContent>
				<MappingWrapper
					items={data?.collections.nodes}
					render={(collection) => (
						<CarouselItem
							key={collection.id}
							className="lg:basis-1/5 basis-4/5 flex-shrink-0 relative p-0 bg-card h-96">
							<Image
								src={collection.image?.url}
								alt={`${collection.image?.url}`}
								sizes="100vw"
								width={0}
								height={0}
								className="w-full h-full border p-10 object-contain object-center"
							/>
							<div className="absolute bottom-0 border-x border-b px-10 h-1/5 w-full bg-white">
								<h1 className="text-foreground/95 text-2xl">
									{collection.title}
								</h1>
								<Link
									className="text-sm text-foreground/85 hover:underline"
									href={`/collection/${collection.handle}`}>
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
