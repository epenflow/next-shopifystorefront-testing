'use client';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/schema/queries';
import { GetProductsQuery } from '@/libs/generated/graphql';
import { MappingWrapper } from '@/libs/mapping-wrapper';
import Image from 'next/image';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

export const Products = () => {
	const { data } = useQuery<GetProductsQuery>(GET_PRODUCTS);
	console.log(data?.products.nodes);
	return (
		<div className="flex flex-col items-center">
			<MappingWrapper
				items={data?.products.nodes}
				render={(product, index) => (
					<div key={index}>
						<h1>{product.title}</h1>
						<Carousel className="w-52 h-52">
							<CarouselContent className="h-52 w-52 flex items-center">
								<MappingWrapper
									items={product.images.nodes}
									render={(image, _index) => (
										<CarouselItem key={_index}>
											<Image
												src={image.url}
												width={0}
												height={0}
												sizes="100vw"
												style={{
													width: '100%',
													height: 'auto',
												}}
												alt={product.title}
											/>
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
};
