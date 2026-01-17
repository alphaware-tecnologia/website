import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  Users,
  CheckCircle,
  Star,
  Clock,
  Target,
  Lightbulb,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import contacts from "@/config/contacts";
import CTAButton from "@/components/ui/cta-button";

export default function Page() {
  return (
    <main>
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
                  Transforme Seu Negócio com{" "}
                  <span className="text-emerald-600">Software Sob Medida</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Desenvolvemos soluções de software personalizadas que
                  impulsionam o crescimento, otimizam operações e garantem
                  vantagem competitiva. Do conceito à implantação, somos seu
                  parceiro de tecnologia confiável.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton className="text-lg px-8" />

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
                  <div className="text-2xl font-bold text-gray-900">80+</div>
                  <div className="text-sm text-gray-600">
                    Projetos Entregues
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">
                    Satisfação dos Clientes
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">12+</div>
                  <div className="text-sm text-gray-600">
                    Anos de Experiência
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="hero-software-development.jpg"
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
            <Badge className="bg-emerald-100 text-emerald-800">
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Soluções de Software Completas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos serviços completos de desenvolvimento de software
              personalizado, adaptados às suas necessidades específicas de
              negócio e setor.
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
                  Aplicações web escaláveis e responsivas, construídas com
                  frameworks modernos e tecnologias de ponta para desempenho
                  otimizado.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Alto Desempenho
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Segurança Avançada
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
                <h3 className="text-xl font-semibold mb-4">
                  Aplicativos Mobile
                </h3>
                <p className="text-gray-600 mb-6">
                  Aplicativos nativos e multiplataforma que oferecem
                  experiências excepcionais em todos os dispositivos.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    iOS & Android nativos
                  </li>

                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Experiência do Usuário Intuitiva
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Integração com Backend
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Database className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Sistemas Corporativos
                </h3>
                <p className="text-gray-600 mb-6">
                  Soluções corporativas robustas incluindo ERP, CRM e sistemas
                  de gestão empresarial personalizados.
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
                <h3 className="text-xl font-semibold mb-4">
                  Soluções de Segurança
                </h3>
                <p className="text-gray-600 mb-6">
                  Implementações abrangentes de segurança para proteger seus
                  dados e garantir conformidade com padrões do setor.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Teste de penetração (pentest)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-emerald-600 mr-2" />
                    Desenvolvimento seguro
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors">
                  <Zap className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Soluções em Nuvem
                </h3>
                <p className="text-gray-600 mb-6">
                  Aplicações nativas em nuvem e serviços de migração para melhor
                  escalabilidade e eficiência de custos.
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
                <h3 className="text-xl font-semibold mb-4">
                  Consultoria & Suporte
                </h3>
                <p className="text-gray-600 mb-6">
                  Consultoria estratégica em tecnologia e suporte contínuo para
                  garantir que seu software continue gerando valor.
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
                <Badge className="bg-emerald-100 text-emerald-800">
                  Por Que Nos Escolher
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                  Seu Parceiro de Tecnologia Confiável
                </h2>
                <p className="text-xl text-gray-600">
                  Com mais de 12 anos de experiência, ajudamos empresas de
                  diversos setores a transformar suas operações através de
                  soluções de software personalizadas.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Soluções Sob Medida
                    </h3>
                    <p className="text-gray-600">
                      Cada solução é desenvolvida sob medida para atender seus
                      desafios e requisitos de negócio específicos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Entrega no Prazo
                    </h3>
                    <p className="text-gray-600">
                      Temos orgulho de entregar projetos dentro do cronograma
                      sem comprometer a qualidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Lightbulb className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Foco em Inovação
                    </h3>
                    <p className="text-gray-600">
                      Utilizamos tecnologias de ponta para garantir vantagem
                      competitiva no seu mercado.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-gray-600">
                    4.9/5 Avaliação dos Clientes
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="team-collaboration.jpg"
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
            <Badge className="bg-emerald-100 text-emerald-800">
              Nosso Processo
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo de desenvolvimento comprovado garante
              transparência, qualidade e entrega bem-sucedida do início ao fim.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold">Descoberta</h3>
              <p className="text-gray-600">
                Analisamos seus requisitos, entendemos seus objetivos de negócio
                e definimos o escopo do projeto.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold">Planejamento</h3>
              <p className="text-gray-600">
                Criamos planos de projeto detalhados, wireframes e
                especificações técnicas para sua aprovação.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold">Desenvolvimento</h3>
              <p className="text-gray-600">
                Nossos desenvolvedores especializados constroem sua solução
                usando metodologias ágeis com atualizações regulares.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold">Implantação</h3>
              <p className="text-gray-600">
                Implantamos sua solução e fornecemos suporte contínuo para
                garantir desempenho otimizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-xl text-emerald-100">
              Vamos discutir seu projeto e explorar como nossas soluções de
              software personalizado podem impulsionar seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton className="text-lg px-8 bg-white text-emerald-600 hover:bg-gray-100" />
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
                <Badge className="bg-emerald-100 text-emerald-800">
                  Entre em Contato
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Vamos Iniciar Seu Projeto
                </h2>
                <p className="text-xl text-gray-600">
                  Pronto para começar? Entre em contato hoje para uma consulta
                  gratuita e estimativa de projeto.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>

                  <div>
                    <div className="font-semibold">Telefone</div>
                    <a
                      href={contacts.whatsappLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-gray-600"
                    >
                      {contacts.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a
                      href={`mailto:${contacts.email}`}
                      className="text-gray-600 break-all"
                    >
                      {contacts.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
