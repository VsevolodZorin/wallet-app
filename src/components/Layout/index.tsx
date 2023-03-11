import { FC, useEffect } from 'react';
import mockData from 'src/data/init-transactions.json';
import { useAppDispatch } from 'src/hooks/redux';
import { CustomRouter } from 'src/routes';
import { appActions, ICard } from 'src/store/reducers/app.slice';
import './layout.scss';

const Layout: FC = () => {
  return (
    <div className="content layout">
      <CustomRouter />
    </div>
  );
};

export default Layout;
