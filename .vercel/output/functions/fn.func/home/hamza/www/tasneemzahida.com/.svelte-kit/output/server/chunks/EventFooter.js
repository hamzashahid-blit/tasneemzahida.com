import { W as escape_html, T as pop, Q as push } from "./index.js";
function EventFooter($$payload, $$props) {
  push();
  let { date, textLength } = $$props;
  const months = [
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
    "Dec"
  ];
  function ordinalSuffix(i) {
    let j = i % 10, k = i % 100;
    return j == 1 && k != 11 ? "st" : j == 2 && k != 12 ? "nd" : j == 3 && k != 13 ? "rd" : "th";
  }
  $$payload.out += `<span>${escape_html(date.getDate())}<sup>${escape_html(ordinalSuffix(date.getDate()))}</sup> ${escape_html(months[date.getMonth()])} ${escape_html(date.getFullYear())}</span> <span>• ${escape_html(Math.trunc(textLength / 15 / 60))}m read</span>`;
  pop();
}
export {
  EventFooter as E
};
