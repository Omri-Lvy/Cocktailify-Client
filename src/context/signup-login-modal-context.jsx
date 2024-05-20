import React, {createContext, useContext, useState} from "react";

const SignupLoginModalContext = createContext({
    openModal: () => {},
    closeModal: () => {},
    isOpen: false,
    activeTab: 'login',
    setActiveTab: () => {}
});

export const SignupLoginModalProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('login');

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const contextValue = {
        openModal,
        closeModal,
        isOpen,
        activeTab,
        setActiveTab
    }

    return (
        <SignupLoginModalContext.Provider value={{...contextValue}}>
            {children}
        </SignupLoginModalContext.Provider>
    );
}

export const useSignupLoginModal = () => {
    const context = useContext(SignupLoginModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}