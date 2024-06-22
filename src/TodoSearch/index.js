import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";



function TodoSearch() {
// Aquí se pasan props al componente TodoSearch que en el componenete App pasan se manejan como estado (searcValue es ele estado)
// Ahora pasando prop con useContext
const {
  searchValue,
  setSearchValue
} = React.useContext(TodoContext)

// cons [state, setState] = React.useState()  este es el manera de usar el estado. Los nombres se pueden cambiar.
// Se ncesita un valor valor inicial del estado, para cuando el componente se renderice por primera vez

  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value= {searchValue}
      //  el valor inicial del input es el valor inicial del estado, es un string vacio. Ver el componente App"
      onChange={(e) => {
        console.log("Escribiste en el TodoSearch")
        console.log(e)
        console.log(e.target.value)
        setSearchValue(e.target.value)
      }}
    ></input>
  );
}

export { TodoSearch };

// El profe recomienda exportar así, exportanción nombrada, es más epecifico
