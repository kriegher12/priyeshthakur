import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { styles, tailwindConfig } from "./styles";

function Contact() {
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

    document.querySelectorAll(".fade-in").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
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
                <div className="contact-card bg-white rounded-lg shadow-md p-8 text-center fade-in">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-full p-4 mb-4">
                      <i className="fas fa-map-marker-alt text-2xl text-accent"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Location</h3>
                    <p className="text-gray-600">Dubai</p>
                  </div>
                </div>
                
                <div className="contact-card bg-white rounded-lg shadow-md p-8 text-center fade-in">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-full p-4 mb-4">
                      <i className="fas fa-envelope text-2xl text-accent"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-gray-600">priyeshcinematics@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-card bg-white rounded-lg shadow-md p-8 text-center fade-in">
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-full p-4 mb-4">
                      <i className="fas fa-phone text-2xl text-accent"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <p className="text-gray-600">+971547712951</p>
                  </div>
                </div>
              </div>
              
              <h2 className="section-heading text-2xl text-center uppercase mb-12">Social Media</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <a
                  href="https://www.behance.net/Priyesh96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card bg-white rounded-lg shadow-md p-8 text-center fade-in group"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-full p-6 mb-4 group-hover:bg-dark transition-colors duration-300">
                      <i className="fab fa-behance text-3xl text-accent"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Behance</h3>
                    <p className="text-gray-600">View Portfolio</p>
                  </div>
                </a>
                
                <a
                  href="https://www.instagram.com/priyeshcinematics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card bg-white rounded-lg shadow-md p-8 text-center fade-in group"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-full p-6 mb-4 group-hover:bg-dark transition-colors duration-300">
                      <i className="fab fa-instagram text-3xl text-accent"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Instagram</h3>
                    <p className="text-gray-600">Follow Latest Work</p>
                  </div>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/priyesh-thakur-8170a6101/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card bg-white rounded-lg shadow-md p-8 text-center fade-in group"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 rounded-full p-6 mb-4 group-hover:bg-dark transition-colors duration-300">
                      <i className="fab fa-linkedin text-3xl text-accent"></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                    <p className="text-gray-600">Connect Professionally</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default Contact;
