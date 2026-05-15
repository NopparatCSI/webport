"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Layers,
  BookOpen,
  Bot,
  Lightbulb,
  MessageCircle,
  Users,
  Zap,
} from "lucide-react";

/* ─── animation helpers ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.42, delay },
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

/* ─── data ────────────────────────────────────────────────────────── */
const techStack = [
  {
    label: "Languages",
    badges: ["JavaScript", "TypeScript", "C#", "SQL"],
  },
  {
    label: "Frameworks",
    badges: ["React", "Next.js", "Node.js", "Express.js", ".NET"],
  },
  {
    label: "Databases",
    badges: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    label: "Tools",
    badges: ["Git", "GitHub", "Docker", "Vercel", "REST API", "JWT", "Stripe"],
  },
  {
    label: "Integrations & Bots",
    badges: ["n8n", "Line Developer", "Discord Bot"],
  },
];

const softSkills = [
  { icon: Lightbulb, title: "Problem-solving", desc: "Breaking complex challenges into clear, actionable steps." },
  { icon: MessageCircle, title: "Communication", desc: "Explaining tech to both technical and non-technical audiences." },
  { icon: Users, title: "Teamwork", desc: "Collaborating effectively in cross-functional development teams." },
  { icon: Zap, title: "Fast Learner", desc: "Quickly adapting to new technologies and frameworks as needed." },
  { icon: Bot, title: "AI Skills", desc: "Leveraging AI tools to accelerate development and problem-solving." },
];

/* ─── page ────────────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-6xl px-6 py-16 lg:px-12">

      {/* ── 1. Hero intro ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border bg-card px-6 py-12 shadow-sm lg:px-14">
        {/* subtle gradient blob */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_30%,oklch(0.85_0.05_250/0.15),transparent_55%),radial-gradient(ellipse_at_80%_10%,oklch(0.85_0.04_200/0.12),transparent_50%)]" />

        <div className="relative z-10 flex flex-col-reverse items-start gap-10 lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1">
            <motion.p
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 rounded-full border bg-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-widest text-muted-foreground"
            >
              Full Stack Developer · Backend Specialist
            </motion.p>

            <motion.h1
              {...fadeUp(0.08)}
              className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl"
            >
              Nopparat{" "}
              <span className="text-muted-foreground/60">Suwanna</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
            >
              A Full-Stack Developer with&nbsp;
              <span className="font-medium text-foreground">3 years of university-based experience</span>,
              specialising in backend systems. I enjoy building practical, efficient, and
              secure web applications — and I believe the ones who survive are not
              the ones who start out talented, but the ones who keep adapting.
            </motion.p>

            {/* philosophy callout */}
            <motion.blockquote
              {...fadeUp(0.24)}
              className="mt-6 border-l-2 border-muted-foreground/30 pl-4 text-sm italic text-muted-foreground"
            >
              "ไม่มีใครเก่งแต่เริ่ม คนที่ปรับตัวได้คือคนที่อยู่รอด"
            </motion.blockquote>
          </div>

          {/* profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0"
          >
            <div className="relative h-48 w-48 overflow-hidden rounded-2xl border shadow-md lg:h-56 lg:w-56">
              <Image
                src="/profile.png"
                alt="Nopparat Suwanna"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Background ─────────────────────────────────────────── */}
      <section className="mt-14">
        <motion.div {...fadeUp()} className="mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">My journey</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">Background</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* card: learning path */}
          <motion.div
            {...fadeUp(0.05)}
            className="flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-muted/50">
              <GraduationCap className="h-[18px] w-[18px] text-foreground" />
            </div>
            <div>
              <h3 className="font-semibold">University Path</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                3 years of hands-on learning through university coursework and personal projects.
                No formal job experience yet — but every project was treated as a real product,
                with attention to architecture, security, and clean code.
              </p>
            </div>
          </motion.div>

          {/* card: why full-stack */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-sm"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-muted/50">
              <Layers className="h-[18px] w-[18px] text-foreground" />
            </div>
            <div>
              <h3 className="font-semibold">Why Full-Stack?</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                I want to understand the whole picture — from database design and API contracts
                to the interface a user actually touches. Working across the stack means I can
                own a feature end-to-end and communicate clearly with every member of the team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. How I Code ─────────────────────────────────────────── */}
      <section className="mt-14">
        <motion.div {...fadeUp()} className="mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Work style</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">How I Learn & Code</h2>
        </motion.div>

        <motion.div
          {...fadeUp(0.05)}
          className="rounded-xl border bg-card p-6 shadow-sm"
        >
          <div className="flex gap-4">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border bg-muted/50">
              <BookOpen className="h-[18px] w-[18px] text-foreground" />
            </div>
            <div>
              <h3 className="font-semibold">Deep-dive learning approach</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                I genuinely enjoy reading code — whether it's an open-source library or a
                Stack Overflow answer. My typical workflow when tackling something new:
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {[
                  "Read official docs first to understand the intent, not just the syntax.",
                  "Watch international tutorials (English-language creators or Indian creators) to see real-world usage patterns.",
                  "Ask AI to explain concepts or review my logic — then verify the answer myself.",
                  "Write code, break it, and trace the error to understand what actually happened.",
                ].map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-px shrink-0 text-muted-foreground/40">›</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── 4. Tech Stack ─────────────────────────────────────────── */}
      <section className="mt-14">
        <motion.div {...fadeUp()} className="mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Expertise</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">Tech Stack</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {techStack.map(({ label, badges }) => (
            <motion.div
              key={label}
              variants={item}
              className="rounded-xl border bg-card p-5 shadow-sm"
            >
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center rounded-md border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── 5. Soft Skills ────────────────────────────────────────── */}
      <section className="mt-14 pb-16">
        <motion.div {...fadeUp()} className="mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">People skills</p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">Soft Skills</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {softSkills.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              variants={item}
              className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-muted/50">
                <Icon className="h-[18px] w-[18px] text-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </main>
  );
}