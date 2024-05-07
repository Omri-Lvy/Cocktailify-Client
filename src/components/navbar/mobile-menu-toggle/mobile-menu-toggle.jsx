import React from 'react';
import {motion} from "framer-motion";


const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="#F9FAFB"
        strokeLinecap="round"
        {...props}
    />
)

const MobileMenuToggle = ({toggleMobileDrawer}) => {
    return (
        <button onClick={toggleMobileDrawer} className="text-white lg:hidden">
            <svg width="23" height="23" viewBox="0 0 23 23">
                <Path
                    variants={{
                        open: {d: "M 3 16.5 L 17 2.5"},
                        close: {d: "M 2 2.5 L 20 2.5"}
                    }}
                />
                <Path
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        open: {opacity: 0},
                        close: {opacity: 1}
                    }}
                    transition={{duration: 0.1}}
                />
                <Path
                    variants={{
                        open: {d: "M 3 2.5 L 17 16.346"},
                        close: {d: "M 2 16.346 L 20 16.346"}
                    }}
                />
            </svg>
        </button>
    );
};

export default MobileMenuToggle;
