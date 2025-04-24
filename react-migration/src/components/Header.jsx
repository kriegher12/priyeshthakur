import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Helper function to determine if a link is active
  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h1 className="text-3xl font-semibold tracking-wider">PRIYESH THAKUR</h1>
          <p className="text-sm tracking-widest text-gray-600">CINEMATOGRAPHER</p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-12 text-sm">
              <li>
                <Link
                  className={`nav-link font-medium ${isActive("/") ? "active" : ""}`}
                  to="/"
                >
                  NARRATIVE
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link font-medium ${isActive("/info") ? "active" : ""}`}
                  to="/info"
                >
                  INFO
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link font-medium ${isActive("/contact") ? "active" : ""}`}
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 