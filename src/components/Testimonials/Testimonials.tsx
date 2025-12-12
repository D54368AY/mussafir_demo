"use client";

import React, { useEffect, useRef, useState } from "react";
import "./testimonials.css";
import { TestimonialsProps } from "./Testimonials.types";

export const Testimonials: React.FC<TestimonialsProps> = ({
  testimonials,
  title = "Testimonials",
  columns = 3,
}) => {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-3",
    4: "grid-cols-4",
  }[columns];

  const [isCarousel, setIsCarousel] = useState(false);
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsCarousel(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    // start auto-rotate only when carousel (mobile) and there's more than 1 testimonial
    if (!isCarousel || testimonials.length <= 1) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrent(0);
      return;
    }

    intervalRef.current = window.setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 2000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isCarousel, testimonials.length]);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {title && <h2 className="testimonials-title">{title}</h2>}

        <div className={`testimonials-viewport ${isCarousel ? "carousel" : ""}`}>
        <div
          className={`testimonials-grid ${gridColsClass} ${isCarousel ? "carousel" : ""}`}
          style={
            isCarousel
              ? { transform: `translateX(-${current * 100}%)` }
              : {}
          }
        >
          {testimonials.map((t, idx) => (
            <article
              key={t.id ?? idx}
              className={`testimonial-card ${isCarousel ? "carousel" : ""}`}
            >
              <p className="testimonial-quote">{t.quote}</p>

              <div className="testimonial-footer">
                <div className="testimonial-stars" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className={`testimonial-star ${
                        i < (t.rating ?? 5) ? "filled" : "empty"
                      }`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-author">{t.author}</p>
              </div>
            </article>
          ))}
        </div>
        </div>
        {isCarousel && testimonials.length > 1 && (
          <div className="testimonials-indicators">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`testimonial-indicator ${current === idx ? "active" : ""}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
