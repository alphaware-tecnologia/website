import { Button } from "@/components/ui/button";
import contacts from "@/config/contacts";
import posts from "@/config/posts";
import { ArrowLeft, Badge, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { default: Post, metadata } = await import(
    "@/content/" + (await params).slug + ".mdx"
  );

  return (
    <main>
      {/* Article */}
      <article className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Back Link */}
          <Link
            href="/blog"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para o Blog
          </Link>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto">
            <Badge className="bg-emerald-100 text-emerald-800 mb-4">
              {metadata.category}
            </Badge>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {metadata.title}
            </h1>

            <p className="text-xl text-gray-600 mb-6">{metadata.description}</p>

            <div className="flex items-center space-x-6 text-gray-500 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {metadata.author}
              </div>

              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />

                {new Date(metadata.date).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
              <Image
                src={metadata.image || "/placeholder.svg"}
                alt={metadata.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-emerald-600 prose-strong:text-gray-900 prose-ul:text-gray-600 prose-ol:text-gray-600">
              <Post />
            </div>
          </header>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para Transformar Suas Ideias em Realidade?
          </h2>

          <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            com soluções de software personalizadas.
          </p>

          <a
            href={contacts.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-600 hover:bg-gray-100 cursor-pointer"
            >
              Fale Conosco
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}
