'use client';

import React, { useState, useEffect } from 'react';
import { TopDestinationsProps } from '@/components/TopDestinations/types/destination.types';
import { DestinationCard } from './DestinationCard';

export const TopDestinations: React.FC<TopDestinationsProps> = ({
  destinations,
  title = 'Top destinations',
  showViewAll = true,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // lg screens and above: 4 cards
        setItemsPerPage(4);
      } else if (width >= 640) {
        // sm screens: 2 cards
        setItemsPerPage(2);
      } else {
        // mobile: 1 card
        setItemsPerPage(1);
      }
    };

    // Set initial value
    updateItemsPerPage();

    // Update on resize
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(destinations.length / itemsPerPage);

  const visibleDestinations = destinations.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(totalPages - 1, prev + 1));
  };

  // Reset to first page when itemsPerPage changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  return (
    <section className={`py-10 px-5 max-w-7xl mx-auto ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
        {showViewAll && (
          <a
            href="#"
            className="text-base font-medium text-blue-600 hover:text-blue-700 hover:underline transition-colors"
          >
            View all
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6">
        {visibleDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-end gap-2 mt-5">
          <button
            className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-lg bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous destinations"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="flex items-center justify-center w-9 h-9 border border-gray-300 rounded-lg bg-white text-gray-500 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={currentIndex === totalPages - 1}
            aria-label="Next destinations"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 4L10 8L6 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

