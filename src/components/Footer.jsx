import React from "react";
import "../App.css";


const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6 font-poppins">
      <div className="flex items-center justify-between w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="black">&copy; 2025 Catur Putra R.</span>
        <span className="black">Made with <span className="text-red-500">❤️</span> and Art</span>
      </div>
    </footer>
  );
};

export default Footer;
