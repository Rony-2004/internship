// src/types/index.ts
export interface Doctor {
    id: string;
    name: string;
    specialty: string;
    experienceYears: number;
    qualifications: string[];
    consultationFee: number;
    location: string;
    availability: string[];
    imageUrl?: string | null; 
    about?: string | null;
    languagesSpoken: string[];
    consultationType: string[];
    gender?: string | null;
    createdAt: string; 
    updatedAt: string;
}

export interface PaginationInfo {
    currentPage: number;
    limit: number;
    totalItems: number;
    totalPages: number;
}

export interface DoctorApiResponse {
    data: Doctor[];
    pagination: PaginationInfo;
}

export interface FilterState {
    location?: string;
    gender?: string;
    minExperience?: number;
    maxFee?: number;
    language?: string[]; 
    consultationType?: string[];
    availability?: string[];
    
}