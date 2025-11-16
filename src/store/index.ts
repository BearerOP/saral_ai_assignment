import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import statsReducer from './slices/statsSlice';
import commissionReducer from './slices/commissionSlice';
import linksReducer from './slices/linksSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    stats: statsReducer,
    commission: commissionReducer,
    links: linksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

