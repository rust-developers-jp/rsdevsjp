"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { urlPrefix } from "../next.config"
const BASE_PATH = urlPrefix

const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Activity", href: "/#activity" },
    {
        label: "Contact",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSc-Cx_HM_bLwgCpH6cfoYjO9rr5-BI1Wu6aLE0_DILbsxGQWQ/viewform",
    },
]

function isExternalLink(href: string) {
    return href.startsWith("http")
}

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header>
            <div className="mx-auto flex min-h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
                <Link href={"/"} className="flex shrink-0 items-center gap-3">
                    <Image
                        src={BASE_PATH + "/assets/logo.webp"}
                        alt="Rust Developers JP Logo"
                        width={463}
                        height={307}
                        className="h-auto w-12 drop-shadow-xs drop-shadow-black sm:w-13"
                    />
                </Link>

                <div className="hidden items-center gap-4 md:flex">
                    <nav className="flex items-center gap-6" aria-label="Main navigation">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-neutral-600 transition-colors hover:text-foreground"
                                {...(isExternalLink(link.href)
                                    ? { target: "_blank", rel: "noreferrer" }
                                    : {})}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <Link
                        href="/join"
                        className="inline-flex items-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        参加する
                    </Link>
                </div>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md border border-border p-2 text-foreground transition-colors hover:bg-muted md:hidden"
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    onClick={() => setIsMenuOpen((current) => !current)}
                >
                    <span className="sr-only">Menu</span>
                    <div className="flex h-4 w-4 flex-col justify-between">
                        <span
                            className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${isMenuOpen ? "translate-y-1.75 rotate-45" : ""}`}
                        />
                        <span
                            className={`block h-0.5 w-4 rounded-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                        />
                        <span
                            className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
                        />
                    </div>
                </button>
            </div>

            <div
                id="mobile-navigation"
                className={`grid transition-all duration-200 ease-out md:hidden ${isMenuOpen ? "grid-rows-[1fr] border-y border-border/60 opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
                <div className="overflow-hidden">
                    <nav
                        className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:px-6"
                        aria-label="Mobile navigation"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="rounded-md px-2 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                                onClick={() => setIsMenuOpen(false)}
                                {...(isExternalLink(link.href)
                                    ? { target: "_blank", rel: "noreferrer" }
                                    : {})}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/join"
                            className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            参加する
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}
