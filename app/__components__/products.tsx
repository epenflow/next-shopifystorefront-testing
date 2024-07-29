'use client';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/schema/queries';

export const Products = () => {
	const { data } = useQuery(GET_PRODUCTS);
	console.log(data);
	return (
		<div>
			<h1>Products</h1>
		</div>
	);
};
