"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#featured" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const NavItems = ({ isNavOpen, setIsNavOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const navVariant = {
    open: {
      clipPath: `circle(1920px at calc(100% - 40px) 40px)`,
      transition: { type: isMobile ? "tween" : "spring", stiffness: 400, damping: 40 },
    },
    closed: {
      clipPath: "circle(0px at calc(100% - 40px) 40px)",
      transition: { delay: 0.15, type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const itemVariants = {
    open: (custom) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom, type: "spring", stiffness: 400, damping: 40 },
    }),
    closed: { opacity: 0, x: -40 },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[45] flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-950"
      variants={navVariant}
      animate={isNavOpen ? "open" : "closed"}
      initial={false}
    >
      <div className="flex flex-col items-center gap-5">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/40">
          Navigation
        </p>
        {links.map((item, index) => (
          <Link
            href={item.href}
            key={item.label}
            onClick={() => setIsNavOpen(false)}
          >
            <motion.span
              className="block text-3xl font-bold text-white transition hover:text-white/50 md:text-5xl"
              variants={itemVariants}
              animate={isNavOpen ? "open" : "closed"}
              custom={0.05 + index * 0.05}
            >
              {item.label}
            </motion.span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const navRef = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav
        ref={navRef}
        className={`navbar fixed inset-0 z-50 flex h-16 w-screen flex-row items-center justify-between px-5 transition-colors duration-500 md:px-12 ${
          isNavOpen
            ? "bg-neutral-950/80 text-white backdrop-blur-md"
            : "bg-[#f5f5f3]/70 backdrop-blur-md"
        }`}
      >
        <Link href="/#home" onClick={() => setIsNavOpen(false)}>
          <span className="text-xl font-bold tracking-tight">Al-Uzzam.</span>
        </Link>

        <button
          aria-label={isNavOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          onClick={() => setIsNavOpen((value) => !value)}
        >
          <span
            className={`h-0.5 w-8 rounded-full transition ${
              isNavOpen ? "translate-y-1 rotate-45 bg-white" : "bg-neutral-950"
            }`}
          />
          <span
            className={`h-0.5 w-8 rounded-full transition ${
              isNavOpen ? "-translate-y-1 -rotate-45 bg-white" : "bg-neutral-950"
            }`}
          />
        </button>
      </nav>

      <NavItems isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  );
};

export default Navbar;
