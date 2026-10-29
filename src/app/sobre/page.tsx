import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Mim | Erlano Benevides",
  description:
    "Conheça o perfil profissional, formação acadêmica no IFCE e repertório de habilidades técnicas de Erlano Benevides de Sousa.",
};

export default function SobrePage() {
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
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Início
            </Link>
            <Link
              href="/sobre"
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 transition-colors"
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
      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* CABEÇALHO DA PÁGINA */}
          <div className="border-b border-slate-800 pb-10">
            <span className="rounded-full bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
              Trajetória & Competências
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Sobre Mim
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-slate-400 leading-relaxed">
              Desenvolvedor Full Stack, estudante de Análise e Desenvolvimento de Sistemas no IFCE e entusiasta de inteligência artificial aplicada.
            </p>
          </div>

          {/* SEÇÃO 1: PERFIL PROFISSIONAL */}
          <section className="mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <svg
                      className="h-5 w-5"
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
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Perfil Profissional
                  </h2>
                </div>

                <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                  <p>
                    Desenvolvedor Full Stack e estudante de{" "}
                    <strong className="text-white">Análise e Desenvolvimento de Sistemas</strong>, com
                    forte interesse em arquitetura de software, desenvolvimento mobile nativo
                    e inteligência artificial.
                  </p>
                  <p>
                    Possuo experiência prática em estruturação de projetos do zero à produção,
                    trabalhando com metodologias ágeis (<strong>Git Flow</strong>) e atuando tanto
                    no frontend quanto no backend.
                  </p>
                  <p className="border-l-2 border-blue-500 pl-4 italic text-slate-400">
                    &ldquo;Tenho foco constante em criar soluções de impacto social e otimizar
                    a experiência do usuário (UX), garantindo interfaces intuitivas aliadas a
                    serviços eficientes e bem testados.&rdquo;
                  </p>
                </div>
              </div>

              {/* DADOS RÁPIDOS */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-6">
                    Informações Rápidas
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-slate-500 block text-xs uppercase font-semibold">
                        Localização
                      </span>
                      <span className="text-slate-200 font-medium flex items-center gap-1.5 mt-1">
                        📍 Boa Viagem, Ceará, Brasil
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 block text-xs uppercase font-semibold">
                        Área de Atuação
                      </span>
                      <span className="text-slate-200 font-medium block mt-1">
                        Desenvolvimento Web & Mobile Full Stack
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 block text-xs uppercase font-semibold">
                        Foco de Estudo
                      </span>
                      <span className="text-slate-200 font-medium block mt-1">
                        Arquitetura de Software & Modelos de Linguagem (LLMs)
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 block text-xs uppercase font-semibold">
                        Metodologia
                      </span>
                      <span className="text-slate-200 font-medium block mt-1">
                        Git Flow, TDD, Clean Code & Agile
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <Link
                    href="/projetos"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-500 transition-colors"
                  >
                    Ver Projetos em Destaque
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SEÇÃO 2: EDUCAÇÃO */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Formação Acadêmica
                </h2>
                <p className="text-sm text-slate-400">
                  Fundamentação teórica e prática em instituições de referência
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Formação 1: IFCE */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 relative overflow-hidden transition-all duration-300 hover:border-slate-700">
                <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-blue-500 to-cyan-400" />
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Ensino Superior
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Graduação em Análise e Desenvolvimento de Sistemas
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  Instituto Federal de Educação, Ciência e Tecnologia do Ceará (IFCE)
                </p>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  Campus Boa Viagem. Formação com ênfase em engenharia de software,
                  programação web/mobile, modelagem de banco de dados, sistemas distribuídos
                  e computação aplicada.
                </p>
              </div>

              {/* Formação 2: EEEP Venceslau Vieira Batista */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 relative overflow-hidden transition-all duration-300 hover:border-slate-700">
                <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-cyan-400 to-indigo-500" />
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                  Ensino Médio e Técnico
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">
                  Ensino Médio Integrado — Técnico em Informática
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  EEEP Venceslau Vieira Batista
                </p>
                <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                  Base técnica sólida que contemplou lógica de programação, arquitetura de computadores,
                  redes, algoritmos fundamentais e práticas de desenvolvimento de software desde o início dos estudos.
                </p>
              </div>
            </div>
          </section>

          {/* SEÇÃO 3: HABILIDADES E TECNOLOGIAS (DETALHADO) */}
          <section className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <svg
                  className="h-5 w-5"
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
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Habilidades & Tecnologias
                </h2>
                <p className="text-sm text-slate-400">
                  Matriz de competências técnicas organizadas por categoria de atuação
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Frontend
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Construção de interfaces modernas, responsivas e performáticas.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-200 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mobile */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  Mobile
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Desenvolvimento nativo e cross-platform focado na experiência do usuário.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React Native", "Expo", "React Navigation"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-cyan-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend & Banco de Dados */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Backend & Bancos de Dados
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  APIs RESTful, persistência de dados e serviços escaláveis.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Python",
                    "Django REST",
                    "FastAPI",
                    "C++",
                    "SQLite",
                    "PostgreSQL",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-emerald-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inteligência Artificial */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                  Inteligência Artificial
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Modelos de linguagem, orquestração e recuperação de informação.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Gemini Flash",
                    "LangChain",
                    "LangGraph",
                    "RAG (Retrieval-Augmented)",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-purple-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arquitetura e Estado */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Arquitetura & Estado
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Padrões arquiteturais para manutenção e desacoplamento de software.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Context API",
                    "Hooks",
                    "Padrão MVC",
                    "Arquitetura Monolítica",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-amber-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Teste de Software */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-rose-400" />
                  Teste de Software
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Garantia de qualidade, testes unitários, e2e e análise estática.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Cypress", "Sonar", "Jest", "Vitest", "K6"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-rose-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ferramentas e DevOps (Largura total no grid se ímpar) */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:col-span-2 lg:col-span-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-sky-400" />
                  Ferramentas & DevOps
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  Controle de versão, esteiras ágeis e conteinerização para deploy consistente.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Git", "Git Flow", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-800/80 px-3 py-1 text-xs font-semibold text-sky-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* SEÇÃO 4: OUTRAS ATIVIDADES */}
          <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
            <h2 className="text-xl font-bold text-white mb-4">
              Outras Atividades e Repositórios Recentes
            </h2>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-400 font-bold">•</span>
                <div>
                  <strong className="text-white">Agentes de IA e Chatbots:</strong>{" "}
                  Desenvolvimento ativo de projetos envolvendo Chatbot Gemini, Agentes autônomos
                  com LangGraph e aplicações com arquitetura RAG (como o assistente dos Jogos Abertos IF).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-blue-400 font-bold">•</span>
                <div>
                  <strong className="text-white">Estrutura de Dados e POO:</strong>{" "}
                  Contribuições constantes no repositório voltado à disciplina de
                  Programação Orientada a Objetos e estruturas avançadas utilizando C++.
                </div>
              </li>
            </ul>
          </section>
        </div>
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
