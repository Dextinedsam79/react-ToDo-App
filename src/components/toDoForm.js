import React, { useState } from 'react';

const ToDoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value);
        setValue("");
    };

    const handleChange = e => {
        setValue(e.target.value);
    };

    return (
        <form className="toDoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="toDo-input"
                value={value}
                placeholder="What is the task today?"
                onChange={handleChange}
            />
            <button type="submit" className="toDo-btn">Add Task</button>
        </form>
    );
};

export default ToDoForm; // Exporting ToDoForm as the default export
