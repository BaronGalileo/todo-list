import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: number;
  text: string;
  isRedy: boolean;
};

interface TodosState {
  todos: { [key: number]: Todo };
}

const initialState: TodosState = {
  todos: {},
}

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateTodos: (state, action: PayloadAction<Todo>) => {
      state.todos[action.payload.id] = action.payload;
    },
    removeTodos: (state, action: PayloadAction<number>) => {
      delete state.todos[action.payload];
    },
    removeAllTodos: (state) => {
      state.todos = {};
    },
  },
});

export const { updateTodos, removeTodos, removeAllTodos } = todosSlice.actions;

export default todosSlice.reducer;