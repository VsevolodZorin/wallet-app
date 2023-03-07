import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum TransactionTypeEnum {
  PAYMENT = 'PAYMENT',
  CREDIT = 'CREDIT',
}

export interface ITransaction {
  id: number;
  type: TransactionTypeEnum;
  sum: number;
  name: string;
  description: string;
  date: string;
  pending: boolean;
  authorizedUser: string; // user
  img: string; // dark-color
}

export interface IAppState {
  transactions: ITransaction[];
  selectedTransaction: ITransaction | null;
}

const initialState: IAppState = {
  selectedTransaction: null,
  transactions: [],
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<ITransaction[]>) => {
      state.transactions = action.payload;
    },
  },
  extraReducers: {},
});

export const { setTransactions } = AppSlice.actions;

export const appActions = AppSlice.actions;
export const appReducer = AppSlice.reducer;
