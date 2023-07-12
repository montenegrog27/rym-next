import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    characters: [],
  },
  reducers: {
    TraerPersonajes: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { TraerPersonajes } = Slice.actions;
