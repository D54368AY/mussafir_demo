"use client";

import { useState } from "react";

export default function BannerCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <div className="w-full">
            {/* Carousel box */}
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            className="w-full shrink-0 rounded-[18px]"
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="mt-4 px-4 flex justify-between items-center">

                {/* Dots */}
                <div className="flex gap-2">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full cursor-pointer transition 
                                ${i === index ? "bg-blue-500 scale-110" : "bg-gray-300"}
                            `}
                        ></span>
                    ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-3">
                    <button
                        onClick={prev}
                        className="w-8 h-8 rounded-full bg-white border border-gray-300 shadow flex items-center justify-center"
                    >
                        <img src="/chevron-up (1).svg" alt="prev" className="w-4" />
                    </button>

                    <button
                        onClick={next}
                        className="w-8 h-8 rounded-full bg-white border border-gray-300 shadow flex items-center justify-center"
                    >
                        <img src="/chevron-up.svg" alt="next" className="w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
