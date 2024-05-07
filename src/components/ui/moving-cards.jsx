import React, {useCallback, useEffect, useRef, useState} from 'react';
import {cn} from "../../utils/cn.js";


const MovingCards = ({items, direction = "left", speed = "fast", pauseOnHover = true, className}) => {
    const [start, setStart] = useState(false);
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);

    const getDirection = useCallback(() => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    }, [direction]);

    const getSpeed = useCallback(() => {
        if (containerRef.current) {
            switch (speed) {
                case "fast":
                    containerRef.current.style.setProperty("--animation-duration", "60s");
                    break;
                case "normal":
                    containerRef.current.style.setProperty("--animation-duration", "120s");
                    break;
                default:
                    containerRef.current.style.setProperty("--animation-duration", "180s");
                    break;
            }
        }
    }, [speed]);

    const addAnimation = useCallback(() => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }, [getDirection, getSpeed]);

    useEffect(() => {
        addAnimation();
    }, [addAnimation]);


    const cardsRenderer = () => (
        items.map((item, index) => (
            <li key={index} className="w-[22rem] lg:w-[32rem] min-h-full">
                {item}
            </li>
        ))
    )

    return (
        <div ref={containerRef}
             className={cn("scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]", className)}>
            <ul ref={scrollerRef} className={cn(" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                start && "animate-scroll ",
                pauseOnHover && "hover:[animation-play-state:paused]")}>
                {cardsRenderer()}
            </ul>
        </div>
    );
};

export default MovingCards;