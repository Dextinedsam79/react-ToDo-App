import React, { useState } from 'react';

export const EditToDoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    };

    const handleChange = e => {
        setValue(e.target.value);
    };

    return (
        <form className="ToDoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="toDo-input"
                value={value}
                placeholder="Update Task"
                onChange={handleChange}
            />
            <button type="submit" className="toDo-btn">Update Task</button>
        </form>
    );
};

