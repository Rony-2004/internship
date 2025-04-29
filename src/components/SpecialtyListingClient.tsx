// src/components/SpecialtyListingClient.tsx
'use client'; // Mark this as a client component

import { useState, useEffect, useCallback } from 'react';
// Removed useParams, as specialtySlug will come via props
// import { useParams } from 'next/navigation';

import Filters from '@/components/Filters';
import DoctorCard from '@/components/DoctorCard';
import Pagination from '@/components/Pagination';
import { fetchDoctors } from '@/lib/api';
import { Doctor, PaginationInfo, FilterState } from '@/types';

// Define initial state values (can stay here)
const initialFilters: FilterState = {
    // Set default filter values if needed
};
const initialPagination: PaginationInfo = {
    currentPage: 1,
    limit: 10,
    totalItems: 0,
    totalPages: 1,
};

interface SpecialtyListingClientProps {
    specialtySlug: string; // Accept specialtySlug as a prop
}

// Renamed function, accepts props
export default function SpecialtyListingClient({ specialtySlug }: SpecialtyListingClientProps) {
    // Removed params = useParams(); specialtySlug now comes from props

    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [pagination, setPagination] = useState<PaginationInfo>(initialPagination);
    const [filters, setFilters] = useState<FilterState>(initialFilters);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const specialtyName = specialtySlug ? specialtySlug.replace(/-/g, ' ') : 'Doctors';

    // loadDoctors function remains largely the same, but uses the prop specialtySlug
    const loadDoctors = useCallback(async (page: number = pagination.currentPage, currentFilters: FilterState = filters) => {
        if (!specialtySlug) return;

        setIsLoading(true);
        setError(null);
        console.log(`Workspaceing page ${page} for ${specialtySlug} with filters:`, currentFilters);

        try {
            // fetchDoctors now uses the prop specialtySlug
            const response = await fetchDoctors(specialtySlug, page, pagination.limit, currentFilters);
            setDoctors(response.data);
            setPagination(response.pagination);
        } catch (err) {
            console.error("Error in loadDoctors:", err);
            setError('Failed to load doctors. Please try again later.');
            setDoctors([]);
            setPagination(initialPagination);
        } finally {
            setIsLoading(false);
        }
    }, [specialtySlug, pagination.limit, pagination.currentPage, filters]); // specialtySlug is now a dependency from props

    // useEffect remains the same, but its dependency `loadDoctors` now depends on the prop specialtySlug
    useEffect(() => {
        loadDoctors(pagination.currentPage, filters);
    }, [loadDoctors, pagination.currentPage, filters]); // Simplified deps based on what loadDoctors depends on internally + page/filters


    const handleFilterChange = (newFilters: FilterState) => {
        setFilters(newFilters);
        setPagination(prev => ({ ...prev, currentPage: 1 }));
    };

    const handlePageChange = (newPage: number) => {
        setPagination(prev => ({ ...prev, currentPage: newPage }));
    };

    // The return JSX remains exactly the same as before
    return (
        <main className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold capitalize">{specialtyName}</h1>
                <p className="text-gray-600">Showing {pagination.totalItems} doctors</p>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                <Filters initialFilters={filters} onFilterChange={handleFilterChange} />

                <div className="w-full md:w-3/4 lg:w-4/5">
                    {isLoading && (
                        <div className="text-center py-10"><p>Loading doctors...</p></div>
                    )}
                    {error && (
                        <div className="text-center py-10 text-red-500"><p>{error}</p></div>
                    )}
                    {!isLoading && !error && doctors.length === 0 && (
                         <div className="text-center py-10 text-gray-500"><p>No doctors found matching your criteria.</p></div>
                    )}
                    {!isLoading && !error && doctors.length > 0 && (
                        <div>
                            {doctors.map((doctor) => (
                                <DoctorCard key={doctor.id} doctor={doctor} />
                            ))}
                            <Pagination pagination={pagination} onPageChange={handlePageChange} />
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
