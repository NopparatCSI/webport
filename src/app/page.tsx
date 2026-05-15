import { HeroMotion } from "@/components/hero-motion";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { EducationSection } from "@/components/education-section";
import { CertificatesSection } from "@/components/certificates-section";
import { SoftSkillsSection } from "@/components/soft-skills-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-12">
        <HeroMotion />
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6 pb-16 lg:px-12">
        <hr className="border-border/60" />
      </div>

      {/* Technical Skills */}
      <SkillsSection />

      {/* Projects */}
      <ProjectsSection />

      {/* Education */}
      <EducationSection />

      {/* Certificates */}
      <CertificatesSection />

      {/* Soft Skills */}
      <SoftSkillsSection />
    </main>
  );
}
