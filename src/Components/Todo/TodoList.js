
import React from 'react';

import Todo from './Todo';

export default function TodoList({ 
    todoArray, 
    setTodoArray, 
    setDisplayTodo, 
    completedArray, 
    setCompletedArray, 
    displayTodo 
}) { 

    return (
        <div className="todoListView">
           <h1 className="todoTitle"> Things To Do</h1>
           <ul className="todoList">
                {todoArray?.map((todo) => (
                    <Todo 
                        todo={todo}
                        title={todo.title}
                        key={todo.id} 
                        todoArray={todoArray} 
                        setTodoArray={setTodoArray} 
                        setDisplayTodo={setDisplayTodo}
                        setCompletedArray={setCompletedArray}
                        completedArray={completedArray}
                        displayTodo={displayTodo}
                    />
                ))}
           </ul>
        </div>
    )
}