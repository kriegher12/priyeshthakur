import React, { useEffect, memo } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { styles, tailwindConfig } from "./styles";

// Memoized Contact Card component
const ContactCard = memo(({ icon, title, content }) => (
  <div className="contact-card bg-white rounded-lg shadow-md p-8 text-center fade-in">
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 rounded-full p-4 mb-4">
        <i className={`${icon} text-2xl text-accent`}></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
));

ContactCard.displayName = 'ContactCard';

// Memoized Social Card component
const SocialCard = memo(({ icon, title, content, link }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="contact-card bg-white rounded-lg shadow-md p-8 text-center fade-in group"
  >
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 rounded-full p-6 mb-4 group-hover:bg-dark transition-colors duration-300">
        <i className={`${icon} text-3xl text-accent`}></i>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  </a>
));

SocialCard.displayName = 'SocialCard';

function Contact() {
  // Contact information data
  const contactInfo = [
    { icon: "fas fa-map-marker-alt", title: "Location", content: "Dubai" },
    { icon: "fas fa-envelope", title: "Email", content: "priyeshcinematics@gmail.com" },
    { icon: "fas fa-phone", title: "Phone", content: "+971547712951" }
  ];
  
  // Social media data
  const socialMedia = [
    { 
      icon: "fab fa-behance", 
      title: "Behance", 
      content: "View Portfolio",
      link: "https://www.behance.net/Priyesh96" 
    },
    { 
      icon: "fab fa-instagram", 
      title: "Instagram", 
      content: "Follow Latest Work",
      link: "https://www.instagram.com/priyeshcinematics/" 
    },
    { 
      icon: "fab fa-linkedin", 
      title: "LinkedIn", 
      content: "Connect Professionally",
      link: "https://www.linkedin.com/in/priyesh-thakur-8170a6101/" 
    }
  ];

  // Effect for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, index * 150); // Staggering effect
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px 50px 0px" }
    );

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach((element) => {
        observer.unobserve(element);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <script dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      
      <div className="font-sans text-dark min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <h2 className="section-heading text-2xl text-center uppercase mb-12">Get In Touch</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {contactInfo.map((info, index) => (
                  <ContactCard 
                    key={index}
                    icon={info.icon}
                    title={info.title}
                    content={info.content}
                  />
                ))}
              </div>
              
              <h2 className="section-heading text-2xl text-center uppercase mb-12">Social Media</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {socialMedia.map((social, index) => (
                  <SocialCard 
                    key={index}
                    icon={social.icon}
                    title={social.title}
                    content={social.content}
                    link={social.link}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default memo(Contact);
