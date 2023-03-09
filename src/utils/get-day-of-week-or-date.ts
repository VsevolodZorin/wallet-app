const getDayOfWeekOrDate = (date: Date): string => {
  const today = new Date(); // current date
  const oneDay = 24 * 60 * 60 * 1000; // number of milliseconds in one day
  const diffDays = Math.round(Math.abs((today.getTime() - date.getTime()) / oneDay)); // difference between today's date and the passed date in days
  if (diffDays <= 7 && date.getDay() !== 0) {
    // if the date corresponds to the current week and is not Sunday
    const daysOfWeek: string[] = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return daysOfWeek[date.getDay()];
  } else {
    // if the date does not correspond to the current week
    const day = date.getDate().toString().padStart(2, '0'); // day of the month with leading zero if necessary
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // month with leading zero if necessary
    const year = date.getFullYear().toString().substr(-2); // year in two-digit format
    return `${day}/${month}/${year}`;
  }
};

export default getDayOfWeekOrDate;
