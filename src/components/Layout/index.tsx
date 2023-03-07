import { useEffect, FC } from 'react';
import { useAppDispatch } from 'src/hooks/redux';
import { CustomRouter } from 'src/routes';
import Header from '../Header';
import { appActions, ITransaction } from 'src/store/reducers/app.slice';
import mockData from 'src/data/init-transactions.json';

const Layout: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.setTransactions(mockData.transactions as ITransaction[]));
  }, []);

  return (
    <div>
      <Header />
      <CustomRouter />
    </div>
  );
};

export default Layout;
