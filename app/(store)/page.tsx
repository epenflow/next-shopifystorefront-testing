'use client';
import Image from 'next/image';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '@/schema/queries';
export default function Home() {
	const { data } = useQuery(GET_PRODUCTS);
	console.log(data);
	return (
		<main>
			<h1>testing query</h1>
			<p>{JSON.stringify(data)}</p>
		</main>
	);
}
