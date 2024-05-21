import React from 'react';

const Modal = ({ children, isOpen, closeModal }) => {

    const closeModalClickHandler = (e) => {
        e.stopPropagation();
        if (isOpen) closeModal();
    }

    return (
        <div className={`${isOpen ? 'flex' : 'hidden' } items-center justify-center fixed z-50 bg-neutral-950/90 top-0 left-0 w-dvw h-dvh`}>
            <div className="relative px-4 md:px-8 py-10 bg-neutral-900 rounded-xl shadow border border-neutral-800 w-11/12 sm:max-w-[30rem] min-h-64 flex justify-center items-start flex-col">
                <button onClick={closeModalClickHandler}
                        className="absolute top-2 left-2 text-neutral-300 hover:text-neutral-50 transition-colors duration-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                </button>
                {children}
                <div
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-[#FF8800] to-transparent transition-height duration-200 h-[2px] w-full blur-sm group-hover:h-[4px]"/>
                <div
                    className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-[#FF8800] to-transparent h-px w-full"/>
                <div
                    className="absolute inset-x-1/4 bottom-0 bg-gradient-to-r from-transparent via-[#FDAC42] to-transparent transition-height duration-200 h-[5px] w-1/2 blur-sm group-hover:h-[10px]"/>
                <div
                    className="absolute inset-x-1/4 bottom-0 bg-gradient-to-r from-transparent via-[#FDAC42] to-transparent h-px w-1/2"/>
            </div>
        </div>
    );
};

export default Modal;