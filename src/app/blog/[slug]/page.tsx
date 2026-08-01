import type { Metadata } from "next";
import { BlogPostClient } from "@/components/blog/BlogPostClient";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-data";

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Artículo no encontrado", description: "El artículo que buscas no existe." };
  return {
    title: `${post.title} — Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}