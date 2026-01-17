import { Button } from "@/components/ui/button";
import { Code2, Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col">
      {/* Conteúdo principal */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* Número 404 estilizado */}
          <div className="relative mb-8">
            <h1 className="text-[180px] md:text-[220px] font-bold text-gray-100 leading-none select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-emerald-100 rounded-full p-6">
                <Search className="h-16 w-16 text-emerald-600" />
              </div>
            </div>
          </div>

          {/* Mensagem */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Página não encontrada
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida
            para outro endereço.
          </p>

          {/* Botões de ação */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              className="bg-emerald-600 hover:bg-emerald-700 min-w-[180px]"
            >
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Voltar ao Início
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent min-w-[180px]"
            >
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver Blog
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
