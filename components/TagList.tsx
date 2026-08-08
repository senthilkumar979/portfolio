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
          className="rounded-md bg-accent-soft px-2.5 py-1 text-xs text-accent"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);
