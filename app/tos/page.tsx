import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Rust Developers JP の利用規約です。",
};

const sections = [
  {
    title: "1. 基本方針",
    body: [
      "Rust Developers JP（以下、「当コミュニティ」）は、本サイトをご利用いただく方のプライバシーを尊重し、個人情報の保護に努めます。",
      "本ポリシーでは、本サイトおよび当コミュニティの運営に関連して取得する情報、その利用目的、管理方法について説明します。",
    ],
  }
];

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section className="border-t border-dashed">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-mono text-muted-foreground mb-3">
                  Terms of Service
              </p>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                利用規約
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Rust Developers JP における利用規約について定めています。
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                最終更新日: 2026年6月9日
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title} className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                  <div className="space-y-3 text-sm md:text-base leading-7 text-muted-foreground whitespace-pre-line">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
