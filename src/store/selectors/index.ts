import { RootState } from 'src/store';

export const selectApReducer = (state: RootState) => {
  return state.appReducer;
};
