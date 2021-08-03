import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport.js";
import weekOfYear from "dayjs/plugin/weekOfYear.js";
import minMax from "dayjs/plugin/minMax.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import calendar from "dayjs/plugin/calendar.js";

dayjs.extend(objectSupport);
dayjs.extend(weekOfYear);
dayjs.extend(minMax);
dayjs.extend(relativeTime);
dayjs.extend(calendar);

const now = dayjs(undefined);
console.log(now.format());

// custom pase format
let custom2 = dayjs("2021-8-2", "YYYY-M-D");
console.log("custom pase format", custom2.format("D/M/YYYY"));

// unix time stamp
console.log(dayjs(1318781876406));
console.log(dayjs.unix(1318781876.721));

// Date
let tomorow = dayjs(new Date(2021, 7, 3));
console.log(tomorow.format());

// Object
let dateObject = dayjs({
  years: 2010,
  months: 3,
  date: 5,
  hours: 15,
  minutes: 10,
  seconds: 3,
});
console.log(dateObject);

// clone + Get + Set
let a = dayjs();
let b = a.clone();
let afterSetA = a.week(50);
console.log("A: ", a.format());
console.log("afterSetA: ", afterSetA.format());
console.log("B: ", b.format());

// max min
const dateCompare = [
  dayjs(),
  dayjs().add(5, "day"),
  dayjs().add(3, "day"),
  dayjs().add(8, "day"),
  dayjs().add(7, "day"),
];

const minDate = dayjs.min(dateCompare);
const maxDate = dayjs.max(dateCompare);
console.log("minDate: ", minDate.format("DD/MM/YYYY"));
console.log("maxDate: ", maxDate.format("DD/MM/YYYY"));

// Display
/*const thisDay = dayjs();
const onceDayAgo = thisDay.add(-21, "hour");
const inAday = thisDay.add(21, "hour");
console.log("yesterday: ", onceDayAgo.fromNow());
console.log("yesterday tonow: ", onceDayAgo.toNow());
console.log("from to X: ", dayjs(onceDayAgo).to(thisDay));
console.log(
  dayjs().calendar(null, {
    sameDay: "[Today at] h:mm A", // The same day ( Today at 2:30 AM )
    nextDay: "[Tomorrow]", // The next day ( Tomorrow at 2:30 AM )
    nextWeek: "dddd", // The next week ( Sunday at 2:30 AM )
    lastDay: "[Yesterday]", // The day before ( Yesterday at 2:30 AM )
    lastWeek: "[Last] dddd", // Last week ( Last Monday at 2:30 AM )
    sameElse: "DD/MM/YYYY", // Everything else ( 7/10/2011 )
  })
);
*/
const inAday = dayjs().add(10, "second");
const interval = setInterval(() => {
  const thisDay = dayjs();
  const diff = inAday.diff(thisDay, "second");
  if (diff >= 0) {
    console.log(diff - 0.5);
  } else {
    clearInterval(interval);
  }
}, 500);
