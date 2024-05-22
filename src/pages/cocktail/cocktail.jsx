import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {fetcher} from "../../utils/fetch";
import Divider from "../../components/ui/divider";
import {useIsLoggedIn} from "../../context/is-loggedin-context";

const Cocktail = () => {
    const {pathname} = useLocation();
    const [cocktail, setCocktail] = useState({});
    const {isLoggedIn, setFavorites, favorites, userID} = useIsLoggedIn();
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        const fetchCocktail = async () => {
            const res = await fetcher(pathname);
            setCocktail(res);
        }

        fetchCocktail();
    }, [pathname]);

    useEffect(() => {
        const isLikedResolver = () => {
            if (!isLoggedIn) return;
            return favorites.find(c => c.idDrink === cocktail.idDrink)
        }

        setIsLiked(isLikedResolver());
    }, [cocktail, favorites, isLoggedIn]);

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);

    useEffect(() => {
        document.title = "Cocktailify - " + cocktail.strDrink || "Cocktail";

    }, [cocktail]);

    const likeHandler = (e) => {
        e.stopPropagation()
        e.preventDefault()
        if (!isLoggedIn) return;
        updateFavorites()
    }

    const updateFavorites = async () => {
        if (isLiked) {
            const requesetBody = {
                user_id: userID,
                cocktail_id: cocktail.idDrink
            }
            const res = await fetcher('/remove-favorite', 'POST', JSON.stringify(requesetBody), {
                'Content-Type': 'application/json'
            });
            if (!res['isSuccess']) return;
            setFavorites(prev => prev.filter(c => c.idDrink !== cocktail.idDrink));
            setIsLiked(false)
        } else {
            const requesetBody = {
                user_id: userID,
                cocktail: cocktail
            }
            const res = await fetcher('/add-favorite', 'POST', JSON.stringify(requesetBody), {
                'Content-Type': 'application/json'
            });
            if (!res['isSuccess']) return;
            setFavorites(prev => [...prev, cocktail]);
            setIsLiked(true)
        }
    }

    const ingredients = Object.keys(cocktail).filter(key => key.includes("strIngredient") && cocktail[key] !== null && cocktail[key] !== "");
    const measures = Object.keys(cocktail).filter(key => key.includes("strMeasure") && cocktail[key] !== null && cocktail[key] !== "");


    const ingredientsRenderer = () => (
        <ul className="flex flex-col justify-start items-start gap-2">
            {ingredients.map((ingredient, index) => (
                <li key={index} className="text-lg">{cocktail[measures[index]]} {cocktail[ingredient]} </li>
            ))}
        </ul>
    );

    return (
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start pt-12 gap-8">
            <div className="w-full flex justify-center items-center">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}
                     className="w-full md:w-3/4 rounded-xl"/>
            </div>
            <div className="flex flex-col items-center sm:items-start justify-between w-full gap-4">
                <h1 className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-transparent bg-clip-text text-4xl font-semibold">
                    {cocktail.strDrink}
                </h1>
                <div className="flex flex-row justify-start w-full items-center gap-2">
                    <span
                        className="bg-neutral-900 rounded-full leading-4 text-sm px-3 py-1 border border-slate-700 text-center select-none">
                        {cocktail.strAlcoholic}
                    </span>
                    <span
                        className="bg-neutral-900 rounded-full leading-4 text-sm px-3 py-1 border border-slate-700 text-center select-none">
                        {cocktail.strCategory}
                    </span>
                    {isLoggedIn && (
                        <button className="" onClick={likeHandler}>
                            {
                                isLiked ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#dc2626" stroke="#222222"
                                         className="w-6 h-6 drop-shadow-xl">
                                        <path
                                            d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"/>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FCFCFC7F" viewBox="0 0 24 24" strokeWidth={1.5}
                                         stroke="#222222" className="w-6 h-6 drop-shadow-xl">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                                    </svg>
                                )
                            }
                        </button>
                    )}
                </div>
                <Divider/>
                <div className="flex flex-col justify-start items-start gap-6 w-full">
                    <h2 className="text-2xl font-semibold">Ingredients</h2>
                    {ingredientsRenderer()}
                </div>
                <Divider/>
                <div className="flex flex-col justify-start items-start gap-6 w-full">
                    <h2 className="text-2xl font-semibold">Instructions</h2>
                    <p className="text-lg">{cocktail.strInstructions}</p>
                </div>
            </div>
        </div>
    );
};

export default Cocktail;