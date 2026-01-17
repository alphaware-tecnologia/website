import { glob } from "node:fs/promises";
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  keywords: string[];
}

type PostMetadataWithSlug = PostMetadata & { slug: string };

export async function getPosts(): Promise<PostMetadataWithSlug[]> {
  const mdxFiles = glob(join(__dirname, "..", "blog-posts", "*.mdx"));
  const posts: PostMetadataWithSlug[] = [];

  for await (const filePath of mdxFiles) {
    const slug = basename(filePath, ".mdx");

    const { metadata }: { metadata: Omit<PostMetadata, "slug"> } = await import(
      `@/blog-posts/${slug}.mdx`
    );

    posts.push({ ...metadata, slug });
  }

  return posts;
}
