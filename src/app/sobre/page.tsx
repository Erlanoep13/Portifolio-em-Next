import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nós | PW2",
  description: "Conheça mais sobre nosso projeto, missão, valores e as tecnologias que utilizamos.",
};

export default function SobrePage() {
  const cards = [
    {
      title: "Nossa Missão",
      description:
        "Desenvolver aplicações modernas, escaláveis e de alta performance, unindo design intuitivo e boas práticas de engenharia de software.",
      icon: (
        <svg
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Nossa Visão",
      description:
        "Tornar-se referência no ecossistema web fullstack, explorando o máximo potencial do Next.js, React e TypeScript.",
      icon: (
        <svg
          className="h-6 w-6 text-indigo-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ),
    },
    {
      title: "Nossos Valores",
      description:
        "Compromisso com código limpo, experiência do usuário impecável, acessibilidade, segurança e aprendizado contínuo.",
      icon: (
        <svg
          className="h-6 w-6 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  const stats = [
    { value: "100%", label: "TypeScript & Tipagem Estrita" },
    { value: "Next.js", label: "App Router & Turbopack" },
    { value: "Tailwind", label: "Design Moderno & Responsivo" },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb / Navegação Superior */}
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
            Voltar para a Página Inicial
          </Link>
        </div>

        {/* Hero Section */}
        <header className="text-center mb-16 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full text-xs font-semibold tracking-wide uppercase bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            Quem Somos
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Criando experiências digitais com{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              paixão e inovação
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Somos dedicados a transformar ideias em realidade digital por meio de
            tecnologias modernas, foco absoluto em qualidade e atenção aos mínimos detalhes.
          </p>
        </header>

        {/* Grid de Cards (Missão, Visão, Valores) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h2 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
                  {card.title}
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Destaques / Stats */}
        <section className="p-8 rounded-2xl bg-zinc-100/80 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Chamada para Ação / Rodapé Interno */}
        <section className="text-center p-8 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 text-white dark:from-zinc-900 dark:to-zinc-950 border border-zinc-800">
          <h2 className="text-2xl font-bold mb-2">Quer saber mais sobre o projeto?</h2>
          <p className="text-zinc-300 text-sm mb-6 max-w-md mx-auto">
            Estamos sempre abertos a colaborações, sugestões e novos desafios.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-sm bg-white text-zinc-900 hover:bg-zinc-100 transition-colors shadow-sm"
            >
              Ir para o Início
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
