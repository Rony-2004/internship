// src/app/specialties/[specialtySlug]/page.tsx
import type { Metadata } from 'next';
import SpecialtyListingClient from '@/components/SpecialtyListingClient';

interface SpecialtyPageProps {
    params: {
        specialtySlug: string;
    };
}

// generateMetadata is already async, but let's handle param access carefully
export async function generateMetadata({ params }: SpecialtyPageProps): Promise<Metadata> {
  // Assign param to a variable first within this function too
  const slug = params.specialtySlug;
  const specialtyName = slug ? slug.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase()) : 'Doctors';

  return {
    title: `Find ${specialtyName} Doctors - Book Appointment Online | ApolloClone 24|7`,
    description: `View a list of expert ${specialtyName} doctors near you. Check fees, experience, qualifications, and book appointments easily on ApolloClone 24|7.`,
  };
}


// Make the default export page component async
export default async function SpecialtyPage({ params }: SpecialtyPageProps) {
    // Extract the slug into a variable first
    const currentSpecialtySlug = params.specialtySlug;

    // Return the client component (no await needed here as we aren't fetching)
    return (
        <SpecialtyListingClient specialtySlug={currentSpecialtySlug} />
    );
}