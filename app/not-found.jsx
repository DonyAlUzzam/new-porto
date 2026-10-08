import Link from "next/link";

const NotFound = () => (
	<main className="flex min-h-screen flex-col items-center justify-center bg-[#f5f5f3] px-6 text-center">
		<p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
			Page not found
		</p>
		<h1 className="mt-5 text-8xl font-bold tracking-tighter text-neutral-950">
			404
		</h1>
		<h2 className="mt-4 max-w-xl text-2xl font-bold text-neutral-950 md:text-3xl">
			This page doesn&apos;t exist or has been moved.
		</h2>
		<p className="mt-4 max-w-md text-sm leading-6 text-neutral-600">
			Head back to the homepage, or browse the selected work instead.
		</p>
		<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
			<Link
				href="/"
				className="inline-flex items-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700">
				Back home
			</Link>
			<Link
				href="/projects"
				className="inline-flex items-center rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold transition hover:border-neutral-950">
				View projects
			</Link>
		</div>
	</main>
);

export default NotFound;
