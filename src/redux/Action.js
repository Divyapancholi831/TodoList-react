import {
  add_string,
  add_title,
  add_todo,
  delete_todo,
  update_todo,
} from "./ActionType";

export const Add_todo_action = (data) => {
  return {
    type: add_todo,
    data: data,
  };
};

export const delete_todo_action = (id) => {
  console.log("delete_action_called", id);
  return {
    type: delete_todo,
    data: id,
  };
};

export const add_title_action = (data) => {
  return {
    type: add_title,
    data: data,
  };
};

export const add_String_action = (data) => {
  return {
    type: add_string,
    data: data,
  };
};

export const update_todo_action = (data) => {
  return {
    type: update_todo,
    data: data,
  };
};
