"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    index: "01",
    title: "Project Alpha",
    description:
      "Full-stack web application built with Next.js and TypeScript. Features user authentication, real-time updates, and responsive design.",
    role: "Lead Frontend Developer — Architected the component system, implemented authentication flow with NextAuth, and led the UI/UX design decisions throughout the project.",
    outcome: "Reduced load time by 60% and increased user retention by 40%.",
    images: [], // Add image paths here
    github: "https://github.com/username/project-alpha",
    demo: "https://project-alpha-demo.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    year: "2024",
  },
  {
    index: "02",
    title: "Project Beta",
    description:
      "REST API service with JWT authentication. Includes comprehensive documentation and automated testing.",
    role: "Backend Engineer — Designed the RESTful API architecture, implemented JWT auth middleware, wrote integration tests, and set up CI/CD pipeline on GitHub Actions.",
    outcome: "Serving 50k+ requests/day with 99.9% uptime SLA.",
    images: [],
    github: "https://github.com/username/project-beta",
    demo: "https://project-beta-api.com",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    year: "2023",
  },
  {
    index: "03",
    title: "Project Gamma",
    description:
      "Database-driven dashboard with data visualization. Built for monitoring and analytics purposes.",
    role: "Full-stack Developer — Built the PostgreSQL schema, created D3.js chart components, and integrated real-time data polling with WebSockets.",
    outcome: "Replaced a $400/mo third-party tool, saving ~$14k/year.",
    images: [],
    github: "https://github.com/username/project-gamma",
    demo: "https://project-gamma-dashboard.com",
    technologies: ["React", "D3.js", "PostgreSQL", "Chart.js"],
    year: "2023",
  },
];

type Project = typeof projects[number];

function ProjectPlaceholder({ index }: { index: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-3 gap-2 opacity-15">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-12 rounded bg-foreground"
            style={{ opacity: 0.4 + (i % 3) * 0.2 }}
          />
        ))}
      </div>
      <span className="absolute text-6xl font-bold tracking-tighter text-foreground/5 select-none">
        {index}
      </span>
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        {/* Image area */}
        <div className="relative h-56 w-full shrink-0 overflow-hidden bg-muted sm:h-64">
          {project.images.length > 0 ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
            />
          ) : (
            <ProjectPlaceholder index={project.index} />
          )}
          <span className="absolute left-4 top-4 rounded-md bg-background/80 px-2 py-1 text-[11px] font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
            {project.year}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 overflow-y-auto p-6 sm:p-7">
          {/* Title + links */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-medium tabular-nums text-muted-foreground/50">
                {project.index}
              </span>
              <h2 className="mt-0.5 text-2xl font-semibold tracking-tight">
                {project.title}
              </h2>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Code className="h-3.5 w-3.5" />
                Source
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-80"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live demo
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* My role */}
          <div className="rounded-xl border border-border bg-muted/40 p-4">
            <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
              My role
            </p>
            <p className="text-sm leading-relaxed text-foreground">
              {project.role}
            </p>
          </div>

          {/* Outcome */}
          {project.outcome && (
            <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                  Outcome
                </p>
                <p className="text-sm leading-relaxed text-foreground">
                  {project.outcome}
                </p>
              </div>
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center justify-between border-t border-border px-6 py-3">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Previous
          </button>
          <span className="text-[11px] tabular-nums text-muted-foreground/50">
            {project.index} / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
          >
            Next
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <>
      <main className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-6xl px-6 py-12 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Selected work
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
          <div className="mt-4 h-px w-full bg-border" />
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setSelectedIndex(i)}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border/60 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] lg:flex-row lg:items-stretch"
            >
              {/* Image */}
              <div className="relative min-h-[200px] w-full shrink-0 overflow-hidden bg-muted lg:w-[42%] lg:min-h-0">
                {project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <ProjectPlaceholder index={project.index} />
                )}
                <span className="absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 text-[11px] font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:pr-7 lg:pl-6">
                <div>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[11px] font-medium tabular-nums text-muted-foreground/50">
                        {project.index}
                      </span>
                      <h3 className="mt-0.5 text-xl font-semibold tracking-tight leading-snug">
                        {project.title}
                      </h3>
                    </div>
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-foreground group-hover:text-foreground">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  {project.outcome && (
                    <div className="mt-4 flex items-start gap-2 rounded-lg bg-muted/60 px-3 py-2.5">
                      <span className="mt-px shrink-0 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">
                        Result
                      </span>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {project.outcome}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground/40">
                    Click to view details →
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && selectedIndex !== null && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedIndex(null)}
            onPrev={() => setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))}
            onNext={() =>
              setSelectedIndex((i) =>
                i !== null && i < projects.length - 1 ? i + 1 : i
              )
            }
            hasPrev={selectedIndex > 0}
            hasNext={selectedIndex < projects.length - 1}
          />
        )}
      </AnimatePresence>
    </>
  );
}