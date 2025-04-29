// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ApolloClone 24|7
        </Link>

        {/* Navigation Links (Static) */}
        <nav className="hidden md:flex space-x-6">
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Doctors</span>
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Pharmacy</span>
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Lab Tests</span>
          <span className="text-gray-600 hover:text-blue-500 cursor-pointer">Health Records</span>
        </nav>

        {/* Right Side Buttons (Static) */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-500">Location</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login / Signup</button>
        </div>
      </div>
    </header>
  );
};

export default Header;