interface TagListProps {
  items: string[];
  title?: string;
}

export const TagList = ({ items, title }: TagListProps) => (
  <div>
    {title ? (
      <h2 className="mb-3 text-sm font-medium uppercase tracking-wider text-foreground-muted">
        {title}
      </h2>
    ) : null}
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md bg-accent-soft px-2.5 py-1 text-xs text-accent transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-accent hover:text-background"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
