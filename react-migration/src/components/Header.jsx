import React, { useMemo, memo } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = memo(({ to, isActive, children }) => (
  <li>
    <Link
      className={`nav-link font-medium ${isActive ? "active" : ""}`}
      to={to}
    >
      {children}
    </Link>
  </li>
));

NavLink.displayName = 'NavLink';

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  // Links data
  const navLinks = useMemo(() => [
    { to: "/", label: "NARRATIVE" },
    { to: "/info", label: "INFO" },
    { to: "/contact", label: "CONTACT" }
  ], []);

  // Helper function to determine if a link is active
  const isActive = useMemo(() => (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  }, [pathname]);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          <h1 className="text-3xl font-semibold tracking-wider">PRIYESH THAKUR</h1>
          <p className="text-sm tracking-widest text-gray-600">CINEMATOGRAPHER</p>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-12 text-sm">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.to} 
                  to={link.to} 
                  isActive={isActive(link.to)}
                >
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default memo(Header); 