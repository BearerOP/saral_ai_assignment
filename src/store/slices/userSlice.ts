import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types';

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    name: 'Jen Nelson',
    email: 'jennelsonfitness@gmail.com',
    avatar: '/src/assets/images/avatar.png',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;

