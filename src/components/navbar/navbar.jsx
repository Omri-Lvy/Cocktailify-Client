import React, {useEffect} from 'react';
import logo from '../../assets/images/logo.svg';
import {motion, useCycle} from "framer-motion";
import {Link, useLocation} from "react-router-dom";
import MobileMenuToggle from "./mobile-menu-toggle/mobile-menu-toggle";
import NavItems from "./nav-itmes/nav-items";

const Navbar = () => {
    const [mobileDrawer, toggleMobileDrawer] = useCycle(false, true);
    const location = useLocation();

    useEffect(() => {
        if (mobileDrawer) {
            toggleMobileDrawer();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <nav
            className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-slate-700/80 flex justify-center w-full bg-[#141414]/[0.6]">
            <div
                className="lg:container px-4 mx-auto relative text-sm flex flex-row items-center lg:gap-8 justify-between w-full">
                <Link to="/" className="flex items-center flex-shrink-0">
                    <img className="w-12 h-12" src={logo} alt="Cocktailify logo"/>
                    <span className="text-2xl tracking-tight">Cocktailify</span>
                </Link>
                <div
                    className="group flex flex-col-reverse lg:flex-row items-end lg:items-start w-full">
                    <NavItems isOpen={mobileDrawer}/>
                    <motion.div className="flex flex-col justify-end items-center"
                                animate={mobileDrawer ? "open" : "close"}
                                initial={false}>
                        <MobileMenuToggle toggleMobileDrawer={toggleMobileDrawer}/>
                    </motion.div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
