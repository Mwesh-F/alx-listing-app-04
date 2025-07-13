// components/layout/Header.tsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-xl font-bold text-blue-600">StayFinder</div>

      <nav className="flex space-x-4 mt-2 md:mt-0">
        <button className="text-gray-600 hover:text-blue-600">Rooms</button>
        <button className="text-gray-600 hover:text-blue-600">Mansions</button>
        <button className="text-gray-600 hover:text-blue-600">Countryside</button>
      </nav>

      <div className="flex space-x-2 mt-2 md:mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1"
        />
        <button className="text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Sign Up
        </button>
      </div>
    </header>
  );
};

export default Header;
