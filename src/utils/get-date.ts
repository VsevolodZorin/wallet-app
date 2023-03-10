export const getDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0'); // day of the month with leading zero if necessary
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // month with leading zero if necessary
  const year = date.getFullYear().toString().substr(-2); // year in two-digit format
  return `${day}/${month}/${year}`;
};
