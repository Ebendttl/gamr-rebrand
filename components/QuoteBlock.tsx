/** Large pull quote with the red accent bar. */
export function QuoteBlock({ quote, name, context }: { quote: string; name: string; context: string }) {
  return (
    <figure className="m-0 flex max-w-[1000px] flex-col gap-7">
      <span aria-hidden="true" className="h-1 w-14 bg-red" />
      <blockquote className="m-0 text-[length:clamp(30px,4.2cqw,58px)] leading-[1.02] font-extrabold tracking-[-0.035em] text-white uppercase">
        {quote}
      </blockquote>
      <figcaption className="flex flex-col gap-2">
        <span className="text-[17px] font-bold text-white">{name}</span>
        <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-muted uppercase">{context}</span>
      </figcaption>
    </figure>
  );
}
