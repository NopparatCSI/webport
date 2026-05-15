"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactLinks = [
  {
    icon: Mail,
    label: "nopparat.suws@gmail.com",
    href: "mailto:nopparat.suws@gmail.com",
  },
  {
    icon: Phone,
    label: "064-417-7206",
    href: "tel:+66644177206",
  },
  {
    icon: MapPin,
    label: "Bangkok, Thailand",
    href: null,
  },
  {
    icon: ExternalLink,
    label: "NopparatCSI",
    href: "https://github.com/NopparatCSI",
  },
];

export function HeroMotion() {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-card px-6 py-16 shadow-sm lg:px-14">
      {/* Subtle gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,oklch(0.85_0.05_250/0.18),transparent_55%),radial-gradient(ellipse_at_80%_10%,oklch(0.85_0.04_200/0.14),transparent_50%)]" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        {/* Left: Text content */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Nopparat{" "}
            <span className="text-muted-foreground/60">Suwanna</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.45 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
          >
            Experienced in both Frontend and Backend development. Passionate about
            building practical, efficient, and secure web applications that solve
            real-world problems.
          </motion.p>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.45 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
          >
            {contactLinks.map(({ icon: Icon, label, href }) =>
              href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {label}
                </a>
              ) : (
                <span
                  key={label}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {label}
                </span>
              )
            )}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.45 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/projects"
              className={cn(buttonVariants(), "gap-2")}
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "outline" }), "gap-2")}
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right: Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex shrink-0 flex-col items-center gap-3 lg:items-end"
        >
          <div className="relative h-44 w-44 shadow-md lg:h-52 lg:w-52">
            {/* Photo */}
            <div className="h-full w-full overflow-hidden rounded-2xl border-2 border-border">
              <Image
                src="/profile.png"
                alt="Nopparat Suwanna"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Open to Work — pinned to bottom-left corner of photo */}
            <div className="absolute -bottom-3 -left-3 flex items-center gap-1.5 rounded-full bg-zinc-900 px-3 py-1.5 shadow-xl ring-2 ring-background">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-white">
                Open to Work
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}