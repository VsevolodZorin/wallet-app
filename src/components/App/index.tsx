import { FC, useEffect } from 'react';
import { useAppDispatch } from 'src/hooks/redux';
import { appActions, ICard } from 'src/store/reducers/app.slice';
import mockData from 'src/data/init-transactions.json';
import Layout from '../Layout';
import './app.scss';

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.setCard(mockData.card as ICard));
  }, []);

  return <Layout />;
};

export default App;
