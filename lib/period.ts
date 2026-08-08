const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export interface PeriodRange {
  start: Date;
  end: Date;
  isCurrent: boolean;
  label: string;
}

function parseMonthYear(token: string): Date | null {
  const match = token.trim().match(/^([A-Za-z]{3})\s+(\d{4})$/);
  if (!match) return null;
  const month = MONTHS[match[1]];
  if (month === undefined) return null;
  return new Date(Number(match[2]), month, 1);
}

function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59);
}

/** Parse "Jul 2025 – Present" / "Oct 2024 – Jun 2025" style periods. */
export function parsePeriod(period: string): PeriodRange | null {
  const parts = period.split(/\s*[–—-]\s*/);
  if (parts.length !== 2) return null;

  const start = parseMonthYear(parts[0]);
  if (!start) return null;

  const endToken = parts[1].trim();
  const isCurrent = /^present$/i.test(endToken);
  const end = isCurrent
    ? new Date()
    : (() => {
        const monthStart = parseMonthYear(endToken);
        return monthStart ? endOfMonth(monthStart) : null;
      })();

  if (!end) return null;

  return { start, end, isCurrent, label: period };
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

/** Sunday-aligned week containing `date` (GitHub-style). */
export function startOfWeekSunday(date: Date): Date {
  const day = startOfDay(date);
  day.setDate(day.getDate() - day.getDay());
  return day;
}

function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export interface TenureDay {
  date: Date;
  /** Weekday that falls inside the role period */
  active: boolean;
}

/** Day cells from the Sunday before `start` through `end` (inclusive). */
export function buildTenureDays(start: Date, end: Date): TenureDay[] {
  const tenureStart = startOfDay(start);
  const tenureEnd = startOfDay(end);
  const cursor = startOfWeekSunday(tenureStart);
  const last = startOfWeekSunday(tenureEnd);
  last.setDate(last.getDate() + 6);

  const days: TenureDay[] = [];
  let current = cursor;
  while (current <= last) {
    const inTenure = current >= tenureStart && current <= tenureEnd;
    days.push({
      date: current,
      active: inTenure && !isWeekend(current),
    });
    current = addDays(current, 1);
  }
  return days;
}

export interface TenureWeek {
  weekStart: Date;
  active: boolean;
}

/** One filled cell per week — for multi-year tenures. */
export function buildTenureWeeks(start: Date, end: Date): TenureWeek[] {
  const tenureStart = startOfWeekSunday(start);
  const tenureEnd = startOfWeekSunday(end);
  const weeks: TenureWeek[] = [];
  let current = tenureStart;
  while (current <= tenureEnd) {
    weeks.push({ weekStart: current, active: true });
    current = addDays(current, 7);
  }
  return weeks;
}

export function weekCount(start: Date, end: Date): number {
  const ms = startOfDay(end).getTime() - startOfDay(start).getTime();
  return Math.max(1, Math.ceil(ms / (7 * 24 * 60 * 60 * 1000)));
}

export interface TenureStats {
  years: number;
  months: number;
  weeks: number;
  workingDays: number;
  hours: number;
  minutes: number;
}

const HOURS_PER_DAY = 8;

/** Inclusive calendar months, weekday count, and 8h-day time spent. */
export function computeTenureStats(start: Date, end: Date): TenureStats {
  const tenureStart = startOfDay(start);
  const tenureEnd = startOfDay(end);

  const months =
    (tenureEnd.getFullYear() - tenureStart.getFullYear()) * 12 +
    (tenureEnd.getMonth() - tenureStart.getMonth()) +
    1;

  let workingDays = 0;
  let current = tenureStart;
  while (current <= tenureEnd) {
    if (!isWeekend(current)) workingDays += 1;
    current = addDays(current, 1);
  }

  const totalDays =
    Math.round(
      (tenureEnd.getTime() - tenureStart.getTime()) / (24 * 60 * 60 * 1000),
    ) + 1;
  const weeks = Math.max(1, Math.floor(totalDays / 7));
  const hours = workingDays * HOURS_PER_DAY;
  const minutes = hours * 60;
  const years = Math.round((months / 12) * 10) / 10;

  return { years, months, weeks, workingDays, hours, minutes };
}

