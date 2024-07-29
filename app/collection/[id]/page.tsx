import { useRouter } from 'next/navigation';
interface Props {
	params: {
		id: string;
	};
}
export default function CollectionPage({ params }: Props) {
	return (
		<div>
			<h1>{params.id}</h1>
		</div>
	);
}
