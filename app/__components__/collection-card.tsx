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

export const CollectionCard = () => {
	const variables: GetCollectionsQueryVariables = {
		first: 10,
		query: "-'home page'",
	};
	const { data } = useQuery<GetCollectionsQuery>(GET_COLLECTIONS, {
		variables,
	});
	return (
		<Carousel
			className="h-full w-full lg:w-1/2 m-auto border-x"
			opts={{
				loop: true,
				dragFree: true,
				dragThreshold: 10,
				skipSnaps: true,
			}}>
			<CarouselContent className="gap-2 pl-2">
				<MappingWrapper
					items={data?.collections.nodes}
					render={(collection, index) => (
						<CarouselItem
							key={collection.id}
							className="basis-1/2 h-64 relative flex items-end overflow-hidden bg-cover bg-center bg-no-repeat border justify-center p-2.5"
							style={{
								backgroundImage: `url("${collection.image?.url}")`,
							}}>
							<div className="uppercase w-full flex flex-col items-end">
								<h1 className="text-start text-lg lg:text-4xl">
									{collection.title}
								</h1>

								<Link
									href={`/collection/${collection.id
										.split('/')
										.pop()}`}>
									<Button
										variant={'outline'}
										size={'lg'}
										className="capitalize">
										View collection
									</Button>
								</Link>
								<p
									hidden
									aria-hidden
									aria-label={`${collection.seo.title}`}>
									{collection.seo.description}
								</p>
							</div>
						</CarouselItem>
					)}
				/>
			</CarouselContent>
		</Carousel>
	);
};
