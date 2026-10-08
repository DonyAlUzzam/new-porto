"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUpRightFromSquare,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub as faGithubBrand,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Me from "@/public/img/me.jpg";
import data from "@/json/data.json";

const techStack = [
  "Laravel",
  "PHP",
  "Node.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "MySQL",
  "REST API",
];

const featuredProjects = data.Projects.filter(
  (project) => project.featured
).slice(0, 4).map((project) => ({
  title: project.title,
  category: project.category,
  description: project.desc[0],
  tech: project.tech,
  href: `/projects/${project.slug}`,
  preview: project.preview || "",
  image: project.images?.[0] || "",
}));

const skills = [
  {
    title: "Backend",
    items: ["PHP", "Laravel", "Node.js", "Express.js", "REST API"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "JavaScript", "jQuery", "Blade", "Tailwind CSS"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "Engineering",
    items: [
      "System Architecture",
      "Database Design",
      "API Integration",
      "Technical Leadership",
      "Performance Optimization",
    ],
  },
  {
    title: "AI",
    items: ["AI Integration", "LLM APIs", "AI-powered Applications"],
  },
];

const experiences = [
  {
    period: "Now",
    title: "Software Engineer / Full Stack Developer",
    company: "Government & Technology Projects",
    description:
      "Built and maintained production systems, including government performance management, AI-powered platforms, dashboards, and data-intensive applications.",
  },
  {
    period: "Leadership",
    title: "Technical Lead / Developer",
    company: "SPEKTRO — DPR RI",
    description:
      "Led 3 developers, contributed to architecture and implementation, coordinated delivery, and presented system architecture and business flow in an internal official forum.",
  },
  {
    period: "Background",
    title: "Full Stack Web Developer",
    company: "10+ years in software development",
    description:
      "End-to-end experience across backend, frontend, databases, APIs, dashboards, CMS platforms, and application integrations.",
  },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-7 text-neutral-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <main className="bg-[#f5f5f3] text-neutral-950">
        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 md:px-12 lg:px-20"
        >
          <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <Reveal>
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
                  Full Stack Developer · 10+ Years Experience
                </p>
                <h1 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
                  I build production-ready systems,{" "}
                  <span className="text-neutral-500">from architecture to UI.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
                  I&apos;m Dony Al-Uzzam, a Full Stack Developer focused on
                  scalable web applications, APIs, data platforms, and
                  AI-powered solutions. I enjoy turning complex business
                  requirements into reliable software.
                </p>
              </Reveal>

              <Reveal delay={0.12} className="mt-8">
                <div className="flex flex-wrap gap-3">
                  {techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.2} className="mt-10">
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    variation="primary"
                    href="/docs/CV-Dony_Al-Uzzam.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Download CV
                  </Button>
                  <Button variation="secondary" href="#contact">
                    Let&apos;s Talk
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.28} className="mt-10">
                <a
                  href="#featured"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 transition hover:text-neutral-950"
                >
                  Explore selected work
                  <FontAwesomeIcon icon={faArrowDown} />
                </a>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="relative">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] bg-neutral-200">
                <Image
                  src={Me}
                  alt="Dony Al-Uzzam"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 400px"
                  className="object-cover grayscale transition duration-700 hover:grayscale-0"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-neutral-200 bg-white p-5 shadow-xl sm:block">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-xs uppercase tracking-wider text-neutral-500">
                  Years building software
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ABOUT / VALUE */}
        <section id="about" className="border-t border-neutral-200 bg-white px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
            <Reveal>
              <SectionTitle
                eyebrow="About"
                title="More than writing code."
                description="I combine hands-on development experience with system thinking, problem solving, and technical leadership."
              />
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-b border-neutral-950 pb-1 text-sm font-semibold"
              >
                More about me
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["10+", "Years experience"],
                ["3", "Developers led"],
                ["2", "AI platforms built"],
              ].map(([number, label], index) => (
                <Reveal key={label} delay={index * 0.08}>
                  <div className="h-full rounded-2xl border border-neutral-200 bg-[#f5f5f3] p-6">
                    <p className="text-4xl font-bold">{number}</p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">{label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section id="featured" className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionTitle
                eyebrow="Selected Work"
                title="Projects that show how I work."
                description="A few projects where architecture, development, integration, and business requirements meet."
              />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.08}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {project.image ? (
                      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        />
                      </div>
                    ) : (
                      <div className="relative flex aspect-[4/3] items-end overflow-hidden bg-neutral-900 p-6 text-white">
                        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
                        <div className="absolute bottom-6 right-6 text-6xl font-black text-white/10">
                          0{index + 1}
                        </div>
                        <p className="relative text-sm uppercase tracking-[0.25em] text-white/50">
                          Case Study
                        </p>
                      </div>
                    )}

                    <div className="flex flex-1 flex-col p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                        {project.category}
                      </p>
                      <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>
                      <p className="mt-4 flex-1 text-sm leading-6 text-neutral-600">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-7 flex items-center gap-5">
                        <Link
                          href={project.href}
                          className="text-sm font-semibold underline underline-offset-4"
                        >
                          View project
                        </Link>
                        {project.preview && (
                          <a
                            href={project.preview}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-neutral-500"
                          >
                            Live preview ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/projects"
                className="inline-flex rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                View all projects
              </Link>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="border-y border-neutral-200 bg-white px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionTitle
                eyebrow="Technical Skills"
                title="Tools I use to ship software."
              />
            </Reveal>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-200 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <Reveal key={skill.title} delay={index * 0.05}>
                  <div className="h-full bg-white p-7">
                    <h3 className="text-lg font-bold">{skill.title}</h3>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionTitle
                eyebrow="Experience"
                title="From implementation to technical ownership."
                description="My experience covers hands-on development as well as architecture, coordination, and team leadership."
              />
            </Reveal>

            <div className="max-w-5xl border-l border-neutral-300">
              {experiences.map((item, index) => (
                <Reveal key={item.title + item.period} delay={index * 0.08}>
                  <div className="relative pb-12 pl-8 last:pb-0">
                    <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-neutral-950" />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-neutral-500">
                      {item.company}
                    </p>
                    <p className="mt-4 max-w-3xl leading-7 text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-neutral-950 px-6 py-24 text-white md:px-12 lg:px-20"
        >
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Open to opportunities
              </p>
              <h2 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
                Have a system to build or a problem to solve?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 md:text-lg">
                I&apos;m open to Full Stack Developer, Backend Developer, and
                technical leadership opportunities. Let&apos;s talk about what
                you&apos;re building.
              </p>
            </Reveal>

            <Reveal delay={0.12} className="flex flex-wrap gap-3">
              <a
                href="mailto:mkhairiusman@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/dony-al-uzzam-67a626151/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                LinkedIn
              </a>
              <a
                href="https://github.com/DonyAlUzzam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
              >
                <FontAwesomeIcon icon={faGithubBrand} />
                GitHub
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
