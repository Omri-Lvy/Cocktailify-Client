import React, {useEffect, useState} from 'react';
import Card from "./card";
import {Link, useNavigate} from "react-router-dom";
import {useIsLoggedIn} from "../../context/is-loggedin-context";
import {fetcher} from "../../utils/fetch";

const CocktailCard = ({cocktail}) => {
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();
    const cocktailCategory = cocktail.strCategory === 'Other / Unknown' ? 'General' : cocktail.strCategory;
    const categoryLink = cocktailCategory?.toLowerCase().replaceAll("/", "%2F") || "";
    const {isLoggedIn, favorites, userID, setFavorites} = useIsLoggedIn();

    useEffect(() => {
        const isLikedResolver = () => {
            if (!isLoggedIn) return;
            return favorites.find(c => c.idDrink === cocktail.idDrink)
        }

        setIsLiked(isLikedResolver());
    }, [favorites, isLoggedIn, cocktail]);

    const cardClickHandler = (e) => {
        e.stopPropagation();
        if (e.target.tagName === "A") return;
        navigate(`/cocktail/${cocktail.strDrink}`);
    }

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

    return (
        <div onClick={cardClickHandler}
             className="relative flex flex-col overflow-hidden items-center transition-opacity duration-1000 delay-500 rounded-lg shadow-2xl justify-center max-w-72 gap-4 border border-slate-800 mx-auto">
            <Card className="w-full h-full cursor-pointer border-none rounded-none">
                <img className="w-full aspect-auto object-fill object-center"
                     src={cocktail.strDrinkThumb} alt={cocktail.strDrink}/>
                <div
                    className="flex flex-col flex-wrap gap-3 items-center justify-center py-4 px-2">
                    {cocktailCategory && <Link to={`/category/${categoryLink}`}
                                               className="bg-neutral-900 text-[#FF8800] rounded-full leading-4 text-sm px-3 py-1 border border-slate-700 text-center">
                        {cocktailCategory}
                    </Link>}
                    <h3 className="text-lg font-bold text-center w-full">{cocktail.strDrink}</h3>
                </div>
            </Card>
            {isLoggedIn && (
                <button className="absolute top-2 right-2" onClick={likeHandler}>
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
    );
};

export default CocktailCard;