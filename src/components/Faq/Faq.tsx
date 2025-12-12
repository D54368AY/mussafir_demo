"use client";

import React, { useState } from "react";
import "./faq.css";
import { FaqProps } from "./Faq.types";

export const Faq: React.FC<FaqProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<Array<string | number>>([]);
  // initialize to false so server and initial client render match (avoids hydration mismatch)
  const [isMobile, setIsMobile] = useState<boolean>(false);

  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 640);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggle = (id: string | number) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <section className="faq-section" aria-label="Frequently asked questions">
      <div className="faq-container">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-list">
        {items.map((it, idx) => {
          const id = it.id ?? idx;
          const isOpen = openIds.includes(id);
          return (
            <div key={id} className="faq-item">
              <div
                className="faq-row"
                onClick={(e) => {
                  // prevent toggling when the toggle button itself was clicked
                  if ((e.target as HTMLElement).closest("button")) return;
                  toggle(id);
                }}
              >
                <p
                  className="faq-question"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(id);
                    }
                  }}
                >
                  {it.question}
                </p>
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-${id}`}
                  className="faq-toggle"
                  onClick={() => toggle(id)}
                >
                  <svg
                    className={`faq-chevron ${isOpen ? "open" : ""}`}
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M6 8l4 4 4-4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div
                id={`faq-${id}`}
                className={`faq-answer ${isOpen ? "open" : ""} ${
                  isMobile ? "mobile-hidden" : ""
                }`}
              >
                <p className="faq-answer-text">{it.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Mobile drawer/backdrop */}
      {isMobile && openIds.length > 0
        ? (() => {
            const activeId = openIds[0];
            const activeItem = items.find(
              (it, idx) => (it.id ?? idx) === activeId
            );
            if (!activeItem) return null;
            return (
              <>
                <div
                  className="faq-backdrop"
                  onClick={() => setOpenIds([])}
                />
                <div
                  className="faq-drawer"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="faq-drawer-title"
                >
                  <div className="faq-drawer-header">
                    <h3
                      id="faq-drawer-title"
                      className="faq-drawer-title"
                    >
                      {activeItem.question}
                    </h3>
                    <button
                      className="faq-drawer-close"
                      onClick={() => setOpenIds([])}
                      aria-label="Close FAQ"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="faq-drawer-body">
                    <p className="faq-drawer-answer">{activeItem.answer}</p>
                  </div>
                </div>
              </>
            );
          })()
        : null}
      </div>
    </section>
  );
};
