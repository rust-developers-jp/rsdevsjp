import Link from "next/link";
import { DiscordIcon } from "@/components/icon/discord";

export function JoinButton() {
    return (
        <Link
            href="/join"
            className="inline-flex w-full items-center justify-center rounded bg-[#5662f6] px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
        >
            <DiscordIcon size={20} className="mr-2 text-white" />
            Discordに参加
        </Link>
    );
}