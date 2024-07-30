import React from 'react';

interface MappingWrapperProps<T> {
	items: Array<T>;
	render: (item: T, index: number) => React.ReactNode;
}
export function MappingWrapper<T>({ items, render }: MappingWrapperProps<T>) {
	return React.Children.toArray(
		items?.map((item, index) => render(item, index)),
	);
}
