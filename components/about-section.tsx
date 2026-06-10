import { Highlighter } from "@/components/ui/highlighter"

export function AboutSection() {
    return (
        <section className="border-b bg-muted py-14 sm:py-18" id="about" aria-labelledby="about-heading">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="flex max-w-3xl flex-col gap-4 text-sm leading-relaxed text-foreground sm:gap-5 sm:text-base">
                    <h2 id="about-heading" className="sr-only">
                        About
                    </h2>
                    <p>
                        <Highlighter action="underline" color="#f66a00">
                            <strong>Rust Developers JP</strong>
                        </Highlighter>
                        は、Rust言語の普及と振興を目的とした日本語コミュニティです。
                    </p>
                    <p>
                        私たちは、より多くの方にRustの魅力と可能性を知っていただくこと、そして日本国内におけるRustエコシステムの発展に寄与することを目指して活動しております。
                    </p>
                    <p>
                        主な活動として、Rustの日本語ドキュメントの制作・整備を行い、学習のハードルを下げる取り組みを進めております。
                    </p>
                    <p>
                        また、定期的に勉強会を開催し、知識共有や技術交流の場を提供しております。
                        <br />
                        初心者の方から実務で活用されている方まで、幅広い層が参加できる開かれたコミュニティを目指し、安心して学び、発信し、交流できる環境づくりに努めております。
                    </p>
                </div>
            </div>
        </section>
    )
}
