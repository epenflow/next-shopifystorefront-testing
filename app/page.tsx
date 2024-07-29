import { CollectionCard } from '@/app/__components__/collection-card';
import { HomeBanner } from '@/app/__components__/home-banner';
import { Products } from '@/app/__components__/products';

export default function Home() {
	return (
		<main className="mt-[62px] h-auto flex flex-col gap-4">
			<HomeBanner />
			<CollectionCard />
		</main>
	);
}
