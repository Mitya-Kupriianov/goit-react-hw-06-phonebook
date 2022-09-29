import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  filters: '',
};

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    filterContact: (state, action) => {
      state.filters = action.payload;
      console.log('🚀 ~ file: filterSlice.js ~ line 12 ~ state', state);
    },
  },
});
export const { filterContact } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
