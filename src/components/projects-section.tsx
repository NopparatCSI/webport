"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FolderOpen, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  { title: "Project Alpha", description: "Full-stack web application — coming soon." },
  { title: "Project Beta", description: "REST API service with JWT auth — coming soon." },
  { title: "Project Gamma", description: "Database-driven dashboard — coming soon." },
  {
    title: "Point of Sale & Inventory Management",
    description: "Full-stack POS system with RBAC, stock management, and payment workflows.",
    image: "/pos_system/pos_system01.png",
  },
];

export function ProjectsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="mb-8 flex items-end justify-between"
      >
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Portfolio</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">Projects</h2>
        </div>
        <Link
          href="/projects"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5")}
        >
          All projects <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="group relative flex flex-col overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md"
          >
            {project.image ? (
              <div className="relative h-48 w-full overflow-hidden border-b bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center border-b bg-muted/50">
                <FolderOpen className="h-8 w-8 text-muted-foreground" />
              </div>
            )}

            <div className="flex flex-1 flex-col p-5">
              <span className="mb-3 inline-flex w-fit rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                {project.image ? "Featured" : "Coming soon"}
              </span>

              <h3 className="text-base font-semibold">{project.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
