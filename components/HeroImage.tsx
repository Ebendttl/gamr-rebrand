import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageSrc } from "@/lib/images";

type Props = { src: ImageSrc; className: string; position?: string };

/**
 * Decorative photo-hero image under a black fade: a 280 px block above the text on mobile,
 * an absolute right-hand panel from 761 px.
 */
export function HeroImage({ src, className, position = "center" }: Props) {
  return (
    <div aria-hidden="true" className={cn("relative h-[280px] w-full md:absolute md:top-0 md:right-0 md:bottom-0 md:h-auto", className)}>
      <Image
        src={src}
        alt=""
        fill
        preload
        fetchPriority="high"
        sizes="(min-width: 761px) 60vw, 100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      <div className="absolute inset-0 bg-[image:linear-gradient(90deg,#000000_0%,rgba(0,0,0,0.55)_30%,rgba(0,0,0,0.1)_65%,rgba(0,0,0,0)_100%),linear-gradient(0deg,#000000_0%,rgba(0,0,0,0)_35%)]" />
    </div>
  );
}
