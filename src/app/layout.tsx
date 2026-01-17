import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import { Code2, Instagram, Menu } from "lucide-react";
import Link from "next/link";
import CTAButton from "@/components/ui/cta-button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import contacts from "@/config/contacts";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alphaware Tecnologia",
  description: "Soluções em software personalizadas para o seu negócio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <div className="min-h-screen bg-white">
          {/* Header */}
          <header className="border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60 sticky top-0 z-50">
            <div className="lg:container mx-auto px-4 lg:px-6">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center space-x-2 md:whitespace-nowrap">
                  <Code2 className="h-8 w-8 text-emerald-600" />
                  <span className="text-xl font-bold text-gray-900">
                    Alphaware Tecnologia
                  </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8 mx-2">
                  <Link
                    href="#services"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Serviços
                  </Link>
                  <Link
                    href="#about"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Sobre
                  </Link>
                  <Link
                    href="#process"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Processo
                  </Link>
                  <Link
                    href="/blog"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#contact"
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    Contato
                  </Link>
                </nav>

                <div className="hidden lg:flex items-center space-x-4">
                  <CTAButton />
                </div>

                {/* Mobile Navigation */}
                <Sheet>
                  <SheetTitle className="hidden">Menu</SheetTitle>

                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="md:hidden bg-transparent"
                    >
                      <Menu className="h-6 w-6" />
                    </Button>
                  </SheetTrigger>

                  <SheetContent>
                    <div className="flex flex-col space-y-4 mt-8 px-10">
                      <Link href="#services" className="text-lg font-medium">
                        Serviços
                      </Link>
                      <Link href="#about" className="text-lg font-medium">
                        Sobre
                      </Link>
                      <Link href="#process" className="text-lg font-medium">
                        Processo
                      </Link>
                      <Link href="#portfolio" className="text-lg font-medium">
                        Portfólio
                      </Link>
                      <Link href="#contact" className="text-lg font-medium">
                        Contato
                      </Link>
                      <div className="pt-4 space-y-2">
                        <CTAButton />
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </header>

          {children}

          {/* Floating WhatsApp Button */}
          <a
            href={contacts.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
            aria-label="Fale conosco no WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4 lg:px-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Code2 className="h-8 w-8 text-emerald-400" />
                    <span className="text-xl font-bold">
                      Alphaware Tecnologia
                    </span>
                  </div>
                  <p className="text-gray-400">
                    Transformando negócios através de soluções de software
                    inovadoras e personalizadas.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={contacts.instagramLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
                    >
                      <span className="text-sm font-bold">
                        <Instagram />
                      </span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Serviços</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link
                        href="#"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        Desenvolvimento Web
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        Aplicativos Mobile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        Sistemas Corporativos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        Soluções em Nuvem
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Empresa</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <Link
                        href="#about"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        Sobre Nós
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#services"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        Serviços
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/blog"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        Blog
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#contact"
                        className="hover:text-emerald-400 transition-colors"
                      >
                        Contato
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Contato</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>{contacts.phone}</li>
                    <li className="break-all">{contacts.email}</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400">
                  © {new Date().getFullYear()} Alphaware Tecnologia. Todos os
                  direitos reservados.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Política de Privacidade
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    Termos de Serviço
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
