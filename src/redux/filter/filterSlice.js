import { createSlice } from '@reduxjs/toolkit';

const filterAppState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterAppState,
  reducers: {
    setFilter: {
      reducer(_, action) {
        return action.payload;
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
