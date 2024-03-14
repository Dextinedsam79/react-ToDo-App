import React, { useState } from 'react';
import ToDoForm from './toDoForm'; // Corrected import statement
import { v4 as uuidv4 } from 'uuid'; // Corrected import statement
import { Todo } from './toDo';
import { EditToDoForm } from './editToDoForm';

export const ToDoWrapper = () => { // Corrected component name
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, {
            id: uuidv4(), // Corrected function call
            task: todo,
            completed: false,
            isEditing: false
        }]);
        console.log(todos)
    };

const toggleCompleted= id=>{
    setTodos(todos.map(todo=> todo.id === id ?
         {...todo, completed: !todo.completed}: todo))
}

const deleteTodo = id=>{
    setTodos(todos.filter(todo => todo.id !== id));
}

const editTodo= id=>{
    setTodos(todos.map(todo=> todo.id === id ?
         {...todo, isEditing: !todo.isEditing}: todo))
}

const editTask= (task,id)=>{
    setTodos(todos.map(todo=> todo.id === id ?
         {...todo,task, isEditing: !todo.isEditing}: todo))
    }
    return (
        <div className="toDoWrapper">
            <h1>Get Things Done!</h1>
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index)=>(
            todo.isEditing? (<EditToDoForm
            editTodo={editTask} task={todo}/>):
            (
                <Todo task={todo} key={index}
            toggleCompleted={toggleCompleted} 
            deleteTodo= {deleteTodo} 
            editTodo= {editTodo}/>
            )
            ))}
        </div>
    );
};
