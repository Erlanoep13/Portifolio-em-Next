import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página Não Encontrada (404) | Erlano Benevides",
  description:
    "A página que você estava procurando não foi encontrada. Retorne com segurança à página inicial do portfólio de Erlano Benevides.",
};

export default function NotFound() {
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

      {/* CONTEÚDO PRINCIPAL 404 */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
        {/* Glow de fundo */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="max-w-md">
          <span className="rounded-full bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-red-400 border border-red-500/20">
            Erro 404 • Rota Inexistente
          </span>

          <h1 className="mt-6 text-7xl font-extrabold tracking-tight text-white sm:text-8xl">
            404
          </h1>

          <h2 className="mt-3 text-2xl font-bold text-slate-200 sm:text-3xl">
            Página Não Encontrada
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
            O endereço que você tentou acessar não existe, foi alterado ou está
            temporariamente fora do ar. Não se preocupe, você pode retornar à página inicial!
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {/* Link principal obrigatório para voltar à Home */}
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:shadow-blue-500/40 transition-all duration-200"
            >
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
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Voltar para a Home</span>
            </Link>

            <Link
              href="/projetos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-white transition-colors"
            >
              <span>Ver Projetos</span>
            </Link>
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
