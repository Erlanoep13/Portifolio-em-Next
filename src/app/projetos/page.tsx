import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projetos em Destaque | Erlano Benevides",
  description:
    "Explore os projetos desenvolvidos por Erlano Benevides: Acesso Livre, Sistema de Reposição de Aulas IFCE, LLM para Agricultura e SGB.",
};

export default function ProjetosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform duration-200 hover:scale-[1.02]"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 font-bold text-white shadow-lg shadow-blue-500/20">
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
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/projetos"
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 transition-colors"
            >
              Projetos
            </Link>
          </nav>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-6">
          {/* CABEÇALHO */}
          <div className="border-b border-slate-800 pb-10">
            <span className="rounded-full bg-blue-500/10 px-3.5 py-1 text-xs font-semibold text-blue-400 border border-blue-500/20">
              Engenharia & Impacto
            </span>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Projetos em Destaque
            </h1>
            <p className="mt-3 max-w-3xl text-lg text-slate-400 leading-relaxed">
              Seleção de aplicações desenvolvidas com foco em acessibilidade urbana,
              automação de processos institucionais, inteligência artificial generativa e arquitetura de software.
            </p>
          </div>

          {/* LISTA DETALHADA DE PROJETOS */}
          <div className="mt-12 space-y-12">
            {/* PROJETO 1: ACESSO LIVRE (DESTAQUE MÁXIMO COM FOCO NA EVOLUÇÃO MOBILE) */}
            <article className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-8 sm:p-10 shadow-xl transition-all duration-300 hover:border-blue-500/50">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 rounded-full bg-blue-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Crowdsourcing & Acessibilidade Urbana
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-blue-500/15 border border-blue-500/30 px-2.5 py-1 text-xs font-medium text-blue-300">
                    React Native
                  </span>
                  <span className="rounded-md bg-cyan-500/15 border border-cyan-500/30 px-2.5 py-1 text-xs font-medium text-cyan-300">
                    Expo
                  </span>
                  <span className="rounded-md bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-300">
                    Google Maps API
                  </span>
                  <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-xs font-medium text-emerald-300">
                    Evolução Mobile
                  </span>
                </div>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Acesso Livre (Web & Mobile)
              </h2>
              <p className="mt-2 text-base font-medium text-slate-300">
                Sistema de crowdsourcing para mapeamento de locais com acessibilidade urbana.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Desafio */}
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-rose-400 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    O Desafio
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    Desenvolver uma plataforma colaborativa para cadastro e consulta
                    de locais com rampas, pisos táteis e adaptações para pessoas com
                    deficiência (PCD), permitindo atualização contínua pela comunidade.
                  </p>
                </div>

                {/* Solução Web */}
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-amber-400 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    Solução Web Inicial
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    Criação de MVP focado na web utilizando <strong>HTML/CSS, JavaScript, Tailwind e Node.js</strong> para
                    validar com agilidade o conceito, regras de negócio e a adesão ao mapeamento colaborativo.
                  </p>
                </div>

                {/* Evolução Mobile */}
                <div className="rounded-2xl border border-blue-500/30 bg-blue-950/20 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-blue-400 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    Evolução para Mobile
                  </h3>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    Para resolver gargalos de performance, usabilidade em trânsito/rua e consumo
                    intensivo de dados de mapas, o sistema foi migrado para <strong>mobile nativo</strong> com
                    experiência otimizada.
                  </p>
                </div>
              </div>

              {/* Tecnologias & Recursos do Acesso Livre */}
              <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Recursos Implementados & Stack Técnica
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "React Native",
                    "Expo",
                    "React Navigation",
                    "Context API",
                    "Google Maps API",
                    "Navegação por Gestos",
                    "Modais Intuitivos",
                    "Persistência de Login",
                    "Moderação de Marcações",
                    "Node.js Backend",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-lg bg-slate-800/70 border border-slate-700/80 px-3 py-1 text-xs text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* PROJETO 2: SISTEMA DE REPOSIÇÃO DE AULAS - IFCE */}
            <article className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-8 sm:p-10 shadow-xl transition-all duration-300 hover:border-slate-700">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Sistema de Gerenciamento Interno
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-xs font-medium text-emerald-300">
                    IFCE Boa Viagem
                  </span>
                  <span className="rounded-md bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-300">
                    JavaScript
                  </span>
                  <span className="rounded-md bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-300">
                    Automação de Fluxo
                  </span>
                </div>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                Sistema de Reposição de Aulas — IFCE
              </h2>
              <p className="mt-2 text-base font-medium text-slate-300">
                Otimização e governança de processos acadêmicos institucionais.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-400 leading-relaxed">
                <p>
                  <strong>Descrição:</strong> Projeto desenvolvido para automatizar, gerenciar
                  e otimizar o fluxo de solicitações de reposição de aulas dentro do campus do
                  Instituto Federal do Ceará (IFCE) em Boa Viagem.
                </p>
                <p>
                  A aplicação resolve os atritos causados pelo trâmite manual de formulários,
                  centralizando o envio por parte dos docentes, validação pela coordenação e
                  notificação rápida aos discentes.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-400 uppercase">
                  Tecnologias:
                </span>
                <span className="rounded-md bg-yellow-500/10 border border-yellow-500/20 px-2.5 py-1 text-xs font-medium text-yellow-300">
                  JavaScript
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  Frontend Reativo
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  Validação de Formulários
                </span>
              </div>
            </article>

            {/* PROJETO 3: LLM FOCADA EM AGRICULTURA */}
            <article className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-8 sm:p-10 shadow-xl transition-all duration-300 hover:border-purple-500/50">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 rounded-full bg-purple-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400">
                    Inteligência Artificial Aplicada
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-purple-500/15 border border-purple-500/30 px-2.5 py-1 text-xs font-medium text-purple-300">
                    Gemini Flash
                  </span>
                  <span className="rounded-md bg-indigo-500/15 border border-indigo-500/30 px-2.5 py-1 text-xs font-medium text-indigo-300">
                    LangChain & LangGraph
                  </span>
                  <span className="rounded-md bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-300">
                    Python
                  </span>
                </div>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                LLM Focada em Agricultura
              </h2>
              <p className="mt-2 text-base font-medium text-slate-300">
                Inteligência Artificial orientada ao suporte do setor primário e produtores rurais.
              </p>

              <div className="mt-6 space-y-4 text-sm text-slate-400 leading-relaxed">
                <p>
                  <strong>Descrição:</strong> Integração e adaptação do modelo de ponta{" "}
                  <strong>LLM Gemini Flash</strong> com o objetivo de auxiliar em rotinas, esclarecimento
                  de dúvidas de manejo, diagnóstico preliminar de culturas e processos do setor agrícola.
                </p>
                <p>
                  Utilizando pipelines compostos com <strong>LangChain</strong> e controle de fluxo com{" "}
                  <strong>LangGraph</strong>, a solução estabelece um agente especializado capaz de manter
                  contexto técnico e entregar respostas precisas e acessíveis.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase mr-2">
                  Stack:
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-purple-300 border border-purple-500/30">
                  Python
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-indigo-300 border border-indigo-500/30">
                  LangChain
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-cyan-300 border border-cyan-500/30">
                  LangGraph
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-blue-300 border border-blue-500/30">
                  Gemini Flash API
                </span>
              </div>
            </article>

            {/* PROJETO 4: SGB (SISTEMA DE GESTÃO DE BIBLIOTECAS) */}
            <article className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-900/40 p-8 sm:p-10 shadow-xl transition-all duration-300 hover:border-amber-500/50">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-3 w-3 rounded-full bg-amber-500" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
                    Estudos de Arquitetura de Software
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 text-xs font-medium text-amber-300">
                    Padrão MVC
                  </span>
                  <span className="rounded-md bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-300">
                    Arquitetura Monolítica
                  </span>
                  <span className="rounded-md bg-slate-800 border border-slate-700 px-2.5 py-1 text-xs font-medium text-slate-300">
                    Python & SQLite
                  </span>
                </div>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
                SGB (Sistema de Gestão de Bibliotecas)
              </h2>
              <p className="mt-2 text-base font-medium text-slate-300">
                Análise comparativa de padrões arquiteturais e refatoração de código.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    SGB Monolítico
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    Desenvolvimento inicial de um sistema robusto de gestão de livros,
                    empréstimos e usuários utilizando arquitetura monolítica estruturada em Python.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    SGB MVC (Refatoração)
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    Refatoração e redesenho do mesmo sistema seguindo rigorosamente o padrão
                    arquitetural <strong>MVC (Model-View-Controller)</strong>, incorporando uma
                    camada de persistência relacional com SQLite para desacoplamento e manutenibilidade.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-400 uppercase">
                  Tecnologias:
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  Python
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  SQLite
                </span>
                <span className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
                  Clean Architecture
                </span>
              </div>
            </article>
          </div>

          {/* OUTRAS ATIVIDADES E REPOSITÓRIOS RECENTES */}
          <div className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/30 p-8 sm:p-10">
            <h2 className="text-xl font-bold text-white mb-2">
              Outras Iniciativas & Repositórios de Estudo
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Projetos em andamento e contribuições exploratórias em IA e computação fundamental:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-5">
                <h3 className="text-base font-bold text-slate-200">
                  Agentes de IA & Chatbots
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Desenvolvimento de Chatbots inteligentes integrados à API Gemini,
                  construção de grafos com LangGraph e aplicações com pipelines RAG
                  (Retrieval-Augmented Generation), como o assistente dos Jogos Abertos do IF.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-5">
                <h3 className="text-base font-bold text-slate-200">
                  Estrutura de Dados & POO em C++
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  Implementações de estruturas de dados clássicas, gerenciamento de memória,
                  paradigmas de orientação a objetos e análise de complexidade algorítmica.
                </p>
              </div>
            </div>
          </div>
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
