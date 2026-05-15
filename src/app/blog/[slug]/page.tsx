import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/content";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-16">
      <header className="mb-10 border-b pb-8">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">
          {new Date(post.frontmatter.date).toLocaleDateString()}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">{post.frontmatter.title}</h1>
        <p className="mt-3 text-muted-foreground">{post.frontmatter.description}</p>
      </header>

      <article className="prose prose-neutral max-w-none dark:prose-invert">{post.content}</article>
    </main>
  );
}