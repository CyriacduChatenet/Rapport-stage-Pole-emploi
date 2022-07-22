import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface CounterState {
    value: number
  }  

  const initialState: CounterState = {
    value: 0,
  }

export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state) => {
            state.value ++
        },
        decrement : (state) => {
            state.value --
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.value
export default counterSlice.reducer;