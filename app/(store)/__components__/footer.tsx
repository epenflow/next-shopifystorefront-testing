export const Footer = () => {
	return (
		<footer className="bg-black text-white py-20 px-2 mt-5 flex flex-row flex-wrap basis-1/2 space-y-5">
			<div className="flex flex-col gap-1 basis-1/2">
				<h1 className="font-medium mb-2.5">Categories</h1>
				<span className="text-sm">Necklace</span>
				<span className="text-sm">Bracelet</span>
				<span className="text-sm">Earrings</span>
			</div>
			<div className="flex flex-col gap-1 basis-1/2">
				<h1 className="font-medium mb-2.5">About</h1>
				<span className="text-sm">About Nextshoptest</span>
				<span className="text-sm">About Journal</span>
			</div>
			<div className="flex flex-col gap-1 basis-1/2">
				<h1 className="font-medium mb-2.5">Supports</h1>
				<span className="text-sm">Shipping</span>
				<span className="text-sm">Returns</span>
				<span className="text-sm">Find a clubhouse</span>
				<span className="text-sm">Contact</span>
			</div>
			<div className="flex flex-col gap-1 basis-1/2">
				<h1 className="font-medium mb-2.5">Follow us</h1>
				<span className="text-sm">Facebook</span>
				<span className="text-sm">Returns</span>
				<span className="text-sm">Find a clubhouse</span>
				<span className="text-sm">Contact</span>
			</div>
			<div className="w-full flex-col">
				<h1 className="font-medium">Join our newsletter</h1>
				<div className="w-full flex flex-row gap-2">
					<div className="basis-1/2 text-center text-foreground/90 flex items-center justify-center bg-white rounded-full truncate p-2">
						Enter your email address
					</div>
					<div className="basis-1/2 text-center p-2 text-foreground/90 flex items-center justify-center bg-white rounded-full">
						Subscribe
					</div>
				</div>
			</div>
		</footer>
	);
};
