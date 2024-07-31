import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import { MappingWrapper } from '@/lib/mapping-wrapper';
import { GetPostsResult, Post } from '@/sanity.types';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { groq } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
const GetPosts = groq`
*[_type=="post"]
`;
export const CarouselJournal = async () => {
	const data = await client.fetch<GetPostsResult>(GetPosts);
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
					items={data}
					render={(blog) => (
						<CarouselItem
							key={blog._id}
							className="basis-4/5 lg:basis-1/2 flex-shrink-0 relative p-0 bg-card">
							<div className="flex w-full flex-col gap-2 p-5 font-medium">
								<h1 className=" line-clamp-2 text-foreground/90 text-2xl lg:line-clamp-1">
									{blog.title}
								</h1>
								<Link
									href={'/'}
									className="text-foreground/85 hover:underline">
									Read more
								</Link>
							</div>
							{blog.mainImage && (
								<Image
									src={urlFor(blog.mainImage).url()}
									alt={`${blog.mainImage?.alt}`}
									sizes="100vw"
									width={0}
									height={0}
									className="w-full h-60 lg:h-96 object-cover object-center border"
								/>
							)}
						</CarouselItem>
					)}
				/>
			</CarouselContent>
		</Carousel>
	);
};
