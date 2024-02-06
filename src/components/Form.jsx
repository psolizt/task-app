import { useState } from "react";
import '../css/form.css';
import { v4 as uuidv4 } from 'uuid';

function Form(porps) {

    const [input, setInput] = useState('');

    const handleInput = e =>{
        setInput(e.target.value);
    };

    const handleAdd = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        };

        porps.onSubmit(newTask);
    };

    return (
        <form className="task-form" onSubmit={handleAdd}>
            <input className="task-input" type="text" placeholder="Escribe una Tarea..." name="text" onChange={handleInput}/>
            <button className="task-button">Agregar Tarea</button>
        </form>
    );
}

export default Form;