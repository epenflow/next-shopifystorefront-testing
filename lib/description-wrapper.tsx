'use client';

import React from 'react';

interface DescriptionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
	html: string | TrustedHTML;
}

export const DescriptionWrapper = ({
	html,
	...rest
}: DescriptionWrapperProps) => {
	return (
		<div
			{...rest}
			dangerouslySetInnerHTML={{
				__html: html,
			}}></div>
	);
};
