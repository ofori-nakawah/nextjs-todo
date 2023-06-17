"use client"
import React, {useState} from 'react';
import {ITasks} from "../../types/tasks";
import {TfiPencilAlt, TfiTrash} from "react-icons/tfi";
import EditTaskComponent from "./EditTaskComponent";
import {deleteTodo} from "../../api";
import {useRouter} from "next/navigation";

interface TaskProps {
    task: ITasks
}

const Task: React.FC<TaskProps> = ({task}) => {
    const router = useRouter()
    const [isEditing, setIsEditing] = useState<boolean>(false)

    const handleEditPressed = () => {
        setIsEditing(true)
    }

    const handleDelete = async () => {
        await deleteTodo(task)
        router.refresh()
    }

    return (
        <tr key={task.id}>
            <td className="w-full">{isEditing ? <EditTaskComponent setIsEditing={setIsEditing} task={task} /> : <span>{task.text}</span>}</td>
            <td className="flex">
                <TfiPencilAlt cursor="pointer" onClick={handleEditPressed} className="mr-5 text-blue-500" size={24} />
                <TfiTrash cursor="pointer" onClick={handleDelete} className="text-red-500" size={24} />
            </td>
        </tr>
    );
};

export default Task;