import React from 'react';
import {Link} from "react-router-dom";
import video1 from "../../../assets/videos/video1.mp4";
import video2 from "../../../assets/videos/video2.mp4";
import {useSignupLoginModal} from "../../../context/signup-login-modal-context";

const Hero = () => {
    const {openModal,setActiveTab} = useSignupLoginModal();

    const startForFreeClickHandler = (tab) => {
        openModal();
        setActiveTab(tab)
    }

    return (
        <div className="flex flex-col items-center pt-6 lg:pt-20 relative max-w-7xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Crafted cocktail recipes {" "}
                <span
                    className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-transparent bg-clip-text">
                    Tailored for developers
                </span>
            </h1>
            <p className="text-neutral-200 text-lg mt-10 text-center max-w-4xl px-4">
                Experience the ultimate fusion of flavor and innovation with our exclusive collection of Crafted
                Cocktail Recipes Tailored for Developers. Elevate your mixology game and ignite your taste buds with
                tantalizing concoctions that will leave you craving for more.
            </p>
            <div className="flex flex-col sm:flex-row justify-center my-10 gap-4">
                <button
                    className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-white py-3 px-8 rounded-md text-lg drop-shadow-[0_4px_8px_rgba(255,136,0,0.4)] transition-all duration-300 hover:drop-shadow-[0_4px_12px_rgba(255,136,0,0.4)]"
                    onClick={() => startForFreeClickHandler("signup")}
                >
                    Start for free
                </button>
                <Link to="/explore"
                      className="text-white py-3 px-8 rounded-md text-lg border border-white transition-shadow duration-300 hover:shadow-lg hover:shadow-neutral-800">
                    Explore All Recipes
                </Link>
            </div>
            <div className="flex flex-col md:flex-row mt-10 justify-center items-center">
                <video autoPlay loop muted
                       className="rounded-lg w-10/12 sm:w-8/12 md:w-2/5 border border-[#E57A00] shadow shadow-[#FDAC42]/[0.2] mx-2 my-4">
                    <source src={video1} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted
                       className="rounded-lg w-10/12 sm:w-8/12 md:w-2/5 border border-[#E57A00] shadow shadow-[#FDAC42]/[0.2] mx-2 my-4">
                    <source src={video2} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default Hero;