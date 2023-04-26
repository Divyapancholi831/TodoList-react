import {
  add_todo,
  delete_todo,
  update_todo,
  add_title,
  add_string,
} from "./ActionType";

const intialstate = { string: "", title: "", Todos: ["todo1"] };
export const Reducer = (state = intialstate, action) => {
  if (action.type === add_todo) {
    return { ...state, Todos: [...state.Todos, action.data], title: "" };
  } else if (action.type === delete_todo) {
    return {
      ...state,
      Todos: state.Todos.filter((element, index) => index != action.data),
    };
  } else if (action.type === update_todo) {
    return {
      ...state,
      Todos: state.Todos.map((todo, index) =>
        index == state.string ? action.data : todo
      ),
      title: "",
      string: "",
    };
  } else if (action.type === add_title) {
    return {
      ...state,
      title: action.data,
    };
  } else if (action.type === add_string) {
    return {
      ...state,
      string: action.data,
    };
  }

  return state;
};
// const state = { Todos: ["todo1"] };
// const a = "todo2";
// {todos : [...state.todos,a]}
