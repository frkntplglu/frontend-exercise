import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { movieAPI } from '@api/api';

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
    const response = await movieAPI.get("/entries");
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
      })
      .addCase(getEntries.rejected, (state) => {
        state.status = 'failed';
      });
  },
});


// For now create a selector for first 21 items in each programType
export const selectMovies = (state: RootState) => state.entry.entries.filter(entry => entry.programType === "movie" && entry.releaseYear >= 2010).slice(0,21);
export const selectSeries = (state: RootState) => state.entry.entries.filter(entry => entry.programType === "series" && entry.releaseYear >= 2010).slice(0,21);
export const selectStatus = (state: RootState) => state.entry.status;
export default entrySlice.reducer;
