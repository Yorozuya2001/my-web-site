import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PhotoState } from "../types";

const initialState: PhotoState = {
  career: false,
  study: false,
  life: false,
};

export const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    setPhoto: (
      state: PhotoState,
      action: PayloadAction<{ key: keyof PhotoState; value: boolean }> // tipar el payload
    ) => {
      const { key, value } = action.payload;
            Object.keys(state).forEach((prop) => {
              if (prop !== key) {
                state[prop as keyof PhotoState] = false;
              }
            });
            state[key] = value;
    },
  },
});

createSlice;
export const { setPhoto } = photoSlice.actions;

export default photoSlice.reducer;
