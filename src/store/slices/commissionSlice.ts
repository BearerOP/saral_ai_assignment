import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Commission } from '../types';

interface CommissionState {
  commission: Commission;
}

const initialState: CommissionState = {
  commission: {
    rate: 20,
    currentBalance: 28.75,
    dueDate: '06/24',
    paymentEmail: null,
  },
};

const commissionSlice = createSlice({
  name: 'commission',
  initialState,
  reducers: {
    updateCommission: (state, action: PayloadAction<Partial<Commission>>) => {
      state.commission = { ...state.commission, ...action.payload };
    },
  },
});

export const { updateCommission } = commissionSlice.actions;
export default commissionSlice.reducer;

