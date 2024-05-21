import React, {useEffect, useState} from 'react';

const IsLoggedInContext = React.createContext({
    isLoggedIn: false,
    loginChangeHandler: () => {}
});

export const IsLoggedInProvider = ({children}) => {
    const userID = localStorage.getItem("cocktailify-user-logged-in");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(!!userID);
    }, [userID]);

    const loginChangeHandler = (isLoggedIn, user={}) => {
        if (isLoggedIn) {
            localStorage.setItem("cocktailify-user-logged-in", JSON.stringify(user));
            setIsLoggedIn(true)
        }
        else {
            localStorage.removeItem("cocktailify-user-logged-in");
            setIsLoggedIn(false)
        }
    }

    const contextValue = {
        isLoggedIn,
        loginChangeHandler
    }

    return (
        <IsLoggedInContext.Provider value={{...contextValue}}>
            {children}
        </IsLoggedInContext.Provider>
    );
}

export const useIsLoggedIn = () => {
    const context = React.useContext(IsLoggedInContext);
    if (!context) {
        throw new Error('useIsLoggedIn must be used within a IsLoggedInProvider');
    }
    return context;
}