import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Stats } from '../types';

interface StatsState {
  stats: Stats;
}

const initialState: StatsState = {
  stats: {
    visitors: 416,
    posts: 16,
    revenue: 416,
    orders: 46,
  },
};

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    updateStats: (state, action: PayloadAction<Partial<Stats>>) => {
      state.stats = { ...state.stats, ...action.payload };
    },
    incrementPosts: (state) => {
      state.stats.posts += 1;
    },
  },
});

export const { updateStats, incrementPosts } = statsSlice.actions;
export default statsSlice.reducer;

