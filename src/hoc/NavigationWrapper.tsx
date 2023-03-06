import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useAppDispatch } from 'src/hooks/redux';

interface INavigationWrapper {
  children: React.ReactNode;
}

const NavigationWrapper: React.FC<INavigationWrapper> = ({ children }) => {
  const { transactionId } = useParams();
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {}, [location, dispatch]);

  return <>{children}</>;
};

export default NavigationWrapper;
