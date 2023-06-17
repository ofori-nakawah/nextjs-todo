import React from 'react';

interface ModalProps {
    modalOpen: boolean,
    setModalOpen: (open: boolean) => boolean | void,
    children: React.ReactNode | null
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
    return (
        <dialog className={`modal ${modalOpen && "modal-open"}`}>
            <div className="modal-box">
                <button onClick={() => setModalOpen(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                {children}
            </div>
        </dialog>
    );
};

export default Modal;