import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Links } from '../types';

interface LinksState {
  links: Links;
}

const initialState: LinksState = {
  links: {
    trackingLink: 'ds&durga.trysaral.com/kimiko',
    couponCode: 'KIMAYA10',
  },
};

const linksSlice = createSlice({
  name: 'links',
  initialState,
  reducers: {
    updateLinks: (state, action: PayloadAction<Partial<Links>>) => {
      state.links = { ...state.links, ...action.payload };
    },
  },
});

export const { updateLinks } = linksSlice.actions;
export default linksSlice.reducer;

