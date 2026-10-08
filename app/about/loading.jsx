export default function Loading() {
	return (
		<div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#f5f5f3]">
			<div className="flex items-center gap-2">
				<span className="h-2 w-2 animate-bounce rounded-full bg-neutral-950 [animation-delay:-0.2s]" />
				<span className="h-2 w-2 animate-bounce rounded-full bg-neutral-950 [animation-delay:-0.1s]" />
				<span className="h-2 w-2 animate-bounce rounded-full bg-neutral-950" />
			</div>
		</div>
	);
}
