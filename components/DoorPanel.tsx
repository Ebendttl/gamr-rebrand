import { cn } from "@/lib/cn";
import { Button } from "./Button";

type Props = { title: string; cta: string; href: string; tone: "blue" | "dark" };

/** Closing call-to-action panel ("Have a playable game?" / "Have a brand brief?"). */
export function DoorPanel({ title, cta, href, tone }: Props) {
  return (
    <div
      className={cn(
        "box-border flex min-h-[220px] flex-[1_1_320px] flex-col justify-between gap-8 border-2 p-[clamp(28px,4cqw,56px)]",
        tone === "blue" ? "border-blue bg-blue" : "border-white bg-black",
      )}
    >
      <div className="text-[length:clamp(26px,3.2cqw,44px)] leading-[1] font-extrabold tracking-[-0.035em] text-white uppercase">
        {title}
      </div>
      <div>
        <Button href={href} variant={tone === "blue" ? "white" : "ghost"}>
          {cta}
        </Button>
      </div>
    </div>
  );
}
