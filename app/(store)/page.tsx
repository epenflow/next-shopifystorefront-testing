import { CarouselJournal } from '@/app/(store)/__components__/carousel-journal';
import { CarouselProducts } from '@/app/(store)/__components__/carousel-products';
import { Hero } from '@/app/(store)/__components__/hero';

export default function Home() {
	return (
		<main className="space-y-2.5 overflow-x-hidden">
			<Hero />
			<h1 className="text-5xl px-2 lg:px-4">Explore The Collection</h1>
			<CarouselProducts />
			<h1 className="text-5xl px-2 lg:px-4">Journal</h1>
			<CarouselJournal />
		</main>
	);
}
