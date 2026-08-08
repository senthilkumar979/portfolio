import {
  buildTenureDays,
  buildTenureWeeks,
  type TenureDay,
} from "@/lib/period";

const MONTH_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDayLabel(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function cellClass(active: boolean): string {
  return active ? "bg-accent" : "bg-foreground/[0.06]";
}

interface GridProps {
  start: Date;
  end: Date;
}

export const TenureDayGrid = ({ start, end }: GridProps) => {
  const columns = chunkByWeek(buildTenureDays(start, end));

  return (
    <div className="overflow-x-auto pb-1">
      <div className="inline-flex gap-2">
        <div className="flex w-5 shrink-0 flex-col gap-[3px] pt-[1.125rem] text-[0.5625rem] leading-none text-foreground-muted/70">
          {["", "Mon", "", "Wed", "", "Fri", ""].map((label, i) => (
            <span key={i} className="flex h-2.5 items-center">
              {label}
            </span>
          ))}
        </div>
        <div>
          <div className="mb-1 flex gap-[3px]">
            {columns.map((week, index) => (
              <span
                key={`m-${week[0].date.toISOString()}`}
                className="w-2.5 text-[0.5625rem] leading-none text-foreground-muted/80"
              >
                {monthLabelAt(columns, index)}
              </span>
            ))}
          </div>
          <div className="flex gap-[3px]">
            {columns.map((week) => (
              <div
                key={week[0].date.toISOString()}
                className="flex flex-col gap-[3px]"
              >
                {week.map((day) => (
                  <span
                    key={day.date.toISOString()}
                    title={formatDayLabel(day.date)}
                    className={`h-2.5 w-2.5 rounded-[2px] ${cellClass(day.active)}`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TenureWeekGrid = ({ start, end }: GridProps) => {
  const byYear = new Map<number, ReturnType<typeof buildTenureWeeks>>();
  for (const week of buildTenureWeeks(start, end)) {
    const year = week.weekStart.getFullYear();
    const list = byYear.get(year) ?? [];
    list.push(week);
    byYear.set(year, list);
  }

  return (
    <div className="space-y-2 overflow-x-auto pb-1">
      {[...byYear.entries()].map(([year, yearWeeks]) => (
        <div key={year} className="flex items-center gap-2">
          <span className="w-9 shrink-0 text-[0.625rem] tabular-nums text-foreground-muted">
            {year}
          </span>
          <div className="flex gap-[2px]">
            {yearWeeks.map((week) => (
              <span
                key={week.weekStart.toISOString()}
                title={`Week of ${formatDayLabel(week.weekStart)}`}
                className={`h-2.5 w-2.5 rounded-[2px] ${cellClass(week.active)}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

function chunkByWeek(days: TenureDay[]): TenureDay[][] {
  const columns: TenureDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    columns.push(days.slice(i, i + 7));
  }
  return columns;
}

function monthLabelAt(columns: TenureDay[][], index: number): string {
  const mid = columns[index][3] ?? columns[index][0];
  const month = mid.date.getMonth();
  if (index === 0) return MONTH_SHORT[month];
  const prev = columns[index - 1][3] ?? columns[index - 1][0];
  return prev.date.getMonth() === month ? "" : MONTH_SHORT[month];
}
