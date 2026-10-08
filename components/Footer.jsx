"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const links = [
	{ label: "Home", href: "/#home" },
	{ label: "About", href: "/about" },
	{ label: "Projects", href: "/projects" },
	{ label: "Archive", href: "/projects/archive" },
	{ label: "Contact", href: "/#contact" },
];

const socials = [
	{
		label: "Email",
		href: "mailto:mkhairiusman@gmail.com",
		icon: faEnvelope,
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/dony-al-uzzam-67a626151/",
		icon: faLinkedin,
	},
	{
		label: "GitHub",
		href: "https://github.com/DonyAlUzzam",
		icon: faGithub,
	},
];

export default function Footer() {
	return (
		<footer className="border-t border-neutral-200 bg-[#f5f5f3] px-6 py-12 md:px-12 lg:px-20">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
					<div className="max-w-sm">
						<Link
							href="/#home"
							className="text-xl font-bold tracking-tight">
							Al-Uzzam.
						</Link>
						<p className="mt-3 text-sm leading-6 text-neutral-500">
							Full Stack Developer building production-ready
							systems, APIs, dashboards, and AI-powered
							applications.
						</p>
					</div>

					<nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-neutral-600">
						{links.map((item) => (
							<Link
								key={item.label}
								href={item.href}
								className="transition hover:text-neutral-950">
								{item.label}
							</Link>
						))}
					</nav>

					<div className="flex items-center gap-3">
						{socials.map((item) => (
							<a
								key={item.label}
								href={item.href}
								target={
									item.href.startsWith("http")
										? "_blank"
										: undefined
								}
								rel="noopener noreferrer"
								aria-label={item.label}
								title={item.label}
								className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-600 transition hover:border-neutral-950 hover:text-neutral-950">
								<FontAwesomeIcon icon={item.icon} />
							</a>
						))}
					</div>
				</div>

				<div className="mt-10 flex flex-col gap-2 border-t border-neutral-200 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
					<p>© {new Date().getFullYear()} Dony Al-Uzzam.</p>
					<p>Full Stack Developer · Indonesia</p>
				</div>
			</div>
		</footer>
	);
}
