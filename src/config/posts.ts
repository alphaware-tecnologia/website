export interface PostMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const posts: PostMetadata[] = [
  {
    slug: "transformacao-digital-empresas",
    title: "Transformação Digital: Como Modernizar Sua Empresa",
    description:
      "Descubra os passos essenciais para implementar a transformação digital na sua empresa e garantir competitividade no mercado atual.",
    date: "2024-01-15",
    author: "João Silva",
    category: "Transformação Digital",
    image: "/blog/digital-transformation.png",
  },
  {
    slug: "seguranca-aplicacoes-web",
    title: "Segurança em Aplicações Web: Melhores Práticas",
    description:
      "Aprenda as melhores práticas de segurança para proteger suas aplicações web contra vulnerabilidades e ataques cibernéticos.",
    date: "2024-01-10",
    author: "Maria Santos",
    category: "Segurança",
    image: "/blog/web-security-cybersecurity.jpg",
  },
  {
    slug: "inteligencia-artificial-negocios",
    title: "Inteligência Artificial: Aplicações Práticas para Negócios",
    description:
      "Explore como a inteligência artificial pode revolucionar processos empresariais e aumentar a eficiência operacional.",
    date: "2024-01-05",
    author: "Carlos Oliveira",
    category: "Inteligência Artificial",
    image: "/blog/ai-business-concept.png",
  },
  {
    slug: "desenvolvimento-agil-scrum",
    title: "Desenvolvimento Ágil: Implementando Scrum na Prática",
    description:
      "Guia completo para implementar metodologias ágeis e Scrum em equipes de desenvolvimento de software.",
    date: "2024-01-01",
    author: "Ana Costa",
    category: "Metodologias Ágeis",
    image: "/blog/agile-scrum-software-development.jpg",
  },
];

export default posts;
