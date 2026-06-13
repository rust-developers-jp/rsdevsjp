import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-5xl items-center px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
            ERROR
          </p>
          <h1 className="mb-6 text-7xl font-bold tracking-tight text-balance font-heading sm:text-8xl md:text-9xl">
            404
          </h1>
          <p className="mb-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            URLが変更されたか、ページが削除された可能性があります。<br />トップページから目的の情報をお探しください :-(
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              トップへ戻る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
