import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted-foreground">Content is sourced from local MDX files.</p>

      <div className="mt-10 space-y-4">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-xl border bg-card p-5">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <h2 className="mt-2 text-xl font-medium">{post.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
            <Link className="mt-4 inline-flex text-sm font-medium underline" href={`/blog/${post.slug}`}>
              Read post
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}