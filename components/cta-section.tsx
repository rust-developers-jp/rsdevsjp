import { JoinButton } from "@/components/ui/join-button"

export function CtaSection() {
    return (
        <section aria-labelledby="cta-heading" className="relative w-full border-t border-dashed">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-14 text-center sm:px-6 sm:py-16 md:border-l md:border-r md:border-dashed">
                <div className="mb-10 flex flex-col gap-4 sm:mb-12">
                    <h2
                        id="cta-heading"
                        className="text-2xl font-bold text-balance text-foreground font-sans sm:text-3xl md:text-4xl"
                    >
                        あなたも参加しませんか？
                    </h2>
                    <p className="text-base text-muted-foreground sm:text-lg">
                        Rust Developers JPに参加して、一緒に活動しましょう！
                    </p>
                </div>
                <div className="flex w-full flex-row items-center justify-center">
                    <JoinButton />
                </div>
            </div>
        </section>
    )
}
