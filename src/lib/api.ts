// src/lib/api.ts
import axios from 'axios'; 
import { DoctorApiResponse, FilterState } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchDoctors = async (
    specialty: string,
    page: number = 1,
    limit: number = 10,
    filters: FilterState = {}
): Promise<DoctorApiResponse> => {
    const params = new URLSearchParams({
        specialty: specialty, 
        page: page.toString(),
        limit: limit.toString(),
    });

    Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '' && !(Array.isArray(value) && value.length === 0)) {
           
            const paramValue = Array.isArray(value) ? value.join(',') : String(value);
            params.append(key, paramValue);
        }
    });

    try {
       
        const response = await fetch(`${API_BASE_URL}/doctors?${params.toString()}`);
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
        const data: DoctorApiResponse = await response.json();
        return data;


    } catch (error) {
        console.error("Failed to fetch doctors:", error);
       
        return { data: [], pagination: { currentPage: 1, limit: limit, totalItems: 0, totalPages: 0 } };
    }
};