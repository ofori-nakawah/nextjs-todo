"use client"
import React, {useState} from 'react';
import { TfiPlus } from "react-icons/tfi";
import Modal from "./Modal";
import {addTodo} from "../../api";
import {useRouter} from "next/navigation";
import {v4 as uuid} from "uuid"

const AddTaskComponent = () => {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState<Boolean>(false)
    const [newTaskValue, setNewTaskValue] = useState<string>("")

    const handleSubmitNewTodo = async (e) => {
        e.preventDefault()
        const res = await addTodo({
             id: uuid(),
             text: newTaskValue
        })
        setNewTaskValue("")
        setModalOpen(false)
        router.refresh()
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={ () => setModalOpen(true)}>add new task <TfiPlus size={24} className="ml-2" /></button>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
                <form onSubmit={handleSubmitNewTodo}>
                    <h3 className="font-bold text-lg">create a new task </h3>
                    <div className="modal-action">
                        <input type="text" onChange={e => setNewTaskValue(e.target.value)} placeholder="Type here" value={newTaskValue} className="input input-bordered w-full" />
                        <button className="btn text-bold" type="submit">Submit</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AddTaskComponent;