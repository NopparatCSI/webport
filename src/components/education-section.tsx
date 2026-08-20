"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Star } from "lucide-react";

export function EducationSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Background</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">Education</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm lg:p-8"
      >
        {/* Decorative gradient */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_100%,oklch(0.85_0.04_250/0.12),transparent_60%)]" />

        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8">
          {/* Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border bg-muted/50 shadow-inner">
            <GraduationCap className="h-8 w-8 text-foreground" />
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-xl font-bold tracking-tight">Sripatum University</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
              <BookOpen className="h-3.5 w-3.5 shrink-0" />
              Computer Science — Bachelor&apos;s Degree
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-md border bg-muted/50 px-3 py-1.5 text-sm font-medium">
                4th Year Student
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border bg-muted/50 px-3 py-1.5 text-sm font-medium">
                <Star className="h-3.5 w-3.5 text-yellow-500" />
                GPA 3.63
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
