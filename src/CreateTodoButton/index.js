import React from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";


function CreateTodoButton() {
  
  const {setOpenModal} = React.useContext(TodoContext)


  return (
    <button
      className="CreateTodoButton"
      onClick={(e) => {
        console.log("le diste clic");
        setOpenModal(true)
      }}

    >
      +
    </button>
  );
}

export { CreateTodoButton };

// Esto se llama export nombrado
