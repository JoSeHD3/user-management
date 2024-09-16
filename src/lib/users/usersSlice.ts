import { createSlice } from '@reduxjs/toolkit';
import { UsersState } from './interfaces';
import { fetchUsers } from '@/lib/methods';

const initialState: UsersState = {
  users: [],
  loading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default usersSlice.reducer;
