"use client"
import { useEffect, useState } from "react"
import { createTodo, findTodos, removeTodo } from "../api/todos";
import { TodoCard } from "../components/TodoCard";

interface Todo {
    title: string;
    id: number;
}

export default function Todo() {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);

    async function addHandler() {
        await createTodo(title);
        getTodos();
    }

    async function getTodos() {
        const allTodos = await findTodos();
        setTodos(allTodos);
    }

    async function onDelete(id: number) {
        await removeTodo(id);
        console.log("todo deleted")
        getTodos();
    }

    useEffect(() => {
        getTodos();
    }, [])

    return <div>
        <div className="flex justify-center mt-4 ">
            <div className="flex flex-col justify-center">

                <div className="text-4xl text-center">
                    Todo App
                </div>
                <div>
                    <input onChange={(e) => {
                        setTitle(e.target.value);
                    }} className="mt-4 border-2 border-black rounded-md px-2 py-1 " type="text" placeholder="add todo"></input>
                    <button onClick={addHandler} className="ml-2 bg-green-200 px-2 py-1 rounded-md border-2 border-black">Add</button>
                </div>
                <div>
                    {todos.length == 0 ? (<div>Empty</div>) : (
                        todos.map((todo) => {
                            return <div>
                                <TodoCard onclick={() => onDelete(todo.id)} title={
                                    todo.title.length <= 10
                                        ? todo.title
                                        : todo.title.substring(0, 8).concat("..")
                                } key={todo.id} />
                            </div>
                        })


                    )}
                </div>
            </div>
        </div>
    </div>
}