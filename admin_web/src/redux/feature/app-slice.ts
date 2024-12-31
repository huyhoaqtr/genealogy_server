import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface appState {
  loading: boolean;
}

const initialState: appState = {
  loading: false,
};

// Tạo slice cho app
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;
export default appSlice.reducer;
