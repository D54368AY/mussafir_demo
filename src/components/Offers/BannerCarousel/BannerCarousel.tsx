"use client";

import { useState } from "react";
import "./bannerCarousel.css";

export default function BannerCarousel({ images }: { images: string[] }) {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    return (
        <div className="banner-carousel">
            <button className="banner-arrow left" onClick={prev}>
                <img src="/left-arrow.svg" />
            </button>

            <img
                src={images[index]}
                className="banner-slide"
                alt="banner"
            />

            <button className="banner-arrow right" onClick={next}>
                <img src="/right-arrow.svg" />
            </button>
        </div>
    );
}
