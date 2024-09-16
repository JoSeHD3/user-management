import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';
import filtersReducer from './users/filtersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
