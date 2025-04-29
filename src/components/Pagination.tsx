// src/components/Pagination.tsx
'use client';

import React from 'react';
import { PaginationInfo } from '@/types';

interface PaginationProps {
    pagination: PaginationInfo;
    onPageChange: (newPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pagination, onPageChange }) => {
    const { currentPage, totalPages } = pagination;

    if (totalPages <= 1) return null; // Don't render if only one page

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center items-center space-x-2 my-8">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>

            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={`px-3 py-1 border rounded ${
                        currentPage === number
                            ? 'bg-blue-500 text-white border-blue-500'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    {number}
                </button>
            ))}

            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </nav>
    );
};

export default Pagination;