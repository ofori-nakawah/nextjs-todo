import React, {useState} from 'react';
import {ITasks} from "../../types/tasks";
import {editTodo} from "../../api";
import {useRouter} from "next/navigation";

interface EditTaskProps {
    task: ITasks,
    setIsEditing: (editing: boolean) => void | boolean
}

const EditTaskComponent: React.FC<EditTaskProps> = ({task, setIsEditing}) => {
    const router = useRouter()
    const [taskValue, setTaskValue] = useState(task.text)
    const [isLoading, setIsLoading] = useState(false)

    const handleEditTask = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        try {
            await editTodo({
                id: task.id,
                text: taskValue
            })
        } catch (e: Error) {
            new Error(e.message)
            setIsLoading(false)
        }
        setIsLoading(false)
        router.refresh()
        setIsEditing(false)
    }

    return (
        isLoading ?
            <span>Processing...</span> :
            <div className="flex gap-5">
                <input type="text" value={taskValue} onChange={(e) => setTaskValue(e.target.value)} className="input input-bordered w-full" />
                <button onClick={handleEditTask} className="btn btn-warning text-bold" type="submit">Update</button>
            </div>
    );
};

export default EditTaskComponent;