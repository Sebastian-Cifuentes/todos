import { Todo } from "../../interfaces/todo.interface";

export interface TodoState {
    todos: Todo[];
    loading: boolean;
  }
  
  export const initialState: TodoState = {
    todos: [],
    loading: false
  };