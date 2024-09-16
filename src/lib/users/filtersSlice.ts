import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FiltersState } from './interfaces';

const initialState: FiltersState = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(
      state,
      action: PayloadAction<{ key: keyof FiltersState; value: string }>,
    ) {
      state[action.payload.key] = action.payload.value;
    },
    clearFilters(state) {
      state.name = '';
      state.username = '';
      state.email = '';
      state.phone = '';
    },
  },
});

export const { setFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
