import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
        Hello World
      </h1>
      <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium max-w-md mb-8">
        Aplicação Fullstack desenvolvida com Next.js, TailwindCSS e TypeScript
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/projetos"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
        >
          Ver Projetos
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link
          href="/sobre"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors shadow-sm"
        >
          Sobre Nós
        </Link>
      </div>
    </main>
  );
}