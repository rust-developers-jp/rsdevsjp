import { JoinButton } from "@/components/ui/join-button"

export function HeroSection() {
    return (
        <section
            className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-12 md:pb-28 md:pt-14"
            aria-labelledby="hero-heading"
        >
            <div className="flex items-center justify-between relative mx-auto max-w-5xl px-4 sm:px-6">
                <div className="w-full max-w-xl">
                    <h1
                        id="hero-heading"
                        className="mb-6 text-5xl font-bold leading-tight tracking-wide text-balance font-heading md:text-7xl"
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

                <iframe className="hidden xl:block" src="https://discord.com/widget?id=1185947730363826236&theme=dark" width="350" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
        </section>
    )
}
