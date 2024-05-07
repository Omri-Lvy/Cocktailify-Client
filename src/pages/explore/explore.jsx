import React, {useEffect, useRef, useState} from 'react';
import {fetcher} from "../../utils/fetch";
import CocktailCard from "../../components/ui/cocktail-card";
import Loader from "../../components/ui/loader";

const Explore = () => {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const loadMoreRef = useRef(null);
    const observer = useRef(null);

    const getCocktails = async (page) => {
        const res = await fetcher("/explore?page=" + page);
        setCocktails([...cocktails, ...res]);
        setLoading(false);
    };

    useEffect(() => {
        if (loading) return;
        setLoading(true);
        getCocktails(page);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        const callback = (entries) => {
            if (entries[0].isIntersecting && !loading) {
                setPage((prevPage) => prevPage + 1); // Increment page to load new batch
            }
        };

        observer.current = new IntersectionObserver(callback, {threshold: 0.01, rootMargin: "960px 0px 0px 0px"});
        const currentLoadMoreRef = loadMoreRef.current;

        if (currentLoadMoreRef) {
            observer.current.observe(currentLoadMoreRef);
        }

        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, [loading]);


    const cocktailListRender = () => (
        cocktails.map((cocktail, index) => (
            <CocktailCard key={index} cocktail={cocktail}/>
        ))
    )

    return (
        <div className="relative mt-4 max-w-7xl mx-auto">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl mt-2.5 lg:mt-5 tracking-wide font-semibold">
                    Discover Your {" "}
                    <span
                        className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-transparent bg-clip-text">
                        Next Favorite
                    </span>
                </h1>
                <h6 className="text-lg sm:text-xl lg:text-2xl mt-2.5 lg:mt-5 tracking-wide">
                    Dive into a world of flavors and find your new signature cocktail.
                </h6>
            </div>
            <div className="block">
                <div
                    className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-10 lg:mt-20 gap-6 px-4">
                    {cocktailListRender()}
                </div>
                {loading && <Loader/>}
                <div ref={loadMoreRef}/>
            </div>
        </div>
    );
};

export default Explore;