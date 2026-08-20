import { Code2, Mail } from "lucide-react";

const projects = [
  { title: "Slide Me - Admin Dashboard", year: "2025", stack: "React, Node.js, Express, MySQL, JWT, Leaflet, Docker, Bootstrap 5", highlights: ["Built an admin dashboard and back-office system for a slide truck towing platform.", "Implemented provider, user, and vehicle management with verification workflows.", "Integrated Leaflet maps for future tracking and routing visualisation.", "Secured and deployed the application with JWT authentication, Docker, and a clean API architecture."] },
  { title: "Point of Sale & Inventory Management System", year: "2025", stack: "Node.js, React, MongoDB, Stripe API, Docker, Vercel", highlights: ["Built a full-stack POS system for Admin, Cashier, and Warehouse roles with JWT authentication and shift guards.", "Integrated Stripe for cash, QR PromptPay, and credit-card payments, including webhooks and automatic stock deduction.", "Developed stock in/out, stock audits, low-stock alerts, and PDF/CSV reports.", "Deployed the backend in Docker and the frontend on Vercel with MongoDB Atlas."] },
  { title: "FootC Shop - E-Commerce", year: "2026", stack: "ASP.NET Core MVC, C#, Razor Views, Entity Framework Core 9, MySQL, Cookie Auth", highlights: ["Built a footwear e-commerce platform with product browsing, cart, checkout, and order management.", "Implemented SuperAdmin, Admin, and Packer authorization using cookies and policy-based access control.", "Created an admin dashboard for order tracking, sales metrics, and refund handling.", "Designed a MySQL database with 13+ entities, including products, variants, orders, and promotions."] },
];

const skills = [
  ["Frontend", "React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5", "CSS3"],
  ["Backend", "Node.js", "Express.js", "C#"],
  ["Database", "MongoDB", "Supabase", "SQL"],
  ["AI & Automation", "RAG Architecture", "LangChain", "Hugging Face", "n8n"],
  ["Tools & Others", "Git", "Docker", "RESTful APIs", "Postman"],
];

export default function ResumePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8 lg:py-16">
      <section className="border-b pb-10">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Resume</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">Nopparat Suwanna</h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-muted-foreground">Fourth-year Computer Science student at Sripatum University with full-stack web development experience. Seeking a Full-Stack or AI Engineer internship opportunity.</p>
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
          <a className="inline-flex items-center gap-2 hover:text-foreground" href="mailto:nopparat.suws@gmail.com"><Mail className="h-4 w-4" />nopparat.suws@gmail.com</a>
          <a className="inline-flex items-center gap-2 hover:text-foreground" href="https://github.com/nopparatCSI" target="_blank" rel="noreferrer"><Code2 className="h-4 w-4" />github.com/nopparatCSI</a>
        </div>
      </section>

      <section className="py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Education</p>
        <div className="mt-4 rounded-xl border bg-card p-6 shadow-sm">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"><h2 className="text-xl font-semibold">Bachelor of Science in Computer Science</h2><span className="text-sm text-muted-foreground">2023 - Present</span></div>
          <p className="mt-2 text-muted-foreground">Sripatum University, Bangkok</p>
          <p className="mt-4 text-sm text-muted-foreground">CGPA: 3.63 · Relevant courses: Data Structures, Web Development, Databases, Software Engineering</p>
        </div>
      </section>

      <section className="border-t py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Projects</p>
        <div className="mt-5 space-y-5">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"><h2 className="text-xl font-semibold">{project.title}</h2><span className="text-sm text-muted-foreground">{project.year}</span></div>
              <p className="mt-3 text-sm font-medium text-muted-foreground">Tech stack: {project.stack}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">{project.highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span aria-hidden="true">•</span><span>{highlight}</span></li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t py-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Skills</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(([category, ...items]) => (
            <div key={category} className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{category}</h2>
              <div className="mt-4 flex flex-wrap gap-2">{items.map((skill) => <span key={skill} className="rounded-md border bg-muted/50 px-2.5 py-1 text-xs font-medium">{skill}</span>)}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
