const customSum = (prevDay: number, prevPrevDay: number): number => {
  return prevDay * 0.6 + prevPrevDay;
};
export const calculatePoints = (dayNumberInSeason: number) => {
  let result = 0;
  let prevDay = 0;
  let prevPrevDay = 0;

  let arr = new Array(dayNumberInSeason);

  if (dayNumberInSeason >= 1) {
    arr[0] = 1;
  }

  if (dayNumberInSeason >= 2) {
    arr[1] = 2;
  }

  if (dayNumberInSeason >= 3) {
    let i = 3;
    do {
      // calculate 1 day
      prevDay = arr[i - 2];
      prevPrevDay = arr[i - 3];
      arr[i - 1] = customSum(prevDay, prevPrevDay);
      i++;
    } while (i < dayNumberInSeason);
  }

  arr.forEach(el => (result += el));

  return result;
};
