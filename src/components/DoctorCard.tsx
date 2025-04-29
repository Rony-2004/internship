// src/components/DoctorCard.tsx
import Image from 'next/image'; // Use Next.js Image for optimization
import { Doctor } from '@/types';
// Import date-fns function if you use it
// import { formatDistanceToNow } from 'date-fns'; 

interface DoctorCardProps {
    doctor: Doctor;
}

// Component definition remains the same
const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const qualifications = doctor.qualifications.join(', ');
  const languages = doctor.languagesSpoken.join(', ');

  return (
    // Your JSX starting with <article> seems correct syntactically
    <article className="border rounded-lg shadow-sm p-4 flex flex-col md:flex-row gap-4 bg-white mb-4">
      {/* Image Section */}
      <div className="flex-shrink-0 text-center md:text-left">
        <Image
          src={doctor.imageUrl || '/default-avatar.png'} // Provide a default avatar in public/
          alt={`Photo of Dr. ${doctor.name}`}
          width={100}
          height={100}
          className="rounded-full mx-auto md:mx-0"
          priority // Add priority if it's likely above the fold initially
        />
      </div>

      {/* Details Section */}
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-blue-700">Dr. {doctor.name}</h3>
        <p className="text-sm text-gray-600">{doctor.specialty}</p>
        <p className="text-sm text-gray-500">{doctor.experienceYears} years experience</p>
        <p className="text-sm text-gray-500">{qualifications}</p>
        <p className="text-sm text-gray-500">Speaks: {languages}</p>
        <p className="text-sm text-gray-500">Location: {doctor.location}</p>
      </div>

      {/* Action Section */}
      <div className="flex-shrink-0 flex flex-col items-center md:items-end justify-between pt-4 md:pt-0 border-t md:border-t-0 md:border-l mt-4 md:mt-0 md:pl-4">
        <div className="text-center md:text-right mb-2">
          <p className="font-semibold">₹ {doctor.consultationFee}</p>
          <p className="text-xs text-gray-500">Consultation Fee</p>
        </div>
        <div className='text-center md:text-right mb-2'>
             <p className="text-sm text-green-600 font-medium">Available Today</p> {/* Placeholder Logic */}
             <p className="text-xs text-gray-500">{doctor.availability.join(', ')}</p>
        </div>
        <button className="w-full md:w-auto bg-green-500 text-white px-4 py-2 rounded text-sm hover:bg-green-600 mb-2">
          Book Appointment
        </button>
         <button className="w-full md:w-auto border border-blue-500 text-blue-500 px-4 py-2 rounded text-sm hover:bg-blue-50">
          View Profile
        </button>
      </div>
    </article>
  );
};

// --- ADD THIS LINE ---
export default DoctorCard;
// --- END OF ADDED LINE ---