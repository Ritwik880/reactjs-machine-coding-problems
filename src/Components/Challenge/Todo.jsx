// Build a todo list application. Users should be able to add new tasks, edit the tasks, and delete tasks. Display the list of tasks dynamically.

import React, { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editTodoId, setEditTodoId] = useState(null);

    const addTodo = () => {
        if (newTodo.trim() === '') return;

        if (editTodoId !== null) {
            const updateTodos = todos.map((todo) =>
                todo.id === editTodoId ? { ...todo, text: newTodo } : todo
            );
            setTodos(updateTodos);
            setEditTodoId(null);
        }
        else {
            setTodos([...todos, { id: Date.now(), text: newTodo }])
        }

        setNewTodo('');
    }

    const editTodo = (id)=>{
        const todoToEdit = todos.find((todo)=> todo.id === id);
        setNewTodo(todoToEdit.text);
        setEditTodoId(id);
    }
    const removeTodo = (id)=>{
        const updatedTodos = todos.filter((todo)=> todo.id !== id);
        setTodos(updatedTodos);
        if (editTodoId === id) {
            setEditTodoId(null);
            setNewTodo('');
        }
    }
 
    return (
        <section className='landing-section'>
            <div className="row container">
                <div className="todos">
                    <h1 className='heading'>Todo App</h1>
                    <div>
                        <input
                            type="text"
                            className='form-control input-box'
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                        />
                        <button className='btn btn-primary mt-2' onClick={addTodo}>
                            {
                                editTodoId !== null ? 'Update Todo' : 'Add Todo'
                            }
                        </button>
                    </div>
                    <div>
                        <ul>
                            {
                                todos.map((todo) => (
                                    <li key={todo.id}>
                                        <input
                                            type="text"
                                            className='form-control input-box mt-2'
                                            value={todo.text}
                                            readOnly={true}
                                        />
                                        <button className='btn btn-info mt-2 mb-2' onClick={()=> editTodo(todo.id)}>
                                        Edit
                                        </button>
                                          <button className='btn btn-danger mt-2 ml-2 mb-2' onClick={()=> removeTodo(todo.id)}>
                                        Remove
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Todo;
