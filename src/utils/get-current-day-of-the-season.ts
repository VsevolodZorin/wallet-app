const getCountDays = (daysInMonth: number[], from: number) => {
  let i = from;
  let result = 0;
  while (i >= 0) {
    result += daysInMonth[i];
    i--;
  }

  return result;
};

export const getCurrentDayOfTheSeason = (date: Date): number => {
  let result = 0;
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  const dayOfYear = (Date.UTC(year, month, day) - Date.UTC(year, 0, 1)) / 86400000;

  const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  const countDaysInMonth = isLeapYear
    ? [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    : [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  switch (month) {
    case 0:
    case 1:
      result = countDaysInMonth[11] + dayOfYear + 1;
      break;
    case 2:
    case 3:
    case 4:
      result = dayOfYear - countDaysInMonth[0] - countDaysInMonth[1] + 1;
      break;
    case 5:
    case 6:
    case 7:
      result = dayOfYear - getCountDays(countDaysInMonth, 4) + 1;
      break;
    case 8:
    case 9:
    case 10:
      result = dayOfYear - getCountDays(countDaysInMonth, 7) + 1;
      break;
    case 11:
      result = dayOfYear - getCountDays(countDaysInMonth, 10) + 1;
      break;
    default:
  }
  return result;
};
