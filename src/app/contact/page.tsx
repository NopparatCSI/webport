"use client";

import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, MapPin } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.42, delay },
});

const directContacts = [
  { icon: Mail, label: "nopparat.suws@gmail.com", href: "mailto:nopparat.suws@gmail.com" },
  { icon: MapPin, label: "Bangkok, Thailand" },
];

const socialLinks = [
  { icon: GitBranch, label: "GitHub", sub: "NopparatCSI", href: "https://github.com/NopparatCSI" },
  { icon: Link2, label: "LinkedIn", sub: "Connect with me", href: "https://www.linkedin.com/in/nopparat-suwanna" },
];

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-3xl px-6 py-16 lg:px-12">
      <motion.section {...fadeUp(0)} className="relative overflow-hidden rounded-2xl border bg-card px-8 py-10 text-center shadow-sm">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,oklch(0.85_0.05_250/0.18),transparent_60%)]" />
        <p className="relative text-xs uppercase tracking-widest text-muted-foreground">Get in touch</p>
        <h1 className="relative mt-3 text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s create good things together</h1>
        <p className="relative mx-auto mt-4 max-w-lg text-sm text-muted-foreground">For opportunities or collaboration, please reach out by email or connect with me online.</p>
      </motion.section>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <motion.section {...fadeUp(0.08)} className="rounded-2xl border bg-card p-6 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Direct</p>
          <h2 className="mt-1 text-lg font-bold tracking-tight">Contact Info</h2>
          <ul className="mt-5 space-y-3">
            {directContacts.map(({ icon: Icon, label, href }) => (
              <li key={label}>
                {href ? (
                  <a href={href} className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border bg-muted/50"><Icon className="h-[15px] w-[15px]" /></span>
                    {label}
                  </a>
                ) : (
                  <span className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg border bg-muted/50"><Icon className="h-[15px] w-[15px]" /></span>
                    {label}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section {...fadeUp(0.14)} className="rounded-2xl border bg-card p-6 shadow-sm">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Online</p>
          <h2 className="mt-1 text-lg font-bold tracking-tight">Social Links</h2>
          <ul className="mt-5 space-y-3">
            {socialLinks.map(({ icon: Icon, label, sub, href }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-lg border bg-muted/30 px-3.5 py-2.5 text-sm transition-colors hover:bg-muted">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border bg-background"><Icon className="h-[15px] w-[15px]" /></span>
                  <span className="flex flex-col"><span className="font-medium leading-tight">{label}</span><span className="text-xs leading-tight text-muted-foreground">{sub}</span></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </main>
  );
}
