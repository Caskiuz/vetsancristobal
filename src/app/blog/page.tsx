import type { Metadata } from "next";
import { BlogListClient } from "@/components/blog/BlogListClient";

export const metadata: Metadata = {
  title: "Blog — VetSanCristóbal",
  description: "Artículos, consejos y guías de nuestros expertos.",
};

export default function BlogPage() {
  return <BlogListClient />;
}