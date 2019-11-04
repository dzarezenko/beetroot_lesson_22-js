let day = parseInt(prompt("Enter the day"));
let month = parseInt(prompt("Enter the month"));
let year = parseInt(prompt("Enter the year"));

let nextDay = day,
  nextMonth = month,
  nextYear = year;

switch (month) {
  case 2:
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      if (day == 29) {
        nextDay = 1;
        nextMonth++;
      } else {
        nextDay++;
      }
    } else {
      if (day == 28) {
        nextDay = 1;
        nextMonth++;
      } else {
        nextDay++;
      }
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    if (day == 30) {
      nextDay = 1;
      nextMonth++;
    } else {
      nextDay++;
    }
    break;
  default:
    if (day == 31) {
      nextDay = 1;
      nextMonth++;
    } else {
      nextDay++;
    }
}

/*if (month == 2) { // 28 days (or 29 days)
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    if (day == 29) {
      nextDay = 1;
      nextMonth++;
    } else {
      nextDay++;
    }
  } else {
    if (day == 28) {
      nextDay = 1;
      nextMonth++;
    } else {
      nextDay++;
    }
  }
} else if (month == 4 || month == 6 || month == 9 || month == 11) { // 30 days
  if (day == 30) {
    nextDay = 1;
    nextMonth++;
  } else {
    nextDay++;
  }
} else { // 31 days
  if (day == 31) {
    nextDay = 1;
    nextMonth++;
  } else {
    nextDay++;
  }
}*/

if (nextMonth > 12) {
  nextMonth = 1;
  nextYear++;
}

console.log(`${nextDay}.${nextMonth}.${nextYear}`);
