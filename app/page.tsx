import AddTaskComponent from "./components/AddTaskComponent";
import TodoListComponent from "./components/TodoListComponent";
import {getAllTodos} from "../api";

export default async function Home() {
    const tasks = await getAllTodos()
    console.log(tasks)
    return (
        <main className="max-w-4xl mx-auto mt-4">
            <div className="flex flex-col gap-4 text-center mt-5">
                <h1 className="text-5xl font-bold mt-5">daily todo listings</h1>
                <AddTaskComponent/>
            </div>
            <TodoListComponent tasks={tasks}/>
        </main>
    )
}
