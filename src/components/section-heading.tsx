type SectionHeadingProps = {
  title: string;
  summary?: string;
};

export function SectionHeading({ title, summary }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
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
