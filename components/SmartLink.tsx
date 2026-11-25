import Link from "next/link";
import type { ComponentProps } from "react";

type Props = Omit<ComponentProps<"a">, "href"> & { href: string };

/** next/link for internal routes, a plain anchor for external, tel: and mailto: links. */
export function SmartLink({ href, ...rest }: Props) {
  return href.startsWith("/") ? <Link href={href} {...rest} /> : <a href={href} {...rest} />;
}
