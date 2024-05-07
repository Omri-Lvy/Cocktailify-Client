import React from 'react';
import {cn} from "../../utils/cn.js";

const Card = ({children, className}) => {
    return (
        <div
            className={cn("relative group cursor-default w-full bg-neutral-900 rounded-xl shadow border border-neutral-800", className)}>
            {children}
            <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-[#FF8800] to-transparent transition-height duration-200 h-[2px] w-full blur-sm group-hover:h-[4px]"/>
            <div
                className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-transparent via-[#FF8800] to-transparent h-px w-full"/>
            <div
                className="absolute inset-x-1/4 bottom-0 bg-gradient-to-r from-transparent via-[#FDAC42] to-transparent transition-height duration-200 h-[5px] w-1/2 blur-sm group-hover:h-[10px]"/>
            <div
                className="absolute inset-x-1/4 bottom-0 bg-gradient-to-r from-transparent via-[#FDAC42] to-transparent h-px w-1/2"/>
        </div>
    );
};

export default Card;