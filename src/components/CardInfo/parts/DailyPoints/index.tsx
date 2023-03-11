import { useMemo } from 'react';
import { useAppSelector } from 'src/hooks/redux';
import { TransactionTypeEnum } from 'src/store/reducers/app.slice';
import { selectTransactions } from 'src/store/selectors';
import { calculatePoints } from 'src/utils/calculate-points';
import { getCurrentDayOfTheSeason } from 'src/utils/get-current-day-of-the-season';
import './daily-points.scss';

function formatPoints(points: number) {
  if (points >= 1000) {
    const k = Math.floor(points / 1000);
    return `${k}K`;
  } else {
    return points.toString();
  }
}

const DailyPoints = () => {
  const transactions = useAppSelector(selectTransactions);

  const res = useMemo(() => {
    let result: number = 0;
    if (transactions) {
      const sortedTransactions = transactions?.filter(
        el => el.pending === false && el.type === TransactionTypeEnum.CREDIT
      );
      const listDates = sortedTransactions?.map(el => el.date);
      if (listDates) {
        listDates.forEach(el => {
          const currentDay = getCurrentDayOfTheSeason(new Date(el));
          // todo: check 04
          result += calculatePoints(currentDay);
        });
      }
    }
    return result;
  }, [transactions]);

  return (
    <div className="daily-points ui-block">
      <span className="ui-block--title">Daily Points</span>
      <span>{res}</span>
    </div>
  );
};

export default DailyPoints;
