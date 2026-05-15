"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  GitBranch,
  Link2,
  FileText,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─── animation helpers ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.42, delay },
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

/* ─── data ───────────────────────────────────────────────────────── */
const directContacts = [
  { icon: Mail, label: "nopparat.suws@gmail.com", href: "mailto:nopparat.suws@gmail.com" },
  { icon: Phone, label: "064-417-7206", href: "tel:+66644177206" },
  { icon: MapPin, label: "Bangkok, Thailand", href: null },
];

const socialLinks = [
  {
    icon: GitBranch,
    label: "GitHub",
    sub: "NopparatCSI",
    href: "https://github.com/NopparatCSI",
  },
  {
    icon: Link2,
    label: "LinkedIn",
    sub: "Connect with me",
    href: "https://www.linkedin.com/in/nopparat-suwanna",
  },
  {
    icon: FileText,
    label: "Resume",
    sub: "Download PDF",
    href: "/resume.pdf",
  },
];

/* ─── page ───────────────────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Something went wrong.");
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <main className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-6xl px-6 py-16 lg:px-12">

      {/* ── CTA Banner ──────────────────────────────────────────────── */}
      <motion.section
        {...fadeUp(0)}
        className="relative overflow-hidden rounded-2xl border bg-card px-8 py-10 shadow-sm text-center"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.85_0.05_250/0.18),transparent_60%)]" />
        <p className="relative text-xs uppercase tracking-widest text-muted-foreground">Get in touch</p>
        <h1 className="relative mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Let&apos;s create good things together
          <br />
          <span className="text-muted-foreground/60">and journey together.</span>
        </h1>
        <p className="relative mt-4 text-sm text-muted-foreground max-w-lg mx-auto">
          Whether you&apos;re a recruiter, a fellow developer, or just curious — my inbox is always open.
        </p>
      </motion.section>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">

        {/* ── Contact Form ────────────────────────────────────────── */}
        <motion.section {...fadeUp(0.06)}>
          <div className="rounded-2xl border bg-card p-7 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Send a message</p>
            <h2 className="mt-1 text-xl font-bold tracking-tight">Contact Form</h2>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 flex flex-col items-center gap-3 py-10 text-center"
              >
                <CheckCircle className="h-12 w-12 text-green-500" />
                <p className="text-lg font-semibold">Message sent!</p>
                <p className="text-sm text-muted-foreground">
                  I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 rounded-lg border px-4 py-2 text-sm transition-colors hover:bg-muted"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What would you like to talk about?"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-lg border bg-background px-3.5 py-2.5 text-sm outline-none ring-offset-background transition-colors placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg border border-destructive/40 bg-destructive/10 px-3.5 py-2.5 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-opacity",
                    status === "loading" ? "opacity-60 cursor-not-allowed" : "hover:opacity-85"
                  )}
                >
                  {status === "loading" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.section>

        {/* ── Right column ──────────────────────────────────────────── */}
        <div className="flex flex-col gap-5">

          {/* Direct contact */}
          <motion.section {...fadeUp(0.1)}>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Direct</p>
              <h2 className="mt-1 text-lg font-bold tracking-tight">Contact Info</h2>

              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-5 space-y-3"
              >
                {directContacts.map(({ icon: Icon, label, href }) => (
                  <motion.li key={label} variants={item}>
                    {href ? (
                      <a
                        href={href}
                        className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-muted/50">
                          <Icon className="h-[15px] w-[15px]" />
                        </span>
                        {label}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-muted/50">
                          <Icon className="h-[15px] w-[15px]" />
                        </span>
                        {label}
                      </span>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.section>

          {/* Social links */}
          <motion.section {...fadeUp(0.14)}>
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Online</p>
              <h2 className="mt-1 text-lg font-bold tracking-tight">Social Links</h2>

              <motion.ul
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-5 space-y-3"
              >
                {socialLinks.map(({ icon: Icon, label, sub, href }) => (
                  <motion.li key={label} variants={item}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-lg border bg-muted/30 px-3.5 py-2.5 text-sm transition-colors hover:bg-muted"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
                        <Icon className="h-[15px] w-[15px]" />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-medium leading-tight">{label}</span>
                        <span className="text-xs text-muted-foreground leading-tight">{sub}</span>
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}