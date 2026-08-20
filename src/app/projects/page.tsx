"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { footcImages } from "../../lib/footc-images";

const posSystemImages = Array.from(
  { length: 17 },
  (_, index) => `/pos_system/pos_system${String(index + 1).padStart(2, "0")}.png`,
);

const projects = [
  {
    index: "01",
    title: "NongPla AI",
    description:
      "AI Chatbot ด้านการประมงและทรัพยากรสัตว์น้ำของประเทศไทย ขับเคลื่อนด้วย RAG pipeline เชื่อมต่อฐานข้อมูลจากกรมประมงแห่งชาติ ออกแบบและสร้าง RAG pipeline ด้วย LangChain + ChromaDB, พัฒนา Multi-session Chat UI พร้อม conversation history และ localStorage persistence, สร้าง keyword-based intent detection เพื่อ route คำถามไปยัง retrieval strategy ที่เหมาะสม, ตั้งค่า ChromaDB vector store พร้อม auto re-index เมื่อข้อมูลมีการเปลี่ยนแปลง, จัดการ Rate limit handling และ error boundaries สำหรับ Groq API และออกแบบ Responsive UI พร้อม Dark/Light mode และ Particle animation background",
    role: "Project Leader · Full-stack Developer",
    responsibilities: [
      "ออกแบบและวางแผนการพัฒนา RAG pipeline",
      "สร้างและจัดการฐานข้อมูล ChromaDB",
      "พัฒนา backend API ด้วย FastAPI และ frontend ด้วย React + TailwindCSS",
      "จัดการเตรียมข้อมูลเพื่อนำไปทำ RAG และการตั้งค่า Groq API",
    ],
    outcome:
      "Chatbot สามารถตอบคำถามเกี่ยวกับการประมงและทรัพยากรสัตว์น้ำจืดได้ โดยมีการดึงข้อมูลจากฐานข้อมูล (RAG) และมีการจัดการ session history ทำให้สามารถตอบคำถามที่ต่อเนื่องได้อย่างมีประสิทธิภาพ แต่ยังมีข้อจำกัดในเรื่องของความแม่นยำของข้อมูลที่ดึงมาและการจัดการกับคำถามที่ซับซ้อนมากๆ ซึ่งเป็นโอกาสในการพัฒนาและปรับปรุงต่อไปในอนาคต",
    images: [],
    github: "https://github.com/NopparatCSI/NongPlaWeb",
    demo: "https://nongpla-ai.vercel.app",
    technologies: [
      "LangChain",
      "Groq (Llama 3.1)",
      "ChromaDB",
      "HuggingFace Embeddings",
      "sentence-transformers",
      "FastAPI",
      "Uvicorn",
      "Pydantic",
      "Python 3.10+",
      "React 18",
      "Vite",
      "TailwindCSS",
      "Framer Motion",
      "React Router v7",
      "Context API",
    ],
    year: "2025",
    type: "Personal",
  },
  {
    index: "02",
    title: "FootC — Footwear E-Commerce",
    description:
      "Full-stack footwear e-commerce platform ด้วย ASP.NET Core MVC (.NET 10) รองรับ multi-role admin (SuperAdmin / Admin / Packer) ด้วย Cookie Authentication และ Policy-based access control, admin dashboard พร้อม real-time sales metrics, order lifecycle management (Pending → Processing → Shipped → Delivered) พร้อม tracking number updates และ refund handling, relational MySQL database 13+ entities ด้วย Entity Framework Core 9",
    role: "Full-stack Developer",
    responsibilities: [
      "ออกแบบ relational database schema 13+ entities ด้วย EF Core",
      "พัฒนา multi-role auth ด้วย Cookie Authentication + Policy-based access",
      "สร้าง order lifecycle management ตั้งแต่ Pending จนถึง Delivered",
      "พัฒนา admin dashboard พร้อม real-time sales metrics",
      "จัดการ product catalog ด้วย multi-image และ color variant support",
    ],
    outcome: "เว็ปไซต์ e-commerce ที่มีฟีเจอร์ครบถ้วนสำหรับการจัดการสินค้าและคำสั่งซื้อ แต่ยังไม่ได้เปิดให้ใช้งานจริง เนื่องจากอยู่ในช่วงพัฒนาและทดสอบ ซึ่งมีแผนที่จะเพิ่มฟีเจอร์ payment integration และ ยังไม่มีการทำ automated tests ซึ่งเป็นโอกาสในการพัฒนาและปรับปรุงต่อไปในอนาคต",
    images: footcImages,
    github: "https://github.com/NopparatCSI/FootC",
    demo: "https://footc-demo.com",
    technologies: [
      "ASP.NET Core MVC (.NET 10)",
      "C#",
      "Razor Views",
      "Entity Framework Core 9",
      "MySQL",
      "Pomelo",
      "Cookie Authentication",
      "Policy-based Authorization",
      "Session Management",
      "CSRF Protection",
    ],
    year: "2025",
    type: "Personal / Academic",
  },
  {
    index: "03",
    title: "SlideMe — Admin Dashboard",
    description:
      "Admin dashboard และ back-office management system สำหรับแอปพลิเคชัน slide truck towing พัฒนา Provider & User Management module สำหรับ verify driver applications, licenses และ onboarding documents, สร้าง Vehicle Configuration system สำหรับจัดการ slide trucks และ towing equipment, integrate Leaflet + React-Leaflet สำหรับ geographical tracking และ routing visualization",
    role: "Project Leader · Full-stack Developer",
    responsibilities: [
      "วางแผนและบริหาร project timeline และ team",
      "พัฒนา Provider & User Management module สำหรับ verify driver applications",
      "สร้าง Vehicle Configuration system สำหรับ slide trucks และ towing equipment",
      "Integrate Leaflet + React-Leaflet สำหรับ geographical tracking",
      "ตั้งค่า JWT auth + Bcryptjs และ Swagger API documentation",
      "Containerize ด้วย Docker + Docker Compose",
    ],
    outcome: "",
    images: [],
    github: "https://github.com/NopparatCSI/POS_System.git",
    demo: "https://slideme-admin.vercel.app",
    technologies: [
      "React 18.3",
      "Vite",
      "Bootstrap 5",
      "React-Leaflet",
      "Node.js",
      "Express",
      "MySQL",
      "Firebase",
      "JWT",
      "Bcryptjs",
      "Docker",
      "Docker Compose",
      "Swagger",
    ],
    year: "2025",
    type: "Personal",
  },
  {
    index: "04",
    title: "Point of Sale & Inventory Management",
    description:
      "Full-stack POS system พร้อม RBAC 3 roles (Admin / Cashier / Warehouse) ด้วย JWT auth และ Allow-Only Policy + Shift Guard, multi-payment support (Cash, QR PromptPay, Credit Card via Stripe Webhooks) พร้อม automatic stock deduction, Inventory Management module (Stock In/Out/Audit, Low Stock alerts, PDF/CSV export ด้วย jsPDF), Admin Dashboard พร้อม real-time sales summary, top-selling products, staff stats และ Activity Logging",
    role: "Project Leader · Full-stack Developer",
    responsibilities: [
      "ออกแบบ RBAC 3 roles ด้วย JWT auth, Allow-Only Policy และ Shift Guard",
      "พัฒนา multi-payment support (Cash, QR PromptPay, Stripe Webhooks)",
      "สร้าง Inventory module พร้อม Stock In/Out/Audit และ Low Stock alerts",
      "พัฒนา PDF/CSV export ด้วย jsPDF",
      "เขียน 40+ automated API test cases ด้วย Mocha, Chai และ Supertest",
      "Deploy ด้วย Docker (Backend) + Vercel (Frontend) + MongoDB Atlas",
    ],
    outcome:
      "ครอบคลุม 40+ automated API test cases ด้วย Mocha, Chai และ Supertest ในส่วนของ auth, permissions, stock และ validation flows",
    images: posSystemImages,
    github: "https://github.com/NopparatCSI/POS_System/tree/main",
    demo: "https://pos-system-theta-six.vercel.app/",
    technologies: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MongoDB Atlas",
      "JWT",
      "Stripe API",
      "Stripe Webhooks",
      "jsPDF",
      "Mocha",
      "Chai",
      "Supertest",
      "Docker",
      "Vercel",
    ],
    year: "2025",
    type: "Personal",
  },
];

