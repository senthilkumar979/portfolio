import {
  TenureDayGrid,
  TenureWeekGrid,
} from "@/components/experience/TenureGrid";
import {
  computeTenureStats,
  parsePeriod,
  weekCount,
  type TenureStats,
} from "@/lib/period";

interface TenureChartProps {
  period: string;
  className?: string;
}

function formatCount(value: number): string {
  return value.toLocaleString("en-US");
}

/** Role tenure: period, then stats beside the weekday calendar. */
export const TenureChart = ({ period, className = "" }: TenureChartProps) => {
  const range = parsePeriod(period);
  if (!range) return null;

  const stats = computeTenureStats(range.start, range.end);
  const useDays = weekCount(range.start, range.end) <= 70;

  return (
    <figure className={className}>
      <figcaption className="text-[0.6875rem] font-medium uppercase tracking-[0.22em] text-foreground-muted">
        Tenure
      </figcaption>
      <div className="mt-2 flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="">
          {useDays ? (
            <TenureDayGrid start={range.start} end={range.end} />
          ) : (
            <TenureWeekGrid start={range.start} end={range.end} />
          )}
          <p className="mt-3 text-[0.625rem] text-foreground-muted lg:text-right">
            Weekdays filled · weekends empty · 8h working day
          </p>
        </div>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
          <div className="flex flex-row md:flex-col items-baseline gap-2 text-sm text-foreground-muted justify-between">
            <span className="text-sm tabular-nums text-foreground mb-4">
              {period}
            </span>
            <TenureBreakdown stats={stats} />
          </div>
        </div>
      </div>
    </figure>
  );
};

const TenureBreakdown = ({ stats }: { stats: TenureStats }) => {
  const rows = [
    { value: stats.years, label: "years" },
    { value: stats.months, label: "months" },
    { value: stats.weeks, label: "weeks" },
    { value: stats.workingDays, label: "working days" },
    { value: stats.hours, label: "hours" },
    { value: stats.minutes, label: "minutes" },
  ];

  return (
    <ul className="space-y-1.5 border-l border-accent/40 pl-4">
      {rows.map((row) => (
        <li
          key={row.label}
          className="flex items-baseline gap-2 text-sm text-foreground-muted"
        >
          <span className="tabular-nums font-medium text-foreground">
            {formatCount(row.value)}
          </span>
          <span>{row.label}</span>
        </li>
      ))}
    </ul>
  );
};
