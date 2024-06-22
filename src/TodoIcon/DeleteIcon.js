import React from "react";
import { TodoIcon } from "./index.js";

const DeleteIcon = ({onDelete}) => {
  return <TodoIcon 
  type="delete"
  color="gray"
  onClick={onDelete}
  />;
};

export { DeleteIcon };


