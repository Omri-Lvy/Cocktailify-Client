import React, {useEffect} from 'react';
import CocktailCard from "../../components/ui/cocktail-card";
import {useIsLoggedIn} from "../../context/is-loggedin-context";
import {useNavigate} from "react-router-dom";

const Favorites = () => {
    const {isLoggedIn, favorites} = useIsLoggedIn();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/");
        }
    }, [isLoggedIn, navigate]);

    useEffect(() => {
        localStorage.setItem("cocktailifyUserFavorites", JSON.stringify(favorites));
    }, [favorites]);

    const cocktailListRender = () => (
        favorites.map((cocktail, index) => (
            <CocktailCard key={index} cocktail={cocktail}/>
        ))
    )

    return (
        <div className="relative mt-4 max-w-7xl mx-auto">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-2.5 lg:mt-5 tracking-wide font-semibold">
                    Your Personal {" "}
                    <span
                        className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-transparent bg-clip-text">
                        Cocktail Collection
                    </span>
                </h1>
                <h6 className="text-lg sm:text-xl lg:text-2xl mt-2.5 lg:mt-5 tracking-wide">
                    Review the drinks that have captured your heart.
                </h6>
            </div>
            <div className="block">
                {favorites.length === 0 ?
                    <h2 className="text-center text-3xl mt-10 font-semibold">No favorite cocktails found</h2> :
                    <div
                        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 lg:mt-20 gap-6 px-4">
                        {cocktailListRender()}
                    </div>
                }
            </div>
        </div>
    );
};

export default Favorites;