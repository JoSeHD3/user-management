import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from './users/interfaces';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users',
  );
  return response.data as User[];
});
