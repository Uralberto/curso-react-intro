import React from 'react'
import './TodoForm.css'
import {TodoContext} from '../TodoContext'


function TodoForm  () {

const[newTodoValue, setNewTodoValue] = React.useState(' ')

const{
    setOpenModal, addTodo
} = React.useContext(TodoContext)


const onSubmit = (e) => {
        e.preventDefault()
        // Esto evita que la página se recargue
        setOpenModal(false)
        // Estando aquí se necesita que se cierre el form, nada mas
        addTodo(newTodoValue)
    }

    const onCancel = (e) => {
        setOpenModal(false)
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value)
    }


    return (

        <form onSubmit = {onSubmit}>
            <label>
                Escribe tu nuevo TODO
            </label>
            <textarea
             placeholder='Cortar cebolla para el almuerzo'
             value = {newTodoValue}
             onChange = {onChange}
             />
            <div className='TodoForm-buttonContainer'>
            <button
            type = "button"
            className='TodoForm-buttom  TodoForm-buttom--cancel'
            onClick = {onCancel}
            
            >Cancelar</button>

            
            <button
            type= "submit"
            className='TodoForm-buttom TodoForm-buttom--add'
           
            >Agregar</button>
           
            </div>
        </form>
    )


}

export {TodoForm}





