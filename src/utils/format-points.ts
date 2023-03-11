export const formatPoints = (points: number): string => {
  if (points < 1000) {
    return Math.floor(points).toString();
  } else {
    const rounded = Math.floor(points / 1000);
    return rounded.toString() + 'K';
  }
};
