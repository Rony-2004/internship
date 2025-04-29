
'use client'; 

import React, { useState, useCallback } from 'react';
import { FilterState } from '@/types';

interface FiltersProps {
    initialFilters: FilterState;
    onFilterChange: (newFilters: FilterState) => void;
   
}

const Filters: React.FC<FiltersProps> = ({ initialFilters, onFilterChange }) => {
    
    const [localFilters, setLocalFilters] = useState<FilterState>(initialFilters);

    const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        const newGender = checked ? value : undefined; // Allow deselecting
        const updatedFilters = { ...localFilters, gender: newGender };
        setLocalFilters(updatedFilters);
        onFilterChange(updatedFilters); 
    };

    const handleMaxFeeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value ? parseFloat(e.target.value) : undefined;
         const updatedFilters = { ...localFilters, maxFee: value };
        setLocalFilters(updatedFilters);
        
         onFilterChange(updatedFilters);
    };

    const handleReset = () => {
         const resetFilters: FilterState = { /* define default/empty state */ };
         setLocalFilters(resetFilters);
         onFilterChange(resetFilters);
    }

    return (
        <aside className="w-full md:w-1/4 lg:w-1/5 p-4 border rounded-lg shadow-sm bg-white h-fit sticky top-20">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button onClick={handleReset} className="text-sm text-blue-500 hover:underline">Reset</button>
            </div>

            <div className="mb-4">
                <h3 className="font-medium mb-2">Gender</h3>
                <label className="flex items-center space-x-2">
                    <input type="radio" name="gender" value="Male" checked={localFilters.gender === 'Male'} onChange={handleGenderChange} />
                    <span>Male</span>
                </label>
                <label className="flex items-center space-x-2">
                    <input type="radio" name="gender" value="Female" checked={localFilters.gender === 'Female'} onChange={handleGenderChange} />
                    <span>Female</span>
                </label>
                
            </div>

         
             <div className="mb-4">
                <label htmlFor="maxFee" className="block font-medium mb-1">Max Consultation Fee</label>
                <input
                    type="range" 
                    id="maxFee"
                    min="0"
                    max="5000" 
                    step="100"
                    value={localFilters.maxFee ?? ''}
                    onChange={handleMaxFeeChange}
                    className="w-full"
                />
                <span className="text-sm text-gray-600">Up to ₹{localFilters.maxFee ?? 'Any'}</span>
             </div>

            
        </aside>
    );
};

export default Filters;