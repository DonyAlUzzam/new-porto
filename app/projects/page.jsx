"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import data from "@/json/data.json";

const projects = data.Projects;

function ProjectCard({ project, index }) {
  const hasImage = project.images?.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
      className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <Link href={`/projects/${project.slug}`}>
        <div
          className={`relative aspect-[16/9] overflow-hidden ${
            hasImage ? "bg-neutral-100" : "bg-neutral-900"
          }`}
        >
          {hasImage ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain p-4 grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0 sm:p-6"
            />
          ) : (
            <>
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
              <div className="absolute bottom-6 right-6 text-7xl font-black text-white/10">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                  Case Study
                </p>
              </div>
            </>
          )}
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-neutral-700">
            {project.year}
          </span>
        </div>
      </Link>

      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
          {project.category}
        </p>
        <h2 className="mt-2 text-2xl font-bold">{project.title}</h2>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-neutral-600">
          {project.desc?.[0]}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5">
          <Link
            href={`/projects/${project.slug}`}
            className="text-sm font-semibold underline underline-offset-4"
          >
            Case study
          </Link>
          {project.preview && (
            <a
              href={project.preview}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="text-sm font-semibold text-neutral-500"
            >
              Live preview ↗
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f3] px-6 pb-24 pt-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/"
          className="mb-12 inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition hover:text-neutral-950"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Portfolio
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-7xl">
            Selected work & case studies.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            A collection of production systems, dashboards, CMS platforms,
            government applications, AI products, and learning projects I have
            built or contributed to.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Older &amp; smaller work</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-neutral-600">
              Earlier client sites, bootcamp projects, and experiments that
              shaped the rest of my work.
            </p>
          </div>
          <Link
            href="/projects/archive"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
          >
            Browse archive
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </div>
      </div>
    </main>
  );
}