type Project = (typeof projects)[number];

function ProjectPlaceholder({ index }: { index: string }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="grid grid-cols-3 gap-2 opacity-15">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-12 rounded bg-foreground"
            style={{ opacity: 0.4 + (i % 3) * 0.2 }}
          />
        ))}
      </div>
      <span className="absolute text-6xl font-bold tracking-tighter text-foreground/5 select-none">
        {index}
      </span>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const [imageIndex, setImageIndex] = useState(0);
  const imageCount = project.images?.length ?? 0;
  const showImage = imageCount > 0;

  function prev(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (!showImage) return;
    setImageIndex((i) => (i - 1 + imageCount) % imageCount);
  }

  function next(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (!showImage) return;
    setImageIndex((i) => (i + 1) % imageCount);
  }

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-border/60 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)] lg:flex-row lg:items-stretch"
    >
      <div className="relative min-h-[200px] w-full shrink-0 overflow-hidden bg-muted lg:w-[42%] lg:min-h-0">
        {showImage ? (
          <>
            <Image
              src={project.images[imageIndex]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/60 text-muted-foreground backdrop-blur-sm hover:bg-background/80"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 top-1/2 z-20 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/60 text-muted-foreground backdrop-blur-sm hover:bg-background/80"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        ) : (
          <ProjectPlaceholder index={project.index} />
        )}

        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-md bg-background/80 px-2 py-1 text-[11px] font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
            {project.year}
          </span>
          <span className="rounded-md bg-background/80 px-2 py-1 text-[11px] font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
            {project.type}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 lg:py-7 lg:pr-7 lg:pl-6">
        <div>
          <div className="mb-3 flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-medium tabular-nums text-muted-foreground/50">{project.index}</span>
              <h3 className="mt-0.5 text-xl font-semibold tracking-tight leading-snug">{project.title}</h3>
              {project.role && <p className="mt-1 text-xs text-muted-foreground">{project.role}</p>}
            </div>
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-foreground group-hover:text-foreground">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">{project.description}</p>
          {project.outcome && (
            <div className="mt-4 flex items-start gap-2 rounded-lg bg-muted/60 px-3 py-2.5">
              <span className="mt-px shrink-0 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/70">Result</span>
              <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">{project.outcome}</p>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-y-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span key={tech} className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground">{tech}</span>
            ))}
            {project.technologies.length > 6 && (
              <span className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground">+{project.technologies.length - 6} more</span>
            )}
          </div>
          <p className="text-[11px] text-muted-foreground/40">Click to view details →</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [project]);

  const imageCount = project.images?.length ?? 0;
  const showImage = imageCount > 0;

  function prevImage(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (!showImage) return;
    setImageIndex((i) => (i - 1 + imageCount) % imageCount);
  }

  function nextImage(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    if (!showImage) return;
    setImageIndex((i) => (i + 1) % imageCount);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        {/* Image */}
        <div className="relative h-52 w-full shrink-0 overflow-hidden bg-muted sm:h-60">
          {showImage ? (
            <>
              <Image
                src={project.images[imageIndex]}
                alt={project.title}
                fill
                className="object-cover"
              />

              {/* Prev image button */}
              <button
                onClick={prevImage}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/60 text-muted-foreground backdrop-blur-sm hover:bg-background/80"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {/* Next image button */}
              <button
                onClick={nextImage}
                aria-label="Next image"
                className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/60 text-muted-foreground backdrop-blur-sm hover:bg-background/80"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </>
          ) : (
            <ProjectPlaceholder index={project.index} />
          )}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <span className="rounded-md bg-background/80 px-2 py-1 text-[11px] font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
              {project.year}
            </span>
            <span className="rounded-md bg-background/80 px-2 py-1 text-[11px] font-medium tracking-wide text-muted-foreground backdrop-blur-sm">
              {project.type}
            </span>
          </div>
        </div>

        {/* Scrollable content */}
        <div className="flex flex-col gap-5 overflow-y-auto p-6 sm:p-7">
          {/* Title + links */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-medium tabular-nums text-muted-foreground/50">
                {project.index}
              </span>
              <h2 className="mt-0.5 text-2xl font-semibold tracking-tight">
                {project.title}
              </h2>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Code className="h-3.5 w-3.5" />
                Source
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background transition-opacity hover:opacity-80"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live demo
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {/* Role + Responsibilities — แยกกัน */}
          {project.role && (
            <div className="rounded-xl border border-border bg-muted/40 p-4">
              {/* ตำแหน่ง */}
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                Role
              </p>
              <p className="text-sm font-medium text-foreground">
                {project.role}
              </p>

              {/* สิ่งที่ทำ */}
              {project.responsibilities &&
                project.responsibilities.length > 0 && (
                  <>
                    <div className="my-3 h-px bg-border" />
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                      Responsibilities
                    </p>
                    {/* <ul className="space-y-1.5">
                      {project.responsibilities.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                          {item}
                        </li>
                      ))}
                    </ul> */}
                    <ul className="space-y-1.5 list-disc list-inside marker:text-muted-foreground/40">
                      {project.responsibilities.map((item, i) => (
                        <li key={i} className="text-sm text-foreground pl-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
            </div>
          )}

          {/* Outcome */}
          {project.outcome && (
            <div className="flex items-start gap-3 rounded-xl border border-border bg-muted/40 p-4">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                  Outcome
                </p>
                <p className="text-sm leading-relaxed text-foreground">
                  {project.outcome}
                </p>
              </div>
            </div>
          )}

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border bg-background px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center justify-between border-t border-border px-6 py-3">
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
            Previous
          </button>
          <span className="text-[11px] tabular-nums text-muted-foreground/50">
            {project.index} / {String(projects.length).padStart(2, "0")}
          </span>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
          >
            Next
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedProject =
    selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <>
      <main className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-6xl px-6 py-12 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Selected work
          </p>
          <h1 className="text-4xl font-semibold tracking-tight">Projects</h1>
          <div className="mt-4 h-px w-full bg-border" />
        </motion.div>

        {/* Cards */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onOpen={() => setSelectedIndex(i)}
            />
          ))}
        </div>
      </main>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && selectedIndex !== null && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedIndex(null)}
            onPrev={() =>
              setSelectedIndex((i) => (i !== null && i > 0 ? i - 1 : i))
            }
            onNext={() =>
              setSelectedIndex((i) =>
                i !== null && i < projects.length - 1 ? i + 1 : i,
              )
            }
            hasPrev={selectedIndex > 0}
            hasNext={selectedIndex < projects.length - 1}
          />
        )}
      </AnimatePresence>
    </>
  );
}
