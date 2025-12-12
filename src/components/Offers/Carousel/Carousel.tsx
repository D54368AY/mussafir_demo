"use client";

import { useState } from "react";
import { CarouselProps } from "./Carousel.types";

export default function Carousel({ items, visibleCount = 3 }: CarouselProps) {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
    const next = () => setIndex((i) => (i + 1) % items.length);

    const getVisibleItems = () => {
        const arr = [];
        for (let i = -1; i <= 1; i++) {
            arr.push(items[(index + i + items.length) % items.length]);
        }
        return arr;
    };

    const visibleItems = getVisibleItems();

    const handleItemClick = (i: number) => {
        if (i === 0) prev();
        else if (i === 2) next();
    };

    return (
        <div className="flex items-center justify-center w-full mt-6">

            {/* Left Arrow */}
            <button
                className="w-10 h-10 flex items-center justify-center"
                onClick={prev}
            >
                <img src="/chevron-up (1).svg" className="w-10" alt="prev" />
            </button>

            {/* Track */}
            <div className="flex items-center justify-center gap-5">
                {visibleItems.map((item, i) => (
                    <div
                        key={i}
                        onClick={() => handleItemClick(i)}
                        className={`
                            transition-all duration-300 cursor-pointer
                            ${i === 1
                                ? "scale-115 opacity-100 z-10 blur-0"
                                : "scale-95 opacity-70 blur-[1px]"
                            }
                        `}
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                className="w-10 h-10 flex items-center justify-center"
                onClick={next}
            >
                <img src="/chevron-up.svg" className="w-10" alt="next" />
            </button>

        </div>
    );
}
