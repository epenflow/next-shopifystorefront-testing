'use client';
import { useQuery } from '@apollo/client';
import {
	GetCollectionByIdQuery,
	GetCollectionByIdQueryVariables,
} from '@/lib/generated/graphql';
import { MappingWrapper } from '@/lib/mapping-wrapper';
import { GET_COLLECTION_BY_ID } from '@/schema/queries';
import { DescriptionWrapper } from '@/lib/description-wrapper';
import Image from 'next/image';

export const HomeBanner = () => {
	return (
		<div className="w-full lg:w-1/2 m-auto">
			<p className="text-3xl text-justify px-2">
				Welcome to Our Exclusive Jewelry Boutique! Discover the perfect
				blend of elegance and everyday wear with our curated collection
				of fine jewelry. Whether you’re looking for a statement piece or
				a subtle accessory, we have something for everyone.
			</p>
		</div>
	);
};
