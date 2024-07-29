'use client';
import React from 'react';

interface MappingWrapperProps<T> {
	items?: T[];
	render: (item: T, index: number) => React.ReactNode;
}
export const MappingWrapper = <T,>({
	items,
	render,
}: MappingWrapperProps<T>) => {
	return React.Children.toArray(
		items?.map((item, index) => render(item, index)),
	);
};
