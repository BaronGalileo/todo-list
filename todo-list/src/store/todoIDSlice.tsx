import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface todoIDState {
    countID: number;
}


const initialState: todoIDState = {
    countID: 1,
}


export const todoIDSlice = createSlice({
  name: "todoID",
  initialState,
  reducers: {
    updateTodoID: (state, action: PayloadAction<number>) => {
        state.countID = action.payload
    },
   
  },
});

export const { updateTodoID } = todoIDSlice.actions;

export default todoIDSlice.reducer;