"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML", "CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", ".NET"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Docker", "Vercel", "REST API", "JWT Authentication", "Stripe"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.25 } },
};

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Expertise</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">Technical Skills</h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            className="rounded-xl border bg-card p-5 shadow-sm"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {category.title}
            </h3>
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2"
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={badgeVariants}
                  className="inline-flex items-center rounded-md border bg-muted/50 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
