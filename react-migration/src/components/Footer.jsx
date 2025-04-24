import React, { useState, memo } from "react";

const SocialLink = memo(({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer" 
    className="social-icon bg-gray-800 hover:bg-gray-700 rounded-full p-3 transition-all duration-300"
  >
    <i className={`${icon} text-xl`}></i>
  </a>
));

SocialLink.displayName = 'SocialLink';

const Footer = () => {
  const [currentYear] = useState(() => new Date().getFullYear());
  
  const socialLinks = [
    { 
      href: "https://www.behance.net/Priyesh96", 
      icon: "fab fa-behance"
    },
    { 
      href: "https://www.instagram.com/priyeshcinematics/", 
      icon: "fab fa-instagram"
    },
    { 
      href: "https://www.linkedin.com/in/priyesh-thakur-8170a6101/", 
      icon: "fab fa-linkedin"
    }
  ];

  return (
    <footer className="bg-dark text-white py-10 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <SocialLink 
                key={index} 
                href={link.href} 
                icon={link.icon} 
              />
            ))}
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; {currentYear} Priyesh Thakur. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer); 