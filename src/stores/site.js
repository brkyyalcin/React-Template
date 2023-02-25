import { createSlice } from "@reduxjs/toolkit";

export const site = createSlice({
  name: "site",
  initialState: {
    dark: false,
    language: "tr",
    sideBtn: true,
  },
  reducers: {
    setDarkMode: (state) => {
      state.dark = !state.dark;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setSideBtn: (state) => {
      state.sideBtn = !state.sideBtn;
    },
  },
});

export const { setDarkMode, setLanguage, setSideBtn } = site.actions;

export default site.reducer;
