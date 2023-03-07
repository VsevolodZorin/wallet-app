import { FC } from 'react';
import TransactionsList from 'src/components/TransactionsList';

const Home: FC = () => {
  return (
    <div>
      <TransactionsList />
      <h1>home</h1>
    </div>
  );
};

export default Home;
