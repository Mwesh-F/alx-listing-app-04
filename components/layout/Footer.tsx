// components/layout/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-4 mt-8 text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} StayFinder. All rights reserved.
    </footer>
  );
};

export default Footer;
