import { createSlice } from '@reduxjs/toolkit';

export interface IAppState {}

const initialState: IAppState = {};

export const AppSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const appActions = AppSlice.actions;
export const appReducer = AppSlice.reducer;
