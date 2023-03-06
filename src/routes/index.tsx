import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'src/containers/Home';
import Transaction from 'src/containers/Transaction';
import NavigationWrapper from 'src/hoc/NavigationWrapper';

export const CustomRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route
          path="/"
          element={
            <NavigationWrapper>
              <Home />
            </NavigationWrapper>
          }
        />
        <Route
          path="/:transactionId"
          element={
            <NavigationWrapper>
              <Transaction />
            </NavigationWrapper>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
