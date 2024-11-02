import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  value: 0,
  loading: false,
  error: null,
};

export const fetchRandomNumber = createAsyncThunk('counter/fetchRandomNumber', async () => {
  const response = await fetch(
    'https://cors-anywhere.herokuapp.com/https://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1'
  );

  const data = await response.json();
  console.log('Data:', data);
  return data[0];
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.value = action.payload;
      })
      .addCase(fetchRandomNumber.rejected, (state) => {
        state.loading = false;
        state.error = 'Failed to fetch numbers';
      });
  },
});

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
