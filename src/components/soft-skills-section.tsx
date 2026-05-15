"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  MessageCircle,
  Users,
  Zap,
  Bot,
} from "lucide-react";

const softSkills = [
  {
    icon: Lightbulb,
    title: "Problem-solving",
    description: "Breaking down complex challenges into clear, actionable steps.",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description: "Translating technical concepts for both technical and non-technical audiences.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Collaborating effectively in cross-functional development teams.",
  },
  {
    icon: Zap,
    title: "Fast Learner",
    description: "Quickly adapting to new technologies and frameworks as needed.",
  },
  {
    icon: Bot,
    title: "AI Skills",
    description: "Leveraging AI tools to accelerate development and problem-solving.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38 } },
};

export function SoftSkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground">People skills</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">Soft Skills</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {softSkills.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={itemVariants}
            className="flex flex-col gap-3 rounded-xl border bg-card p-5 shadow-sm"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border bg-muted/50">
              <Icon className="h-4.5 w-4.5 h-[18px] w-[18px] text-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
