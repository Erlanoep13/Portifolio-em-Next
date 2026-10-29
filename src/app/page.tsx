import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Erlano Benevides | Desenvolvedor Full Stack & Mobile",
  description:
    "Portfólio de Erlano Benevides de Sousa: Desenvolvedor Full Stack, Mobile e Inteligência Artificial. Estudante de Análise e Desenvolvimento de Sistemas no IFCE.",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-tr from-blue-600 to-cyan-500 font-bold text-white shadow-lg shadow-blue-500/20">
              EB
            </div>
            <div className="flex flex-col text-left">
              <span className="text-base font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Erlano Benevides
              </span>
              <span className="text-xs text-slate-400">
                Desenvolvedor Full Stack
              </span>
            </div>
          </Link>

          {/* Navegação interna via Link */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 transition-colors"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/projetos"
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Projetos
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden py-20 sm:py-28">
          {/* Efeitos de fundo com gradiente */}
          <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 right-10 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

          <div className="mx-auto max-w-5xl px-6 text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Estudante de ADS • IFCE Campus Boa Viagem
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Erlano Benevides <br className="hidden sm:inline" />
              <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                de Sousa
              </span>
            </h1>

            <p className="mt-4 text-xl font-semibold text-slate-300 sm:text-2xl">
              Desenvolvedor Full Stack & Entusiasta de Inteligência Artificial
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400 leading-relaxed sm:text-lg">
              Apaixonado por arquitetura de software, desenvolvimento mobile nativo
              e integração com LLMs. Experiência prática na estruturação de soluções
              completas do zero à produção, unindo impacto social e alto padrão de UX.
            </p>

            {/* Ações / Botões com <Link> */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-500 hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                <span>Explorar Projetos</span>
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>

              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-slate-500 hover:bg-slate-800 hover:text-white hover:-translate-y-0.5"
              >
                <span>Conhecer Minha Trajetória</span>
                <svg
                  className="h-4 w-4 text-slate-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
            </div>

            {/* Informações de Contato / Redes */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Boa Viagem, Ceará, Brasil
              </span>
              <span className="hidden sm:inline text-slate-700">•</span>
              <Link
                href="https://www.linkedin.com/in/erlanobenevides/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </Link>
              <span className="hidden sm:inline text-slate-700">•</span>
              <Link
                href="https://github.com/Erlanoep13"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <svg
                  className="h-4 w-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </Link>
            </div>
          </div>
        </section>

        {/* RESUMO DAS HABILIDADES PRINCIPAIS */}
        <section className="border-t border-slate-900 bg-slate-900/40 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Competências & Tecnologias
              </h2>
              <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Pilares de Especialização Técnica
              </p>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-400">
                Uma visão consolidada das ferramentas e metodologias aplicadas no
                desenvolvimento de produtos ponta a ponta.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Full Stack */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-blue-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Frontend & Backend
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Criação de interfaces reativas e APIs resilientes com TypeScript,
                  React, Next.js, Node.js e Python (Django REST e FastAPI).
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    Next.js
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    TypeScript
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    Tailwind CSS
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    Node.js
                  </span>
                </div>
              </div>

              {/* Card 2: Mobile Nativo */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Desenvolvimento Mobile
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Aplicativos móveis com React Native e Expo, navegação por gestos,
                  integração com Google Maps API e alta fluidez na experiência do usuário.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    React Native
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    Expo
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    Context API
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    Maps API
                  </span>
                </div>
              </div>

              {/* Card 3: IA & LLMs */}
              <div className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-indigo-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-indigo-500/10 sm:col-span-2 lg:col-span-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <svg
                    className="h-6 w-6"
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
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Inteligência Artificial & LLMs
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Adaptação de modelos avançados (Gemini Flash), automação com LangChain
                  e LangGraph, e sistemas RAG aplicados a demandas reais.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    Gemini Flash
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    LangChain
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    LangGraph
                  </span>
                  <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
                    RAG
                  </span>
                </div>
              </div>
            </div>

            {/* Link para a página Sobre */}
            <div className="mt-10 text-center">
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Ver lista completa de habilidades, testes e ferramentas</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </section>

        {/* PRÉVIA DE PROJETOS EM DESTAQUE */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Portfólio em Ação
                </h2>
                <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Projetos Recentes em Destaque
                </p>
              </div>
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Ver todos os projetos detalhados</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Projeto 1: Acesso Livre */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
                      Web & Mobile
                    </span>
                    <span className="text-xs text-slate-500">
                      Crowdsourcing & Acessibilidade
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    Acesso Livre
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    Mapeamento colaborativo de acessibilidade urbana (rampas, pisos
                    táteis e adaptações PCD). Criado inicialmente na web e evoluído
                    para mobile nativo com React Native para melhor usabilidade em campo.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500">
                    React Native • Expo • Google Maps
                  </span>
                  <Link
                    href="/projetos"
                    className="text-xs font-semibold text-blue-400 hover:underline"
                  >
                    Detalhes &rarr;
                  </Link>
                </div>
              </div>

              {/* Projeto 2: LLM Focada em Agricultura */}
              <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20">
                      Inteligência Artificial
                    </span>
                    <span className="text-xs text-slate-500">Setor Primário</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-white">
                    LLM Focada em Agricultura
                  </h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                    Integração e adaptação do modelo LLM Gemini Flash com LangChain e
                    LangGraph, orientada a apoiar produtores em rotinas, diagnósticos e
                    processos agrícolas.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-500">
                    Python • LangChain • LangGraph • Gemini
                  </span>
                  <Link
                    href="/projetos"
                    className="text-xs font-semibold text-indigo-400 hover:underline"
                  >
                    Detalhes &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-white">
              Erlano Benevides de Sousa
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Atividade Prática 03 • PWII • IFCE Campus Boa Viagem • Prof. Wesnei de Paiva Batista
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/projetos"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Projetos
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
