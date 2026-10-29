import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projetos | PW2",
  description: "Conheça nossos projetos recentes, soluções digitais e experimentos práticos.",
};

interface Projeto {
  id: string;
  title: string;
  category: string;
  status: "Concluído" | "Em Progresso" | "Planejado";
  description: string;
  tags: string[];
  link?: string;
}

const projetos: Projeto[] = [
  {
    id: "1",
    title: "Plataforma de Gestão",
    category: "Fullstack",
    status: "Concluído",
    description: "Sistema ágil de controle de fluxos operacionais e métricas em tempo real para equipes.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    id: "2",
    title: "Dashboard de Finanças",
    category: "Analytics",
    status: "Concluído",
    description: "Visualização interativa de despesas, orçamentos e relatórios preditivos mensais.",
    tags: ["React", "Chart.js", "Node.js"],
  },
  {
    id: "3",
    title: "E-Commerce Headless",
    category: "Web App",
    status: "Em Progresso",
    description: "Loja virtual ultrarrápida com catálogo modular e checkout otimizado para conversão.",
    tags: ["Next.js 15", "Stripe", "Prisma"],
  },
  {
    id: "4",
    title: "API Gateway Segura",
    category: "Backend",
    status: "Concluído",
    description: "Autenticação centralizada com rate-limiting e monitoramento contínuo de microsserviços.",
    tags: ["Node.js", "Docker", "Redis"],
  },
  {
    id: "5",
    title: "Portal Educacional",
    category: "EdTech",
    status: "Em Progresso",
    description: "Ambiente virtual de aprendizagem com suporte a vídeos, quizzes interativos e certificados.",
    tags: ["TypeScript", "PostgreSQL", "Tailwind"],
  },
  {
    id: "6",
    title: "Aplicativo Mobile Connect",
    category: "Mobile",
    status: "Planejado",
    description: "App corporativo focado em comunicação interna ágil e notificações inteligentes.",
    tags: ["React Native", "Expo", "GraphQL"],
  },
];

const statusStyles: Record<Projeto["status"], string> = {
  Concluído: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  "Em Progresso": "bg-amber-100 text-amber-700 dark:bg-amber-950/70 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  Planejado: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700",
};

export default function ProjetosPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-5xl mx-auto">
        {/* Navegação Superior / Voltar */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar para o Início
          </Link>
        </div>

        {/* Hero Section */}
        <header className="text-center mb-16 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Portfólio & Iniciativas
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Nossos{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Projetos Recentes
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Uma seleção de aplicações construídas com foco em desempenho, design intuitivo e arquitetura robusta.
          </p>
        </header>

        {/* Grade de Projetos */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projetos.map((proj) => (
            <article
              key={proj.id}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    {proj.category}
                  </span>
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${statusStyles[proj.status]}`}
                  >
                    {proj.status}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                  {proj.title}
                </h2>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Resumo Rápido / Estatísticas */}
        <section className="p-8 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                6+
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Soluções Ativas
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                100%
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Foco em Performance
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">
                Moderna
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Stack com Next.js & TypeScript
              </div>
            </div>
          </div>
        </section>

        {/* Chamada para Ação */}
        <section className="text-center p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 text-white dark:from-zinc-900 dark:to-zinc-950 border border-zinc-800">
          <h2 className="text-2xl font-bold mb-2">Tem uma ideia de novo projeto?</h2>
          <p className="text-zinc-300 text-sm mb-6 max-w-md mx-auto">
            Podemos transformar sua proposta em código eficiente e bem estruturado.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-sm bg-white text-zinc-900 hover:bg-zinc-100 transition-colors shadow-sm"
            >
              Voltar ao Início
            </Link>
            <Link
              href="/sobre"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-sm bg-zinc-800 text-white hover:bg-zinc-700 transition-colors border border-zinc-700"
            >
              Conhecer a Equipe
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
