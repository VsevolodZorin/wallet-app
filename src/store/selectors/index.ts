import { RootState } from 'src/store';
import { ITransaction } from '../reducers/app.slice';

export const selectTransactions = (state: RootState) => {
  return state.appReducer.card?.transactions;
};

export const selectTransactionById = (state: RootState, id: number): ITransaction | undefined => {
  return state.appReducer.card?.transactions.find(el => el.id === id);
};
