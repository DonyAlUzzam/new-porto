"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faArrowLeft,
	faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectDetail({ project }) {
	const hasImages = project.images?.length > 0;

	return (
		<main className="min-h-screen bg-[#f5f5f3] px-6 pb-24 pt-28 md:px-12 lg:px-20">
			<div className="mx-auto max-w-7xl">
				<Link
					href="/projects"
					className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition hover:text-neutral-950">
					<FontAwesomeIcon icon={faArrowLeft} />
					All projects
				</Link>

				<div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
					<motion.div
						initial={{ opacity: 0, x: -25 }}
						animate={{ opacity: 1, x: 0 }}
						className="lg:sticky lg:top-28 lg:self-start">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
							{project.category}
						</p>
						<h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">
							{project.title}
						</h1>

						<div className="mt-8 grid grid-cols-2 gap-4">
							<div className="rounded-2xl border border-neutral-200 bg-white p-5">
								<p className="text-xs uppercase tracking-wider text-neutral-400">
									Role
								</p>
								<p className="mt-2 text-sm font-semibold">
									{project.role}
								</p>
							</div>
							<div className="rounded-2xl border border-neutral-200 bg-white p-5">
								<p className="text-xs uppercase tracking-wider text-neutral-400">
									Year
								</p>
								<p className="mt-2 text-sm font-semibold">
									{project.year}
								</p>
							</div>
						</div>

						{project.impact && (
							<div className="mt-4 rounded-2xl bg-neutral-950 p-6 text-white">
								<p className="text-xs uppercase tracking-wider text-white/40">
									Impact
								</p>
								<p className="mt-3 text-sm leading-6 text-white/80">
									{project.impact}
								</p>
							</div>
						)}

						<div className="mt-6 flex flex-wrap gap-2">
							{project.tech.map((tech) => (
								<span
									key={tech}
									className="rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-xs text-neutral-600">
									{tech}
								</span>
							))}
						</div>

						<div className="mt-7 flex flex-wrap gap-5">
							{project.preview && (
								<a
									href={project.preview}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
									Live preview
									<FontAwesomeIcon
										icon={faArrowUpRightFromSquare}
									/>
								</a>
							)}
							{project.code && (
								<a
									href={project.code}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4">
									Source code
									<FontAwesomeIcon icon={faGithub} />
								</a>
							)}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 25 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.1 }}>
						<div className="rounded-3xl border border-neutral-200 bg-white p-7 md:p-10">
							<p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
								Overview
							</p>

							<div className="mt-6 space-y-5">
								{project.desc.map((paragraph, index) => (
									<p
										key={index}
										className="text-base leading-8 text-neutral-600 md:text-lg">
										{paragraph}
									</p>
								))}
							</div>
						</div>

						{hasImages ? (
							<div className="mt-6 space-y-6">
								{project.images.map((image, index) => (
									<div
										key={image}
										className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white">
										<Image
											src={image}
											alt={`${project.title} screenshot ${index + 1}`}
											width={1920}
											height={1080}
											sizes="(max-width: 1024px) 100vw, 720px"
											className="h-auto w-full"
										/>
									</div>
								))}
							</div>
						) : (
							<div className="mt-6 rounded-3xl bg-neutral-900 p-10 text-white md:p-14">
								<p className="text-xs uppercase tracking-[0.3em] text-white/40">
									Case study
								</p>
								<h2 className="mt-4 text-3xl font-bold">
									Production work
								</h2>
								<p className="mt-4 max-w-2xl leading-7 text-white/60">
									Some professional projects cannot expose
									screenshots or source code publicly. This
									page therefore focuses on the
									responsibilities, technology, and impact of
									the work.
								</p>
							</div>
						)}
					</motion.div>
				</div>
			</div>
		</main>
	);
}
