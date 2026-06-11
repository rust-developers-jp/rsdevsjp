import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Rust Developers JP 本コミュニティは、ユーザーの個人情報保護について、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。",
};

const sections = [
  {
    title: "1. 取得する情報と利用目的",
    body: [
      "本コミュニティは、以下の情報を取得・管理する場合があります。",
      "・DiscordユーザーID、ニックネーム：コミュニティ運営、荒らし対策、サーバーの秩序維持のため",
      "・メールアドレス（必要に応じ）：イベント応募や連絡のため",
      "・チャットログ・ボイスチャットデータ：会話の確認や治安維持のため",
    ],
  },
  {
    title: "2. 個人情報の第三者提供",
    body: [
      "取得した個人情報は、以下のいずれかに該当する場合を除き、第三者に開示・提供いたしません。",
      "・ユーザーの同意がある場合",
      "・法令に基づく場合",
      "・人の生命、身体または財産の保護に必要がある場合",
      "・Discord社の規約に基づく、同社への報告が必要な場合",
    ],
  },
  {
    title: "3. 安全管理措置",
    body: [
      "本コミュニティは、個人情報の紛失、破壊、改ざん、漏洩などのリスクを防ぐため、運営メンバーの権限管理を徹底し、必要かつ適切なセキュリティ対策を講じます。",
    ],
  },
  {
    title: "4. 13歳未満のユーザーについて",
    body: [
      "本コミュニティは、Discordの利用規約に従い13歳以上（地域によっては16歳以上）の利用を対象としています。保護者の方は、お子様が個人情報を安易に公開しないよう指導してください。",
    ],
  },
  {
    title: "5. プライバシーポリシーの変更",
    body: [
      "本ポリシーの内容は、ユーザーへの通知なく変更される場合があります。変更後のプライバシーポリシーは、本コミュニティの所定のチャンネルに掲示した時点から効力を生じるものとします。",
    ],
  },
  {
    title: "6. お問い合わせ",
    body: [
      "本ポリシーに関するお問い合わせは、管理人KaiTomotake（rustacean@mail.rustlang.jp）までご連絡ください。",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="flex-1">
      <section>
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <p className="text-sm font-mono text-muted-foreground mb-3">
                Privacy Policy
              </p>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-5">
                プライバシーポリシー
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                Rust Developers JP における個人情報および利用者情報の取り扱いについて定めています。
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
