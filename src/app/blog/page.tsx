import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <Badge className="bg-emerald-100 text-emerald-800 mb-4">Blog</Badge>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Insights e Novidades em Tecnologia
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Artigos, tutoriais e tendências do mundo do desenvolvimento de
            software e transformação digital.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Card
                key={post.slug}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="secondary"
                      className="bg-emerald-100 text-emerald-800"
                    >
                      {post.category}
                    </Badge>

                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString("pt-BR")}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.description}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium"
                  >
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
