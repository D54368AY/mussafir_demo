"use client";

import { useState } from "react";
import "./bannerCarousel.css";

export default function BannerCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <div className="banner-wrapper">
            <div className="banner-carousel">
                <div
                    className="banner-track"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {images.map((img, i) => (
                        <img key={i} src={img} className="banner-slide" />
                    ))}
                </div>
            </div>

            <div className="banner-controls">
                <div className="banner-dots">
                    {images.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>

               
                <div className="banner-bottom-arrows">
                    <button className="bottom-arrow" onClick={prev}>
                        <img src="/chevron-up (1).svg" alt="prev" />
                    </button>                    
                    
                    <button className="bottom-arrow" onClick={next}>
                        <img src="/chevron-up.svg" alt="next" />
                    </button>
                </div>
            </div>
        </div>
    );
}
