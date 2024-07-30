import React from 'react';
interface StudioLayoutProps {
	children: React.ReactNode;
}
export default async function StudioLayout({
	children,
}: Readonly<StudioLayoutProps>) {
	return children;
}
