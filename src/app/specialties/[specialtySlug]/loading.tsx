// src/app/specialties/[specialtySlug]/loading.tsx
export default function LoadingSpecialtyPage() {
    // You can create a skeleton loader mimicking the page layout
    return (
      <div className="container mx-auto px-4 py-8 animate-pulse">
         <div className="mb-6 h-8 bg-gray-200 rounded w-1/3"></div> {/* Title Skeleton */}
         <div className="flex flex-col md:flex-row gap-6">
             {/* Filter Skeleton */}
             <div className="w-full md:w-1/4 lg:w-1/5 p-4 border rounded-lg shadow-sm bg-white">
                 <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                 <div className="space-y-3">
                     <div className="h-4 bg-gray-200 rounded w-full"></div>
                     <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                     <div className="h-4 bg-gray-200 rounded w-full"></div>
                     <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                 </div>
             </div>
             {/* Doctor Card Skeletons */}
              <div className="w-full md:w-3/4 lg:w-4/5 space-y-4">
                 {[...Array(5)].map((_, i) => ( // Show 5 skeleton cards
                   <div key={i} className="border rounded-lg p-4 flex gap-4 bg-white">
                     <div className="rounded-full bg-gray-200 h-24 w-24 flex-shrink-0"></div>
                     <div className="flex-grow space-y-3">
                         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                         <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                     </div>
                     <div className="flex-shrink-0 w-1/4 space-y-3">
                          <div className="h-4 bg-gray-200 rounded w-full"></div>
                          <div className="h-8 bg-gray-200 rounded w-full"></div>
                          <div className="h-8 bg-gray-200 rounded w-full"></div>
                     </div>
                   </div>
                 ))}
             </div>
         </div>
      </div>
    );
  }