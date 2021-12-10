import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const todos = [
    { text: "Hacer el mate", completed: false },
    { text: "Prender la PC", completed: false },
    { text: "Ponerme a codear", completed: false },
];

function App() {
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {todos.map((todo) => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export default App;
