import { FC } from 'react';
import CardInfo from 'src/components/CardInfo';
import LatestTransactions from 'src/components/LatestTransactions';
import './home.scss';

const Home: FC = () => {
  return (
    <div className="home">
      <CardInfo />
      <LatestTransactions />
    </div>
  );
};

export default Home;
