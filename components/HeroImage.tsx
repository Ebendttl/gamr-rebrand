import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageSrc } from "@/lib/images";

type Props = { src: ImageSrc; alt: string; className: string; position?: string };

/** Photo hero image: 280 px block above the text on mobile, absolute right panel from 761 px. */
export function HeroImage({ src, alt, className, position = "center" }: Props) {
  return (
    <div className={cn("relative h-[280px] w-full md:absolute md:top-0 md:right-0 md:bottom-0 md:h-auto", className)}>
      <Image src={src} alt={alt} fill priority sizes="(min-width: 761px) 60vw, 100vw" className="object-cover" style={{ objectPosition: position }} />
    </div>
  );
}
