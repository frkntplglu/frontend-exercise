import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { movieAPI } from '../../api';

export interface Entry {
  title: string;
  description: string;
  programType: string;
  images: {
    "Poster Art": {
      url: string;
      width: number;
      height: number;
    }
  };
  releaseYear: number;
}

export interface EntryState {
  entries:  Entry[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: EntryState = {
  entries: [],
  status: 'idle',
};

export const getEntries = createAsyncThunk(
  'entry/fetchEntry',
  async () => {
    const response = await movieAPI.get("/");
    const data = await response.data;

    return data;
  }
);



export const entrySlice = createSlice({
  name: 'entry',
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEntries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getEntries.fulfilled, (state, action: PayloadAction<Entry[]>) => {
        state.status = 'idle';
        state.entries = action.payload
      });
  },
});

export const selectEntries = (state: RootState) => state.entry.entries;

export default entrySlice.reducer;
