import React from 'react';
import {features} from "../../../constants";
import Card from "../../../components/ui/card";

const Features = () => {

    const featuresRenderer = () => (
        features.map((feature, index) => (
            <Card key={index}
                  className="p-2 w-[22rem] h-52 cursor-default">
                <div className="flex gap-2">
                    <div
                        className="flex mx-2 h-10 w-10 p-2 text-[#B86301] transition-colors group-hover:text-[#FDAC42] items-center justify-center rounded-full">
                        {feature.icon}
                    </div>
                    <div>
                        <h5 className="mt-1 mb-6 text-xl text-neutral-300 transition-colors group-hover:text-neutral-50">
                            {feature.text}
                        </h5>
                        <p className="text-md p-2 text-neutral-500 transition-colors group-hover:text-neutral-300">{feature.description}</p>
                    </div>
                </div>
            </Card>
        ))
    )

    return (
        <div className="relative mt-20 max-w-7xl mx-auto">
            <div className="text-center">
                <span
                    className="bg-neutral-900 text-[#FF8800] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    features
                </span>
                <h2 className="text-xl sm:text-4xl lg:text-5xl mt-2.5 lg:mt-5 tracking-wide">
                    Easily find your {" "}
                    <span
                        className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-transparent bg-clip-text">
                        favorite drinks
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20 gap-6 justify-center items-center px-4">
                {featuresRenderer()}
            </div>

        </div>
    );
};

export default Features;