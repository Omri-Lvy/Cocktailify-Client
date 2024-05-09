import React, {useRef} from 'react';
import {navItems} from "../../../constants";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {Search} from 'lucide-react';

const NavItems = ({isOpen}) => {
    const location = useLocation();
    const searchInput = useRef(null)
    const navigate = useNavigate();

    const navItemsRenderer = () => (
        navItems.map((item, index) => (
            <li key={index}
                className={`${location.pathname === item.path ? "border-b" : ""} text-neutral-300 text-lg  hover:text-neutral-50 transition-colors duration-500`}>
                <Link to={item.path}>{item.name}</Link>
            </li>
        ))
    );

    const navButtonRenderer = () => (
        <>
            <button className="py-2 px-3 border rounded-md">
                Sign In
            </button>
            <button
                className="bg-gradient-to-r from-[#FDAC42] via-[#FF8800] to-[#E57A00] py-2 px-3 rounded-md drop-shadow-[0_4px_8px_rgba(255,136,0,0.4)]">
                Create Account
            </button>
        </>
    )

    const searchHandler = (e) => {
        e.preventDefault();
        const searchInputValue = searchInput.current.value;
        if (searchInputValue === "") return;
        navigate(`/search?q=${searchInputValue}`);
        searchInput.current.value = "";
        searchInput.current.blur();
    }

    const classes = isOpen ? "max-h-svh border-y py-8" : "max-h-0 lg:max-h-full lg:border-none lg:py-0";

    return (
        <div
            className={`${classes} transition-navbar duration-500 overflow-hidden lg:overflow-visible flex items-start lg:items-center gap-4 flex-col lg:flex-row lg:justify-between px-4 lg:p-0 w-full fixed lg:relative left-0 right-0 top-full bg-neutral-900 lg:bg-transparent lg:border-none border-slate-700 lg:mt-0`}>
            <div
                className="flex flex-col-reverse lg:flex-row gap-3 items-start lg:items-center justify-between flex-1 w-full">
                <ul className="flex gap-3 flex-col lg:flex-row w-max">
                    {navItemsRenderer()}
                </ul>
                <form method={"get"} action={"/search"}
                      className="flex gap-3 w-full lg:w-max min-w-xs justify-start lg:justify-end"
                      onSubmit={(e) => searchHandler(e)}>
                    <label
                        className="relative flex flex-row-reverse lg:flex-row justify-end overflow-hidden w-full lg:w-10 h-10 lg:max-w-xs p-0.5 transition-width duration-500 border border-slate-700 rounded-3xl group has-[input:focus]:w-full cursor-pointer">
                        <button aria-label="submit search"
                                className="bg-gradient-to-r lg:bg-none group-has-[input:focus]:bg-gradient-to-r from-[#FDAC42] via-[#FF8800] to-[#E57A00] size-8 drop-shadow-[0_4px_8px_rgba(255,136,0,0.4)] rounded-full flex items-center justify-center -z-10 focus:z-0 translate-x-[-2.5%] translate-y-[2.5%]">
                            <Search/>
                        </button>
                        <input type="text" placeholder="Search for a cocktail"
                               className="leading-9 lg:absolute top-0 left-0 bottom-0 flex-grow cursor-pointer focus:cursor-default w-full max-w-[calc(100%-32px)] px-3 py-0 transition-width duration-300 bg-transparent text-neutral-300 focus:outline-none focus:min-w-12"
                               ref={searchInput}/>
                    </label>
                </form>
            </div>
            <li className="flex flex-col lg:flex-row gap-3 items-start">
                {navButtonRenderer()}
            </li>
        </div>
    );
};

export default NavItems;