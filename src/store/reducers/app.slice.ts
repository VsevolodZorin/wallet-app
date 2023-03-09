import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum TransactionTypeEnum {
  PAYMENT = 'PAYMENT',
  CREDIT = 'CREDIT',
}

export interface ICard {
  limit: number;
  balance: number;
  transactions: ITransaction[];
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
  card: ICard | null;
  selectedTransaction: ITransaction | null;
}

const initialState: IAppState = {
  selectedTransaction: null,
  card: null,
};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<ICard>) => {
      state.card = action.payload;
    },
  },
  extraReducers: {},
});

export const appActions = AppSlice.actions;
export const appReducer = AppSlice.reducer;
