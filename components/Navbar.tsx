"use client";
import Link from "next/link";
import { Metadata } from "next";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Full Stack Developer",
  description:
    "Javascript developer 4+ years of commercial experience building optimized, user-focused web applications serving 300,000+ users. Confident using JavaScript, TypeScript, React, Next.js, Node.js, SQL, and Jest for testing.",
};

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <>
      <header className="fixed inset-x-0 max-w-2xl mx-auto z-[100] top-2">
        <nav className="relative rounded-full border bg-black border-white/[0.2] shadow-input flex justify-center space-x-4 px-8 py-6">
          <NavLink
            href="/"
            label="Home"
            hoveredLink={hoveredLink}
            setHoveredLink={setHoveredLink}
          />
          <NavLink
            href="/"
            label="About"
            hoveredLink={hoveredLink}
            setHoveredLink={setHoveredLink}
          />
          <ProjectsNavLink
            label="Projects"
            hoveredLink={hoveredLink}
            setHoveredLink={setHoveredLink}
          />
          <NavLink
            href="/"
            label="Contact"
            hoveredLink={hoveredLink}
            setHoveredLink={setHoveredLink}
          />
        </nav>
      </header>
    </>
  );
};

interface NavLinkProps {
  href: string;
  label: string;
  hoveredLink: string | null;
  setHoveredLink: (link: string | null) => void;
  isSpecial?: boolean;
}

const NavLink = ({
  href,
  label,
  hoveredLink,
  setHoveredLink,
  isSpecial = false,
}: NavLinkProps) => {
  const isHovered = hoveredLink === label;

  return (
    <Link
      href={href}
      className="relative"
      onMouseEnter={() => setHoveredLink(label)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <motion.span
        className={`relative z-10 ${isSpecial ? "text-hotPink" : ""} ${
          isHovered && !isSpecial ? "text-hotBlue" : ""
        }`}
      >
        {label}
      </motion.span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 -mx-2 rounded-md ${
              isSpecial ? "bg-black/20" : "bg-white/10"
            }`}
            style={{
              height: "100%",
              width: "calc(100% + 16px)",
              top: 0,
              zIndex: 0,
            }}
          />
        )}
      </AnimatePresence>
    </Link>
  );
};

const ProjectsNavLink = ({
  label,
  hoveredLink,
  setHoveredLink,
}: Omit<NavLinkProps, "href" | "isSpecial">) => {
  const isHovered = hoveredLink === label;

  // Featured projects to show in the preview with their slugs
  const featuredProjects = [
    {
      name: "Swytch Bike Store Locator",
      tech: "JS, OpenLayers",
      slug: "/project/swytchbike-store-locator",
    },
    {
      name: "Swytch Bike Main Site",
      tech: "JS, PHP, Tailwind",
      slug: "/project/swytchbike-main-site",
    },
    {
      name: "Kaizen Physiotherapy",
      tech: "Next.js, TypeScript",
      slug: "/project/kaizen-physiotherapy",
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setHoveredLink(label)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      <Link href="/projects" className="relative">
        <motion.span className="relative zIndex">{label}</motion.span>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              layoutId="projectsBackground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 -mx-2 rounded-md bg-black/20"
              style={{
                height: "100%",
                width: "calc(100% + 16px)",
                top: 0,
                zIndex: 0,
              }}
            />
          )}
        </AnimatePresence>
      </Link>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              top: "100%",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: "8px",
              zIndex: 50,
            }}
            className="w-[150px] md:w-auto md:max-w-2xl bg-black border border-white/20 rounded-lg shadow-lg p-3"
          >
            <div className="text-xs text-white/70 mb-2 font-medium">
              Featured Projects
            </div>

            {featuredProjects.map((project, index) => (
              <Link href={project.slug} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-2 last:mb-0 p-2 hover:bg-white/5 rounded transition-colors"
                  whileHover={{
                    x: 3,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="text-sm font-medium text-hotBlue">
                    {project.name}
                  </div>
                  <div className="text-xs text-white/60">{project.tech}</div>
                </motion.div>
              </Link>
            ))}

            <div>
              <Link href="/#view-all-projects">
                <motion.div
                  className="mt-2 pt-2 border-t border-white/10 text-xs text-center text-white/50 hover:text-hotBlue"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-hotBlue">View all projects →</span>
                </motion.div>
              </Link>
            </div>

            <motion.div
              className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 rotate-45 w-2 h-2 bg-black border-t border-l border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
