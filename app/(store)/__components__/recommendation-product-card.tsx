'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
interface RecommendationProductCardProps {
	url: string;
	title: string;
	amount: number;
}
export const RecommendationProductCard: React.FC<
	RecommendationProductCardProps
> = ({ amount, title, url }) => {
	const hoverRef = React.useRef<React.ElementRef<'div'>>(null);
	const containerRef = React.useRef<React.ElementRef<'div'>>(null);

	useGSAP(() => {
		const tl = gsap.from(hoverRef.current, {
			paused: true,
			ease: 'power1.inOut',
			clipPath: 'inset(0% 100% 0% 0%)',
		});
		const handleMouseEnter = () => tl.play();
		const handleMouseLeave = () => tl.reverse();

		const mediaQuery = window.matchMedia('(min-width: 850px)');
		if (mediaQuery.matches) {
			containerRef.current?.addEventListener(
				'mouseenter',
				handleMouseEnter,
			);
			containerRef.current?.addEventListener(
				'mouseleave',
				handleMouseLeave,
			);
		} else {
			hoverRef.current!.style.clipPath = 'inset(0% 0% 0% 0%)';
		}

		return () => {
			containerRef.current?.removeEventListener(
				'mouseenter',
				handleMouseEnter,
			);
			containerRef.current?.removeEventListener(
				'mouseleave',
				handleMouseLeave,
			);
		};
	}, [containerRef]);
	return (
		<div
			ref={containerRef}
			className="flex gap-5 flex-col border relative h-80 cursor-pointer">
			<Image
				src={url}
				alt={`${title}`}
				sizes="100vw"
				width={0}
				height={0}
				className="w-full h-full p-6 object-contain "
			/>
			<div
				ref={hoverRef}
				className={cn(
					'absolute bg-white w-full flex flex-row px-2 bottom-0 py-3',
				)}
				style={{
					clipPath: 'inset(0% 0% 0% 0%)',
				}}>
				<h1 className="basis-1/2 line-clamp-2 text-2xl text-foreground/90">
					{title}
				</h1>
				<span className="basis-1/2 text-end text-foreground/85 text-xl">
					{amount}
				</span>
			</div>
		</div>
	);
};
