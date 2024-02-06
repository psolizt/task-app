import { useState, useEffect } from "react";
import '../css/tasklist.css'
import Form from "./Form";
import Task from "./Task";

function TaskList() {

    /* recuperamos tareas de localstorage */
    
    const tareasAlmacenadas = JSON.parse(localStorage.getItem('tareas'));

    /* Validamos si no esta vacio y cargamos la lista de tareas */

    const [tasks, setTasks] = useState(tareasAlmacenadas?tareasAlmacenadas:[]); 

    /* Guardamos tareas en localstorage */

    useEffect(() => {
            localStorage.setItem('tareas', JSON.stringify(tasks));
        }, [tasks]
    );

    /* Anadimos tareas */

    const addTask = task => {
        if(task.text.trim()) {
            task.text = task.text.trim();
            const taskUpdate = [task, ...tasks];
            setTasks(taskUpdate);
        } else {
            alert('Please enter a valid task or is empty');
        }
    };

    const handleDelete = id => {
        const taskUpdate = tasks.filter(task => task.id !== id);
        setTasks(taskUpdate);
    };

    const handleComplete = id => {
        const taskUpdate = tasks.map( task => {
            if(task.id === id) {
                task.completed = !task.completed;
            }
            return task;
        });
        setTasks(taskUpdate);
    };

    return (
        <>
            <Form onSubmit={addTask}/>
            <div className="task-list-container">
                {
                    tasks.map((task) =>
                        <Task key={task.id} id={task.id} text={task.text} completed={task.completed} eventDelete={handleDelete} eventComplete={handleComplete}/>
                    )
                }
            </div>
        </>
    );
}

export default TaskList;