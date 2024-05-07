import React from 'react';
import Card from "./card";
import {Link, useNavigate} from "react-router-dom";

const CocktailCard = ({cocktail}) => {
    const navigate = useNavigate();
    const cocktailCategory = cocktail.strCategory === 'Other / Unknown' ? 'General' : cocktail.strCategory;
    const categoryLink = cocktailCategory?.toLowerCase().replaceAll("/", "%2F") || "";

    const cardClickHandler = (e) => {
        e.stopPropagation();
        if (e.target.tagName === "A") return;
        navigate(`/cocktail/${cocktail.strDrink}`);
    }

    return (
        <div onClick={cardClickHandler} to={`/cocktail/${cocktail.strDrink}`}
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
        </div>
    );
};

export default CocktailCard;