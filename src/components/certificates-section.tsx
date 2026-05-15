"use client";

import { motion } from "framer-motion";
import { Award, Plus } from "lucide-react";

export function CertificatesSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <p className="text-xs uppercase tracking-widest text-muted-foreground">Achievements</p>
        <h2 className="mt-1 text-2xl font-bold tracking-tight">Certificates</h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="flex flex-col items-center justify-center rounded-xl border border-dashed bg-card/50 p-12 text-center"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full border bg-muted/40">
          <Award className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="mt-4 text-sm font-medium text-foreground">No certificates yet</p>
        <p className="mt-1 max-w-xs text-sm text-muted-foreground">
          Certificates and credentials will appear here as they are earned.
        </p>
        <div className="mt-5 flex items-center gap-1.5 text-xs text-muted-foreground/60">
          <Plus className="h-3.5 w-3.5" />
          Coming soon
        </div>
      </motion.div>
    </section>
  );
}
