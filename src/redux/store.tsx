import { configureStore } from "@reduxjs/toolkit"
import photoReducer  from "./userSlice"


export const store = configureStore({
  reducer: {
    photo: photoReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>; //  tipo que se utiliza en Redux para representar el estado global de tu aplicación