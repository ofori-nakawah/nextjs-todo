import React from 'react';
import {ITasks} from "../../types/tasks";
import Task from "./Task";

interface TodoListProps {
    tasks: ITasks[]
}

const TodoListComponent: React.FC<TodoListProps> = ({tasks}) => {
    return (
        <div className="card bg-neutral text-neutral-content mt-20">
            <div className="card-body">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Task</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tasks.map(task => (
                            <Task key={task.id} task={task} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default TodoListComponent;