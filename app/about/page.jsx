"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import Me1 from "@/public/img/me1.jpg";
import Me2 from "@/public/img/me2.jpg";
import Me3 from "@/public/img/me3.jpg";

const strengths = [
  {
    title: "Full Stack Development",
    text: "I can work across backend, frontend, database, API, and deployment concerns to deliver an end-to-end solution.",
  },
  {
    title: "System Architecture",
    text: "I enjoy breaking business requirements into application architecture, database structures, services, and maintainable code.",
  },
  {
    title: "Technical Leadership",
    text: "I have experience leading developers, coordinating implementation, and helping teams make practical technical decisions.",
  },
  {
    title: "Problem Solving",
    text: "I focus on finding the root cause of technical problems, improving queries and workflows, and keeping production systems reliable.",
  },
];

export default function AboutPage() {
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

        <div className="grid items-center gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-neutral-200">
              <Image
                src={Me2}
                alt="Dony Al-Uzzam"
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 400px"
                className="object-cover object-top grayscale"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden w-44 overflow-hidden rounded-2xl border-8 border-[#f5f5f3] bg-white sm:block">
              <Image src={Me1} alt="" width={176} height={176} className="aspect-square object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              About me
            </p>
            <h1 className="mt-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              I build software with a focus on{" "}
              <span className="text-neutral-400">useful outcomes.</span>
            </h1>

            <div className="mt-8 space-y-5 text-base leading-8 text-neutral-600 md:text-lg">
              <p>
                I&apos;m M. Khairi Usman, commonly known as Dony Al-Uzzam. I&apos;m
                a Full Stack Developer with 10+ years of experience building
                web applications and production systems.
              </p>
              <p>
                My work covers backend and frontend development, database
                design, REST APIs, system architecture, dashboards, third-party
                integrations, and AI-powered applications.
              </p>
              <p>
                I&apos;ve also had opportunities to lead developers and coordinate
                technical implementation. I enjoy environments where I can
                contribute both as an engineer and as someone who helps move a
                team toward a practical solution.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white"
              >
                Explore my projects
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
              <a
                href="/docs/CV-Dony_Al-Uzzam.pdf"
                target="_blank"
                download
                className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        <section className="mt-32">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              What I bring
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Experience that goes beyond a stack.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {strengths.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl border border-neutral-200 bg-white p-7"
              >
                <p className="text-sm font-semibold text-neutral-400">
                  0{index + 1}
                </p>
                <h3 className="mt-8 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-6 md:grid-cols-3">
          {[Me1, Me2, Me3].map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200"
            >
              <Image
                src={image}
                alt={`Potret Dony Al-Uzzam ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top grayscale transition duration-500 hover:grayscale-0"
              />
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
