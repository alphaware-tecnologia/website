import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Target,
  Lightbulb,
  Menu,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-gray-900">Alphaware Tecnologia</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Serviços
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Sobre
              </Link>
              <Link href="#process" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Processo
              </Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Portfólio
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-emerald-600 transition-colors">
                Contato
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                Solicitar Orçamento
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Iniciar Projeto</Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden bg-transparent">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
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
                    <Button variant="outline" className="w-full bg-transparent">
                      Solicitar Orçamento
                    </Button>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Iniciar Projeto</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  Desenvolvimento de Software Personalizado
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transforme Seu Negócio com
                  <span className="text-emerald-600"> Software Sob Medida</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Desenvolvemos soluções de software personalizadas que impulsionam o crescimento, otimizam operações e
                  garantem vantagem competitiva. Do conceito à implantação, somos seu parceiro de tecnologia confiável.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                  Iniciar Seu Projeto
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                >
                  Ver Nosso Trabalho
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Satisfação dos Clientes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">8+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/hero-software-development.jpg"
                  alt="Desenvolvimento de Software Personalizado"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-full h-full bg-emerald-200 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-800">Nossos Serviços</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Soluções de Software Completas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos serviços completos de desenvolvimento de software personalizado, adaptados às suas necessidades
              específicas de negócio e setor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Globe className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Aplicações Web</h3>
                <p className="text-gray-600 mb-6">
                  Aplicações web escaláveis e responsivas, construídas com frameworks modernos e tecnologias de ponta
                  para desempenho otimizado.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Alto Desempenho
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Segurança Empresarial
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Acessibilidade Total
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Smartphone className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Aplicativos Mobile</h3>
                <p className="text-gray-600 mb-6">
                  Aplicativos nativos e multiplataforma que oferecem experiências excepcionais em todos os dispositivos.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    iOS & Android nativos
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    React Native, Flutter
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Otimização para lojas
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Database className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Sistemas Corporativos</h3>
                <p className="text-gray-600 mb-6">
                  Soluções corporativas robustas incluindo ERP, CRM e sistemas de gestão empresarial personalizados.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Sistemas ERP & CRM
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Integrações de API
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Modernização de sistemas legados
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Shield className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Soluções de Segurança</h3>
                <p className="text-gray-600 mb-6">
                  Implementações abrangentes de segurança para proteger seus dados e garantir conformidade com padrões
                  do setor.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Criptografia de dados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Sistemas de autenticação
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Frameworks de conformidade
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Zap className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Soluções em Nuvem</h3>
                <p className="text-gray-600 mb-6">
                  Aplicações nativas em nuvem e serviços de migração para melhor escalabilidade e eficiência de custos.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    AWS, Azure, GCP
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Arquitetura de microserviços
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    DevOps & CI/CD
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Users className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Consultoria & Suporte</h3>
                <p className="text-gray-600 mb-6">
                  Consultoria estratégica em tecnologia e suporte contínuo para garantir que seu software continue
                  gerando valor.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Estratégia de tecnologia
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Suporte 24/7
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Manutenção & atualizações
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800">Por Que Nos Escolher</Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Seu Parceiro de Tecnologia Confiável</h2>
                <p className="text-xl text-gray-600">
                  Com mais de 8 anos de experiência, ajudamos empresas de diversos setores a transformar suas operações
                  através de soluções de software personalizadas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Soluções Sob Medida</h3>
                    <p className="text-gray-600">
                      Cada solução é desenvolvida sob medida para atender seus desafios e requisitos de negócio
                      específicos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Entrega no Prazo</h3>
                    <p className="text-gray-600">
                      Temos orgulho de entregar projetos dentro do cronograma sem comprometer a qualidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Foco em Inovação</h3>
                    <p className="text-gray-600">
                      Utilizamos tecnologias de ponta para garantir vantagem competitiva no seu mercado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-600">4.9/5 Avaliação dos Clientes</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/team-collaboration.jpg"
                alt="Nossa Equipe"
                width={600}
                height={500}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-800">Nosso Processo</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Como Trabalhamos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo de desenvolvimento comprovado garante transparência, qualidade e entrega bem-sucedida do
              início ao fim.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold">Descoberta</h3>
              <p className="text-gray-600">
                Analisamos seus requisitos, entendemos seus objetivos de negócio e definimos o escopo do projeto.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold">Planejamento</h3>
              <p className="text-gray-600">
                Criamos planos de projeto detalhados, wireframes e especificações técnicas para sua aprovação.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold">Desenvolvimento</h3>
              <p className="text-gray-600">
                Nossos desenvolvedores especializados constroem sua solução usando metodologias ágeis com atualizações
                regulares.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold">Implantação</h3>
              <p className="text-gray-600">
                Implantamos sua solução e fornecemos suporte contínuo para garantir desempenho otimizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-emerald-100 text-emerald-800">Portfólio</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">Casos de Sucesso</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore alguns de nossos projetos recentes e veja como ajudamos empresas a alcançar seus objetivos através
              de software personalizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-emerald-400 to-emerald-600"></div>
              <CardContent className="p-6">
                <Badge className="mb-3">E-commerce</Badge>
                <h3 className="text-xl font-semibold mb-2">Marketplace Multi-vendedor</h3>
                <p className="text-gray-600 mb-4">
                  Construímos uma plataforma de marketplace abrangente com gestão de vendedores, processamento de
                  pagamentos e análises.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Ver Caso de Estudo <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <CardContent className="p-6">
                <Badge className="mb-3">Saúde</Badge>
                <h3 className="text-xl font-semibold mb-2">Sistema de Gestão de Pacientes</h3>
                <p className="text-gray-600 mb-4">
                  Desenvolvemos um sistema compatível com HIPAA para gerenciar prontuários médicos e agendamento de
                  consultas.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Ver Caso de Estudo <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600"></div>
              <CardContent className="p-6">
                <Badge className="mb-3">Financeiro</Badge>
                <h3 className="text-xl font-semibold mb-2">Plataforma de Investimentos</h3>
                <p className="text-gray-600 mb-4">
                  Criamos uma plataforma segura de investimentos com negociações em tempo real e recursos de gestão de
                  portfólio.
                </p>
                <div className="flex items-center text-emerald-600 font-medium">
                  Ver Caso de Estudo <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Pronto para Transformar Seu Negócio?</h2>
            <p className="text-xl text-emerald-100">
              Vamos discutir seu projeto e explorar como nossas soluções de software personalizado podem impulsionar seu
              negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 bg-white text-emerald-600 hover:bg-gray-100"
              >
                Agendar Consultoria
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
              >
                Orçamento Gratuito
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4 text-center">
                <Badge className="bg-emerald-100 text-emerald-800">Entre em Contato</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Vamos Iniciar Seu Projeto</h2>
                <p className="text-xl text-gray-600">
                  Pronto para começar? Entre em contato hoje para uma consulta gratuita e estimativa de projeto.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="text-gray-600">+55 (11) 99999-9999</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-600">contato@alphaware.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
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
                <span className="text-xl font-bold">Alphaware Tecnologia</span>
              </div>
              <p className="text-gray-400">
                Transformando negócios através de soluções de software inovadoras e personalizadas.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Li</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Tw</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">Gh</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Aplicativos Mobile
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Sistemas Corporativos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Soluções em Nuvem
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Nossa Equipe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Carreiras
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-emerald-400 transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+55 (11) 99999-9999</li>
                <li>contato@alphaware.com</li>
                <li>
                  Rua da Tecnologia, 123
                  <br />
                  São Paulo, SP 01234-000
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Alphaware Tecnologia. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
