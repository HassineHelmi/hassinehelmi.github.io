type SectionHeadingProps = {
  index: string;
  title: string;
  summary?: string;
};

export function SectionHeading({ index, title, summary }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-heading text-sm tracking-[0.18em] text-accent-text">{index}</p>
        <h2 className="mt-2 font-heading text-4xl tracking-[-0.04em] text-foreground sm:text-5xl">
          {title}
        </h2>
      </div>
      {summary ? (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{summary}</p>
      ) : null}
    </div>
  );
}
