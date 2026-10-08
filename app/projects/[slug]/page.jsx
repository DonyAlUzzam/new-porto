import { notFound } from "next/navigation";

import data from "@/json/data.json";
import ProjectDetail from "./project-detail";

const SITE_URL = "https://donyaluzzam.vercel.app";

// Every project page is pre-rendered at build time; unknown slugs return a real 404.
export const dynamicParams = false;

export function generateStaticParams() {
	return data.Projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
	const project = data.Projects.find((item) => item.slug === params.slug);

	if (!project) {
		return { title: "Project not found | Dony Al-Uzzam" };
	}

	const description = project.desc.join(" ");

	return {
		title: `${project.title} | Dony Al-Uzzam`,
		description,
		openGraph: {
			type: "article",
			title: `${project.title} | Dony Al-Uzzam`,
			description,
			url: `${SITE_URL}/projects/${project.slug}`,
			images: project.images?.[0]
				? [{ url: project.images[0], alt: project.title }]
				: undefined,
		},
	};
}

export default function ProjectDetailPage({ params }) {
	const project = data.Projects.find((item) => item.slug === params.slug);

	if (!project) {
		notFound();
	}

	return <ProjectDetail project={project} />;
}
