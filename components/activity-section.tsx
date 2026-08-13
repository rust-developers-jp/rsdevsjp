const useCases = [
    {
        title: "標準ライブラリの翻訳プロジェクト（rustrefjp）",
        description:
            "現在、Rustのstdクレートには和訳が存在せず、直接英語を読むしかない状態となっています。これは初心者にとって苦痛であり、それを解消すべく立ち上げました。",
    },
    {
        title: "Rust言語に関するコミュニティ内サポート",
        description:
            "Rustに関する質問について、Discord内でできる限りの回答を行います。どんな質問であっても歓迎します。",
    },
]

export function ActivitySection() {
    return (
        <section id="activity" aria-labelledby="activity-heading">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-14 text-center sm:px-6 sm:py-20 md:border-l md:border-r md:border-dashed">
                <div className="mb-10 sm:mb-12">
                    <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-widest text-primary">
                        活動内容
                    </p>
                    <h2
                        id="activity-heading"
                        className="text-2xl font-bold text-balance text-foreground font-sans sm:text-3xl md:text-4xl"
                    >
                        私たちは様々な活動を通じて、Rustの普及とコミュニティの活性化に努めています
                    </h2>
                </div>
                <div className="grid max-w-3xl grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                    {useCases.map((useCase) => (
                        <div
                            key={useCase.title}
                            className="group block rounded border border-border bg-background p-5 text-left sm:p-6"
                        >
                            <h3 className="mb-3 font-sans font-bold text-foreground transition-colors group-hover:text-primary">
                                {useCase.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
