import { RootState } from 'src/store';
import { ITransaction } from '../reducers/app.slice';

export const selectTransactions = (state: RootState) => {
  return state.appReducer.transactions;
};

export const selectTransactionById = (state: RootState, id: number): ITransaction | undefined => {
  console.log('--- selectTransactionById ', id);

  return state.appReducer.transactions.find(el => el.id === id);
};
