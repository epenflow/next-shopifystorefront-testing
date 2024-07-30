import { ContextWrapper } from '@/lib/context-wrapper';
import React from 'react';
interface StoreLayoutProps {
	children: React.ReactNode;
}

export default async function StoreLayout({ children }: StoreLayoutProps) {
	return <ContextWrapper>{children}</ContextWrapper>;
}
