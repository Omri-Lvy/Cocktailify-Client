import React from 'react';
import {useSignupLoginModal} from "../../context/signup-login-modal-context";
import Modal from "../ui/modal";
import SignupForm from "./signup-form";

const SignupLoginModal = () => {
    const {isOpen, closeModal, activeTab, setActiveTab} = useSignupLoginModal();

    const handleButtonClick = (e, tab) => {
        e.stopPropagation()
        setActiveTab(tab);
    }

    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div className="flex flex-col w-full gap-8">
                <div className="flex w-full border border-neutral-500 px-1.5 py-1.5 rounded-lg">
                    <button className={`${activeTab === "login" ? 'bg-neutral-700 border' : '' } border-neutral-500 flex-1 text-center rounded-md px-4 py-2`} onClick={(e) => handleButtonClick(e, "login")}>
                        Sign In
                    </button>
                    <button className={`${activeTab === "signup" ? 'bg-neutral-700 border' : '' } border-neutral-500 flex-1 text-center rounded-md px-4 py-2`} onClick={(e) => handleButtonClick(e, "signup")}>
                        Create Account
                    </button>
                </div>
                {activeTab === "login" ? null : <SignupForm/>}
            </div>
        </Modal>
    );
};

export default SignupLoginModal;