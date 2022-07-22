import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterSlice from './slice/article';

export const store = configureStore({
    reducer: {
      counter : counterSlice
    },
  });
  
  export type AppDispatch = typeof store.dispatch
  export const useAppDispatch = () => useDispatch<AppDispatch>()
  
  export type RootState = ReturnType<typeof store.getState>