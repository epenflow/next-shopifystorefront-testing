import { Footer } from '@/app/(store)/__components__/footer';
import { Navbar } from '@/app/(store)/__components__/navbar';
import { ContextWrapper } from '@/lib/context-wrapper';
import React from 'react';
interface StoreLayoutProps {
	children: React.ReactNode;
}

export default async function StoreLayout({ children }: StoreLayoutProps) {
	return (
		<ContextWrapper>
			<Navbar />
			{children}
			<Footer />
		</ContextWrapper>
	);
}
