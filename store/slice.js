import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
  name: "valores",
  initialState: {
    characters: [],
  },
  reducers: {
    agregarPersonaje: (state, action) => {
      state.characters.push(action.payload);
    },
  },
});

export const { agregarPersonaje } = Slice.actions;
