import {ITasks} from "./types/tasks";

const baseURL = "http://localhost:3001"

export const getAllTodos = async (): Promise<ITasks[]> => {
    const res = await fetch(`${baseURL}/tasks`, {cache: 'no-store'})
    return await res.json()
}

export const addTodo = async (post: ITasks): Promise<ITasks> => {
    const res = await fetch(`${baseURL}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    return await res.json()
}

export const editTodo = async (task: ITasks): Promise<ITasks> => {
    const res = await fetch(`${baseURL}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    return await res.json();
}

export const deleteTodo = async (task: ITasks) => {
    await fetch(`${baseURL}/tasks/${task.id}`, {
        method: "DELETE"
    })
}