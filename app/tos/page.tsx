import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サーバールール",
  description: "Rust Developers JP のサーバールールです。",
};

type Section = {
  title: string;
  intro?: string[];
  bullets?: string[];
  outro?: string[];
};

const sections: Section[] = [
  {
    title: "1. Discord利用規約およびコミュニティガイドラインを遵守する",
    intro: ["以下の規約・ガイドラインに準拠します。"],
    bullets: [
      "[Discordサービス利用規約](https://discord.com/terms)",
      "[Discordコミュニティガイドライン](https://discord.com/guidelines)",
    ],
  },
  {
    title: "2. お互いを尊重する",
    intro: ["以下の行為は禁止されます。"],
    bullets: [
      "特定技術・言語への悪意ある誹謗",
      "過度な押しつけや高圧的な言動",
      "不毛な議論を長引かせる行為",
      "過剰に挑発的な発言",
    ],
  },
  {
    title: "3. 不適切なコンテンツは禁止",
    intro: ["以下の内容は禁止されます。"],
    bullets: [
      "暴力的・性的内容",
      "スパム（大量の投稿・画像・絵文字など）",
      "過度なミーム",
    ],
  },
  {
    title: "4. 宣伝・勧誘・営利目的は禁止",
    intro: ["以下の行為は禁止されます。"],
    bullets: [
      "他Discordサーバーの広告",
      "報酬が伴う依頼・求人の投稿",
      "無関係なリンクのばらまき",
    ],
    outro: [
      "これはサーバーのメンバーにダイレクトメッセージを送る際も適用されます。",
      "ただし、双方同意している場合は除外します。",
    ],
  },
  {
    title: "5. Rust（ゲーム）の話題は禁止",
    intro: [
      "このサーバーは**Rust（プログラミング言語）**のサーバーです。",
      "ゲーム「Rust」を目的とした参加者は、状況に応じてキックされる場合があります。",
    ],
  },
  {
    title: "6. モデレーターの指示に従う",
    bullets: [
      "問題があれば、[フィードバック💬](https://discord.com/channels/1447145150714482871/1447173281181339688) にて管理者をメンションしてください。",
      "内容を秘匿したい場合はKaiTomotake (kaitomotake)にDMしてください。",
    ],
  },
  {
    title: "7. 健全で協力的なRustコミュニティを目指しましょう",
    intro: [
      "質問・相談・議論・雑談などは歓迎します。",
      "初心者にも優しく、学び合い、助け合う場を作りましょう。",
    ],
  },
  {
    title: "8. ルール違反への対応",
    intro: ["違反内容の重大性に応じて、以下の措置が行われる場合があります。"],
    bullets: ["警告", "タイムアウト", "BAN"],
    outro: [
      "ルール違反が確認された場合、原則としてまず警告を行い、改善をお願いするものとします。",
      "重大な違反については警告を経ずにタイムアウトまたはBANを行う場合があります。",
    ],
  },
];

function renderRichText(text: string) {
  const tokenRegex =
    /(\[.+?\]\(https?:\/\/[^)\s]+\)|\*\*.+?\*\*|https?:\/\/[^\s））]+|<#\d+>|<@\d+>)/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, index) => {
    if (!part) return null;

    const mdLinkMatch = part.match(/^\[(.+?)\]\((https?:\/\/[^)\s]+)\)$/);
    if (mdLinkMatch) {
      const [, label, url] = mdLinkMatch;
      return (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {label}
        </a>
      );
    }

    const boldMatch = part.match(/^\*\*(.+?)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {boldMatch[1]}
        </strong>
      );
    }

    if (/^https?:\/\//.test(part)) {
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

    if (/^<#\d+>$/.test(part) || /^<@\d+>$/.test(part)) {
      return (
        <code
          key={index}
          className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.9em] text-foreground"
        >
          {part}
        </code>
      );
    }

    return part;
  });
}

export default function TosPage() {
  return (
    <main className="flex-1">
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-mono text-muted-foreground mb-3">
                Server Rules
              </p>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                Rust Developers JP サーバールール
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Rust Developers JP におけるサーバールールについて定めています。
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                最終更新日: 2026年9月29日
              </p>
            </div>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title} className="space-y-3">
                  <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {section.title}
                  </h2>
                  <div className="space-y-3 text-sm md:text-base leading-7 text-muted-foreground whitespace-pre-line">
                    {section.intro?.map((paragraph) => (
                      <p key={paragraph}>{renderRichText(paragraph)}</p>
                    ))}
                    {section.bullets && (
                      <ul className="list-disc space-y-1.5 pl-6">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{renderRichText(bullet)}</li>
                        ))}
                      </ul>
                    )}
                    {section.outro?.map((paragraph) => (
                      <p key={paragraph}>{renderRichText(paragraph)}</p>
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
