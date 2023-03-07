import { FC } from 'react';
import CardBalance from 'src/components/CardBalance';
import DailyPoints from 'src/components/DailyPoints';
import LatestTransactions from 'src/components/LatestTransactions';
import NoPaymentDue from 'src/components/NoPaymentDue';
import TransactionsList from 'src/components/TransactionsList';

const Home: FC = () => {
  return (
    <div>
      <CardBalance />
      <NoPaymentDue />
      <DailyPoints />
      <LatestTransactions />
      <h1>home</h1>
    </div>
  );
};

export default Home;
