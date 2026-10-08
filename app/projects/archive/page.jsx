"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
	faArrowLeft,
	faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
	{
		year: "2024",
		title: "CarbonThink",
		tech: "Laravel, React",
		preview: "https://carbonwhiz.ai/",
	},
	{
		year: "2024",
		title: "Reporthink.ai",
		tech: "Laravel, Bootstrap, jQuery",
		preview: "https://reporthink.ai/",
	},
	{
		year: "2024",
		title: "Company Profile CMS",
		tech: "Laravel, Next.js, Framer Motion",
		preview: "https://jettplasmaeye.com/",
	},
	{
		year: "2023",
		title: "School CMS",
		tech: "Laravel, Next.js, MySQL",
		preview: "https://sdn4laki.sch.id/",
	},
	{
		year: "2023",
		title: "Academy Profile",
		tech: "Laravel, React",
		preview: "https://pilatesmindacademy.com/",
	},
	{
		year: "2022",
		title: "My First Portfolio",
		tech: "React",
		preview: "https://donyaluzzam.github.io/",
	},
	{
		year: "2021",
		title: "Dashboard Digitalisasi SPBU",
		tech: "Laravel, Leaflet JS, Bootstrap, jQuery",
		preview: "https://dashboard.spbu.id/",
	},
	{
		year: "2020",
		title: "BigQuery Apps",
		tech: "PHP, Zend Framework, Metronic, jQuery",
	},
	{
		year: "2019",
		title: "PokeDumb",
		tech: "React Native, AdonisJS",
		code: "https://github.com/DonyAlUzzam/Pokemon",
	},
	{
		year: "2019",
		title: "CyberStore",
		tech: "React Native, AdonisJS",
		code: "https://github.com/DonyAlUzzam/E-Commerce-React_Natve",
	},
	{
		year: "2019",
		title: "PariwisataEnim",
		tech: "Android Java, Firebase",
		code: "https://github.com/DonyAlUzzam/pariwisata-enim",
	},
];

export default function ArchivePage() {
	return (
		<main className="min-h-screen bg-[#f5f5f3] px-6 pb-24 pt-28 md:px-12 lg:px-20">
			<div className="mx-auto max-w-5xl">
				<Link
					href="/projects"
					className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition hover:text-neutral-950">
					<FontAwesomeIcon icon={faArrowLeft} />
					All projects
				</Link>

				<motion.div
					initial={{ opacity: 0, y: 25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.55 }}
					className="max-w-3xl">
					<p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
						Archive
					</p>
					<h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
						Earlier work &amp; experiments.
					</h1>
					<p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
						A complete list of sites, apps, and side projects from
						2019 onward — including the ones that never became
						anything more than a learning experience.
					</p>
				</motion.div>

				<div className="mt-14 overflow-hidden rounded-3xl border border-neutral-200 bg-white">
					<div className="hidden border-b border-neutral-200 bg-[#f5f5f3] px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 md:flex md:gap-6">
						<span className="w-16">Year</span>
						<span className="flex-1">Project</span>
						<span className="w-72">Technology</span>
						<span className="w-24 text-right">Link</span>
					</div>

					{projects.map((project, index) => (
						<motion.div
							key={`${project.year}-${project.title}`}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.4 }}
							transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
							className="flex flex-col gap-3 border-b border-neutral-200 px-6 py-5 transition last:border-b-0 hover:bg-[#f5f5f3] md:flex-row md:items-center md:gap-6">
							<span className="w-16 shrink-0 text-xs font-semibold uppercase tracking-wider text-neutral-400">
								{project.year}
							</span>
							<span className="flex-1 font-semibold text-neutral-950">
								{project.title}
							</span>
							<span className="text-sm text-neutral-500 md:w-72 md:shrink-0">
								{project.tech}
							</span>
							<span className="flex items-center gap-4 md:w-24 md:shrink-0 md:justify-end">
								{project.code && (
									<a
										href={project.code}
										target="_blank"
										rel="noopener noreferrer"
										title="Source code on GitHub"
										aria-label={`${project.title} source code`}
										className="text-neutral-400 transition hover:text-neutral-950">
										<FontAwesomeIcon icon={faGithub} />
									</a>
								)}
								{project.preview && (
									<a
										href={project.preview}
										target="_blank"
										rel="noopener noreferrer"
										title="Open live preview"
										aria-label={`${project.title} live preview`}
										className="text-neutral-400 transition hover:text-neutral-950">
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
										/>
									</a>
								)}
								{!project.code && !project.preview && (
									<span className="text-xs text-neutral-300">
										—
									</span>
								)}
							</span>
						</motion.div>
					))}
				</div>
			</div>
		</main>
	);
}
