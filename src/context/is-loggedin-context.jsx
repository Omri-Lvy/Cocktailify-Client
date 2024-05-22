import React, {useState} from 'react';

const IsLoggedInContext = React.createContext({
    isLoggedIn: false,
    loginChangeHandler: () => {},
    userID: null,
    favorites: [],
    setFavorites: () => {},
});

export const IsLoggedInProvider = ({children}) => {
    const [userID, setUserID] = useState(localStorage.getItem("cocktailifyLoggedInUser"));
    const [isLoggedIn, setIsLoggedIn] = useState(!!userID);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("cocktailifyUserFavorites")) || []);

    const loginChangeHandler = (isLoggedIn, user={}) => {
        if (isLoggedIn) {
            localStorage.setItem("cocktailifyLoggedInUser", JSON.stringify(user.id));
            localStorage.setItem("cocktailifyUserFavorites", JSON.stringify(user.favorites));
            setIsLoggedIn(true)
            setFavorites(user.favorites)
            setUserID(user.id)
        }
        else {
            localStorage.removeItem("cocktailify-user-logged-in");
            setIsLoggedIn(false)
            setFavorites([])
            setUserID(null)
        }
    }

    const contextValue = {
        isLoggedIn,
        loginChangeHandler,
        userID,
        favorites,
        setFavorites,
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