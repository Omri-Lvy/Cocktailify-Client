import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {fetcher} from "../../utils/fetch";
import Divider from "../../components/ui/Divider";

const Cocktail = () => {
    const {pathname} = useLocation();
    const [cocktail, setCocktail] = useState({});

    useEffect(() => {
        const fetchCocktail = async () => {
            const res = await fetcher(pathname);
            setCocktail(res);
        }

        fetchCocktail();
    }, [pathname]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        document.title = "Cocktailify - " + cocktail.strDrink || "Cocktail";
    }, [cocktail]);

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