import { JoinButton } from "@/components/ui/join-button"

export function HeroSection() {
    return (
        <section
            className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-12 md:pb-28 md:pt-14"
            aria-labelledby="hero-heading"
        >
            <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
                <div className="max-w-2xl">
                    <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                        Community for Rust Developers in Japan
                    </p>
                    <h1
                        id="hero-heading"
                        className="mb-6 text-4xl font-bold leading-tight text-balance font-heading sm:text-5xl md:text-7xl"
                    >
                        Rust
                        <br />
                        Developers
                        <br />
                        JP
                    </h1>
                    <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:mb-10 sm:text-lg md:text-xl">
                        Rustを、日本語で、もっと身近に。
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <JoinButton />
                    </div>
                </div>
            </div>
        </section>
    )
}
