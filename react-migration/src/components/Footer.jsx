import React, { useEffect, useState } from "react";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <footer className="bg-dark text-white py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.behance.net/Priyesh96"
              target="_blank"
              rel="noopener noreferrer" 
              className="social-icon bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-all duration-300"
            >
              <i className="fab fa-behance text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/priyeshcinematics/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-all duration-300"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/priyesh-thakur-8170a6101/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-all duration-300"
            >
              <i className="fab fa-linkedin text-xl"></i>
            </a>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; {currentYear} Priyesh Thakur. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 