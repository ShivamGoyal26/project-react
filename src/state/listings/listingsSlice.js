import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listings: [],
  error: null,
  status: 'idle',
};

const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {},
});

export default listingsSlice.reducer;
