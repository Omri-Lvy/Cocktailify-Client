import React, {useEffect, useState} from 'react';
import {fetcher} from "../../utils/fetch";
import {useLocation} from "react-router-dom";
import Loader from "../../components/ui/loader";
import CocktailCard from "../../components/ui/cocktail-card";

const Category = () => {
    const {pathname} = useLocation();
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchCocktail = async () => {
            const requestPathname = pathname.replaceAll("%2F", "-").replaceAll("%20", "_");
            const res = await fetcher(requestPathname);
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

    const title = pathname.indexOf("general") > 0 ? "" : pathname.split("/")[2].replaceAll("%2F", "/").replaceAll("%20", " ")

    return (
        <div className="relative mt-4 max-w-7xl mx-auto flex-1">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-2.5 lg:mt-5 tracking-wide font-semibold flex flex-wrap text-center justify-center items-center gap-2">
                    Discover Your Next Favorite {" "}
                    <span
                        className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-transparent bg-clip-text capitalize">
                        {title}
                    </span>
                </h1>
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

export default Category;