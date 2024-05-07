import React, {useEffect, useState} from 'react';
import {fetcher} from "../../utils/fetch";
import {useLocation} from "react-router-dom";
import Loader from "../../components/ui/loader";
import CocktailCard from "../../components/ui/cocktail-card";

const DrinksByType = () => {
    const {pathname} = useLocation();
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCocktail = async () => {
            const res = await fetcher(pathname);
            setCocktails(res);
            setLoading(false);
        }

        setLoading(true);
        fetchCocktail();

    }, [pathname]);

    const cocktailListRender = () => (
        cocktails.map((cocktail, index) => (
            <CocktailCard key={index} cocktail={cocktail}/>
        ))
    )

    const title = pathname === "/alcoholic-drinks" ? "Alcoholic" : "Non-Alcoholic"
    const subtitle = pathname === "/alcoholic-drinks" ? "Explore Our Collection of Alcoholic Cocktails" : "Discover Delicious Non-Alcoholic Alternatives"

    return (
        <div className="relative mt-4 max-w-7xl mx-auto flex-1">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-2.5 lg:mt-5 tracking-wide font-semibold flex flex-wrap text-center justify-center items-center">
                    Discover Your Next Favorite {" "}
                    <span
                        className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-transparent bg-clip-text ">
                        {title} Drinks
                    </span>
                </h1>
                <h6 className="text-lg sm:text-xl lg:text-2xl mt-2.5 lg:mt-5 tracking-wide">
                    {subtitle}
                </h6>
            </div>
            <div className="block">
                <div
                    className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 lg:mt-20 gap-6 px-4">
                    {cocktailListRender()}
                </div>
                {loading && <Loader/>}
            </div>
        </div>
    );
};

export default DrinksByType;