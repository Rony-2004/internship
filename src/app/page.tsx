// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to ApolloClone 24|7
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Find the best doctors and book appointments easily.
        </p>
        <Link
          href="/specialties/general-physician" // Link to a default or example specialty
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded"
        >
          Find General Physicians
        </Link>
        {/* You could add more links to other specialties here later */}
      </div>
    </main>
  );
}