"use client";

import { useState } from "react";
import { CarouselProps } from "./Carousel.types";
import "./carousel.css";

export default function Carousel({ items, visibleCount = 3 }: CarouselProps) {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
    const next = () => setIndex((i) => (i + 1) % items.length);

    // visible slices
    const getVisibleItems = () => {
        const arr = [];
        for (let i = -1; i <= 1; i++) {
            arr.push(items[(index + i + items.length) % items.length]);
        }
        return arr;
    };

    const visibleItems = getVisibleItems();

    const handleItemClick = (i: number) => {
        if (i === 0) {
            
            prev();
        } else if (i === 2) {
           
            next();
        }
       
    };


    return (
        
        <div className="carousel">

            <div className="carousel">
                <button className="carousel-arrow left" onClick={prev}>
                    <img src="/chevron-up (1).svg" alt="prev" />
                </button>

                <div className="carousel-track">
                    {visibleItems.map((item, i) => (
                        <div
                            key={i}
                            className={`carousel-item ${i === 1 ? "active" : "inactive"}`}
                            onClick={() => handleItemClick(i)}
                        >
                            {item}
                        </div>
                    ))}
                </div>

                <button className="carousel-arrow right" onClick={next}>
                    <img src="/chevron-up.svg" alt="next" />
                </button>
            </div>


          
        </div>
    );
}
