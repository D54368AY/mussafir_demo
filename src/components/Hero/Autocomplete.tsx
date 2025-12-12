"use client"

import React, { useState, useRef, useEffect } from "react";

const countries = [
  "India",
  "United Arab Emirates",
  "United Kingdom",
  "Australia",
  "Canada",
  "France",
  "Germany",
  "Singapore",
  "Japan",
  "China",
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Paris",
  "London",
  "New York",
];

export const Autocomplete = () => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [showDropdown, setShowDropdown] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handler = (event: any) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const filtered = countries.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: any) => {
    if (!showDropdown) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((prev) =>
        prev < filtered.length - 1 ? prev + 1 : prev
      );
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }

    if (e.key === "Enter") {
      if (activeIndex >= 0) {
        setQuery(filtered[activeIndex]);
        setShowDropdown(false);
      }
    }
  };

  return (
    <div
      ref={wrapperRef}
      className="relative w-full mt-5"
    >
      <input
        type="text"
        value={query}
        placeholder="Search by country or city"
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}
        onKeyDown={handleKeyDown}
        className="w-full h-[52px] px-4 border-2 border-[#f2f2f8] rounded-[14px] outline-none bg-white focus:border-blue-500 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)]"
      />

      <button className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-lg hover:bg-blue-50">
        <img src={"/search.svg"} alt="search" />
      </button>

      {showDropdown && filtered.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg max-h-60 overflow-auto z-50">
          {filtered.map((item, index) => (
            <li
              key={item}
              onClick={() => {
                setQuery(item);
                setShowDropdown(false);
              }}
              className={`px-4 py-2 cursor-pointer ${
                index === activeIndex ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {showDropdown && filtered.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-lg px-4 py-3 text-gray-500">
          No results found
        </div>
      )}
    </div>
  );
};
