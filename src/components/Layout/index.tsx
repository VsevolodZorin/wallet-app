import { FC, useEffect } from 'react';
import mockData from 'src/data/init-transactions.json';
import { useAppDispatch } from 'src/hooks/redux';
import { CustomRouter } from 'src/routes';
import { appActions, ICard } from 'src/store/reducers/app.slice';
import Header from '../Header';

const Layout: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.setCard(mockData.card as ICard));
  }, []);

  return (
    <div>
      <Header />
      <CustomRouter />
    </div>
  );
};

export default Layout;
