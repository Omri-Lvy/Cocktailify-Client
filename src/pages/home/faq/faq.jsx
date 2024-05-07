import React, {useState} from 'react';
import {faq} from "../../../constants";
import {motion} from "framer-motion";
import {ChevronUp} from 'lucide-react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(Array(faq.length).fill(false));

    const faqOpenHandler = (index) => {
        setActiveIndex(currentActiveIndex => {
            const newActiveIndex = [...currentActiveIndex]; // Copy the current state
            newActiveIndex[index] = !newActiveIndex[index]; // Toggle the state at the index
            return newActiveIndex; // Return the updated state
        });
    }

    const faqRender = () => (
        faq.map((item, index) => (
            <motion.div key={index} className="w-full lg:w-11/12 cursor-pointer max-w-7xl mx-auto"
                        animate={activeIndex[index] ? "open" : "close"}
                        initial={false} onClick={() => faqOpenHandler(index)}>
                <div className="p-6 bg-neutral-900 rounded-lg flex flex-col">
                    <div className="flex items-center justify-between">
                        <h6 className="text-text-lg font-semibold text-neutral-200">{item.question}</h6>
                        <motion.span
                            variants={{
                                open: {transform: 'rotate(-0deg)'},
                                close: {transform: 'rotate(-180deg)'}
                            }}
                            transition={{duration: 0.3}}
                        >
                            <ChevronUp/>
                        </motion.span>
                    </div>
                    <p className={`text-neutral-300 max-h-0 overflow-hidden transition-navbar duration-400 ${activeIndex[index] ? "max-h-screen pt-4" : ""}`}>{item.answer}</p>
                </div>
            </motion.div>
        ))
    )

    return (
        <div className="relative mt-20">
            <div className="text-center">
                <span
                    className="bg-neutral-900 text-[#FF8800] rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                    FAQs
                </span>
                <h2 className="text-xl sm:text-4xl lg:text-5xl mt-2.5 lg:mt-5 tracking-wide">
                    Everything you need to know about {" "}
                    <span
                        className="bg-gradient-to-r from-[#E57A00] via-[#FF8800] to-[#FDAC42] text-transparent bg-clip-text">
                        the product
                    </span>
                </h2>
            </div>
            <div className="flex flex-wrap mt-10 lg:mt-20 gap-3 justify-center items-center px-4">
                {faqRender()}
            </div>
        </div>
    );
};

export default Faq;