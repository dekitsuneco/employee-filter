import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  selectedJob: string;
}

const initialState: FilterState = {
  selectedJob: '',
};

const filterSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    selectJob: (state: FilterState, action: PayloadAction<string>) => {
      state.selectedJob = action.payload;
    },
  },
});

export { filterSlice };
export type { FilterState };
