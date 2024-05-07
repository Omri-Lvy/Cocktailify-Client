import React, {useEffect, useState} from 'react';
import {fetcher} from "../../utils/fetch";
import CocktailCard from "../../components/ui/cocktail-card";
import Loader from "../../components/ui/loader";
import {useLocation} from "react-router-dom";

const Explore = () => {
    const {search} = useLocation();
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);

    const query = new URLSearchParams(search).get("q");

    const getCocktails = async (query) => {
        const res = await fetcher("/search?q=" + query);
        setCocktails(res);
        setLoading(false);
    };

    useEffect(() => {
        setLoading(true);
        getCocktails(query);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);


    const cocktailListRender = () => (
        cocktails.map((cocktail, index) => (
            <CocktailCard key={index} cocktail={cocktail}/>
        ))
    )

    const cocktailsRender = () => {
        if (!loading && cocktails.length !== 0) {
            return (
                <div
                    className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 lg:mt-20 gap-6 px-4">
                    {!loading && cocktails.length !== 0 &&
                        cocktailListRender()}
                </div>
            )
        } else if (!loading && cocktails.length === 0) {
            return (
                <div className="w-full h-48 flex justify-center items-center px-4 md:px-8">
                    <h4 className="text-3xl sm:text-4xl lg:text-5xl tracking-wide font-semibold  text-neutral-400 opacity-60">
                        No Cocktails Found
                    </h4>
                </div>
            )
        }
    }

    return (
        <div className="relative mt-4 max-w-7xl mx-auto flex-1">
            <div className="w-dvw">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-2.5 lg:mt-5 tracking-wide font-semibold">
                    Discover Your {" "}
                    <span
                        className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-transparent bg-clip-text ">
                        Perfect Drink
                    </span>
                </h1>
                <h6 className="text-lg sm:text-xl lg:text-2xl mt-2.5 lg:mt-5 tracking-wide">
                    Showing results for: {query}
                </h6>
            </div>
            <div className="block">
                {cocktailsRender()}
                {loading && <Loader/>}
            </div>
        </div>
    );
};

export default Explore;