import { format } from "date-fns";

export default function FormatDate(props: { date: Date | null }) {
  const today = new Date();
  if (props.date === null) {
    return <time dateTime={today.toString()}>Present</time>;
  }
  return (
    <time dateTime={props.date.toString()}>
      {format(new Date(props.date), "MMM yyyy")}
    </time>
  );
}

const differenceInMonths = (a: Date, b: Date) =>
  Math.max(
    Math.floor((a.getTime() - b.getTime()) / (1000 * 60 * 60 * 24 * 30.4167)),
    0
  ) + 1;

export function DateBetween(props: { dateFrom: Date; dateTo: Date | null }) {
  let months;
  if (props.dateTo === null) {
    months = differenceInMonths(new Date(), new Date(props.dateFrom));
  } else {
    months = differenceInMonths(
      new Date(props.dateTo),
      new Date(props.dateFrom)
    );
  }
  if (months === 0) {
    return "0 mos";
  }
  let str = "";
  const years = Math.floor(months / 12);
  if (years == 1) {
    str += years + " yr ";
  } else if (years > 1) {
    str += years + " yrs ";
  }
  months -= years * 12;
  if (months == 1) {
    str += months + " mo";
  } else if (months > 0) {
    str += months + " mos";
  }
  return str;
}
