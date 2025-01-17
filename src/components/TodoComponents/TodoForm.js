import React from 'react';
import './TodoForm.css'
function TodoForm(props) {
    return (

        <form onSubmit={props.addNewItem}>
            <input
                className="input"
                type="text"
                value={props.value}
                onChange={props.changeHandler}
                placeholder="task"
                name="task"
            />
            <button type="submit">Todo</button>
            <button onClick={props.clearCompleted}>Clear All</button>
        </form>
    );
}

export default TodoForm;
