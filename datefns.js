import fns from "date-fns";
const { add, format, closestIndexTo, closestTo, compareDesc, compareAsc, isSameDay} = fns;

const log = (text) => {
    return console.log(text);
}

const formatDate = (date, pattern = 'dd/MM/yyyyy') => {
    return format(date, pattern)
}
// Add
const today = new Date();
log("today ", format(today, "dd/MM/yyyy"));
const nextWeek = add(today, { weeks: 1, days: 1 });
log("nextWeek ", format(nextWeek, "dd/MM/yyyy"));
const dateToCompare = new Date(2015, 8, 6);

// Closest
const datesArray = [
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
];
const index = closestIndexTo(dateToCompare, datesArray);
const closestToDate = closestTo(dateToCompare, datesArray);
log(index);
log(format(closestToDate, "dd/MM/yyyy"));

// Compare
const firstDay = new Date(2021, 11, 1);
log('first day: ' + formatDate(firstDay))
const secondDay = new Date(2021, 11, 2);
log('second day: ' + formatDate(secondDay))
const asc = compareAsc(firstDay, secondDay)
const desc = compareDesc(firstDay, secondDay)
console.log(asc, desc)

// Format
const now = new Date();
log(format(today, 'Y'))
log(format(today, 'yy'))
log(format(today, 'YYY'))
log(format(today, 'yyyy'))
log(format(today, 'R'))

// Same day
let left = new Date(2021, 7, 2, 12, 0, 0);
let right = new Date(2021, 7, 2, 6, 0, 0);
console.log('difference time but is the same day  : ' + isSameDay(left, right))