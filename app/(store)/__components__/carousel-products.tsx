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
const variables: GetCollectionsQueryVariables = {
	first: 10,
	query: "-'home page'",
};
export const CarouselProducts = () => {
	const { data } = useQuery<GetCollectionsQuery>(GET_COLLECTIONS, {
		variables,
	});
	console.log(data);
	return (
		<Carousel
			className="w-full h-full lg:w-4/5 m-auto border-x"
			opts={{
				loop: true,
				dragFree: true,
				dragThreshold: 10,
				skipSnaps: true,
			}}>
			<CarouselContent className="gap-2 pl-2">
				<MappingWrapper
					items={data?.collections.nodes}
					render={(collection) => (
						<CarouselItem
							key={collection.id}
							className="basis-1/2 h-64 lg:h-96 relative flex items-end overflow-hidden bg-cover bg-center bg-no-repeat border justify-center p-2.5"
							style={{
								backgroundImage: `url("${collection.image?.url})`,
							}}>
							<div
								aria-label={collection.title}
								className="uppercase w-full flex flex-col items-end">
								<h1 className="text-start text-lg lg:text-4xl">
									{collection.title}
								</h1>
							</div>
							<p
								aria-hidden
								hidden
								aria-label={`${collection.seo.title}`}>
								{collection.seo.description}
							</p>
						</CarouselItem>
					)}
				/>
			</CarouselContent>
		</Carousel>
	);
};
