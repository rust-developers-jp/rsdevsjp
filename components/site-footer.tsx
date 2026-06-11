import Link from "next/link"

const footerLinks = {
  Navigation: [
    { label: "About", href: "/#about" },
    { label: "Activity", href: "/#activity" },
    {
      label: "Contact",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSc-Cx_HM_bLwgCpH6cfoYjO9rr5-BI1Wu6aLE0_DILbsxGQWQ/viewform",
    },
  ],
  Projects: [
    { label: "Community", href: "/join" },
    { label: "rustrefjp", href: "https://ref.rustlang.jp/" },
  ],
  Social: [
    { label: "Github", href: "https://github.com/Rust-Developers-JP" },
    { label: "Discord", href: "/join" },
    { label: "X", href: "https://x.com/rust_devs_jp" },
    { label: "YouTube", href: "https://www.youtube.com/@rust_developers_jp" },
  ],
  More: [
    { label: "利用規約", href: "/tos" },
    { label: "プライバシーポリシー", href: "/privacy" },
  ],
}

function isExternalLink(href: string) {
  return href.startsWith("http")
}

export function Footer() {
  return (
    <footer className="border-t" role="contentinfo">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="mb-12 grid gap-8 sm:mb-14 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {category}
              </h3>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground transition-colors hover:text-primary"
                      {...(isExternalLink(link.href)
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-dashed pt-8 sm:flex-row">
          <p className="mx-auto text-center text-xs leading-relaxed text-muted-foreground">
            © 2026 Rust Developers JP. All Rights Reserved. <br />
            本サイトのコンテンツはCC BY 4.0ライセンスの下で提供されています。
          </p>
        </div>
      </div>
    </footer>
  )
}
