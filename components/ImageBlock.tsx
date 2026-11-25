import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageSrc } from "@/lib/images";

type Props = {
  src: ImageSrc;
  alt: string;
  /** Desktop height and border classes, e.g. "md:h-[250px] border-b border-line". */
  className?: string;
  position?: string;
  sizes?: string;
  /** Above-the-fold LCP image: preload with high fetch priority. */
  preload?: boolean;
};

/** Cover-fit image box: 4:3 on mobile, fixed height from 761 px up. */
export function ImageBlock({ src, alt, className, position = "center", sizes = "(min-width: 761px) 50vw, 100vw", preload = false }: Props) {
  return (
    <div className={cn("relative box-border block aspect-[4/3] w-full overflow-hidden md:aspect-auto", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        fetchPriority={preload ? "high" : undefined}
        className="object-cover"
        style={{ objectPosition: position }}
      />
    </div>
  );
}
