


function TodoList (props) {
    return (
    
        <ul>
            {props.children}
            {/* dado que va a tener hijos en App.js entonces aquí se hace abstración de ello. Si vamos a App.js vemos vemos que dentro de TodoList se neeuntaran varios TodoItem */}
        </ul>
    
      );
    }

    export  {TodoList}

    // El profe recomienda exportar, es más epecifico
    