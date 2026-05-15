import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About Me", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function ResumeNavbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/75 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-foreground transition-opacity hover:opacity-70"
        >
          Nopparat<span className="text-muted-foreground font-normal">CSI</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "rounded-md px-3.5 py-2 text-sm font-medium text-muted-foreground",
                  "transition-colors hover:bg-muted hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background shadow-sm transition-opacity hover:opacity-80 md:inline-flex"
        >
          Hire Me
        </Link>

        {/* Mobile scrollable row */}
        <div className="flex w-full items-center gap-1 overflow-x-auto pb-2 pt-0 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile row sits below the main bar */}
      <div className="flex w-full items-center gap-1 overflow-x-auto border-t border-border/30 px-4 py-1.5 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
