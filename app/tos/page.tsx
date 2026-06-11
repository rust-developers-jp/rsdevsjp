import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Rust Developers JP の利用規約です。",
};

const sections = [
  {
    title: "Rustの行動規範に従う",
    body: [
      "Rust Code of Conduct（https://rust-lang.org/ja/policies/code-of-conduct/）に準拠します。",
    ],
  },
  {
    title: "宣伝・勧誘の禁止",
    body: [
      "以下の行動を厳重に禁止します。違反した場合は警告なしでBANする可能性があります。",
      "• 他サーバーまたはサービスの宣伝",
      "• 求人の投稿",
      "• 有償以来の募集・提供",
      "ただし、会話の文脈上必要なリンクであれば可とします。",
    ],
  },
  {
    title: "オーナー・モデレータ・スタッフの指示に従う",
    body: [
      "以下の条項を厳守してください。",
      "• 問題があれば@KaiTomotakeをメンションしてください。",
      "• 管理者の指示には必ず従ってください。",
      "• 管理者のなりすましは禁止します。",
      "• 注意を受けたにもかかわらず従わない場合、より厳しい措置が行われます。",
      "管理者自身は、より上位の管理者に従ってください。",
    ],
  },
  {
    title: "Discord利用規約とコミュニティガイドラインを遵守",
    body: [
      "すべての参加者は、Discordの以下の規約を必ず守ってください：",
      "• Discord 利用規約（Terms of Service）: https://discord.com/terms",
      "• Discord Community Guidelines: https://discord.com/guidelines",
    ],
  },
  {
    title: "ルール違反への対応",
    body: [
      "違反内容の重大性に応じて、以下の措置が行われる場合があります：",
      "• 警告",
      "• タイムアウト",
      "• キック",
      "• BAN",
    ],
  },
  {
    title: "管理者行動規範",
    body: [
      "【行動の報告】",
      "個人の裁量でモデレーターアクションを行った場合、オーナー及びほかの管理者に報告すること。ただし、宣伝・勧誘をした者または荒らしをした者に対する処置は、報告の必要性はない。",
      "【管理者の辞任】",
      "辞任する際は、最低１週間以上前にオーナー及びほかの管理者に通達すること。",
      "【運営としての行動】",
      "サーバーはできるだけこまめにチェックすること。",
    ],
  },
];

function renderTextWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s））]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section>
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
                最終更新日: 2026年6月12日
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
                      <p key={paragraph}>{renderTextWithLinks(paragraph)}</p>
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
