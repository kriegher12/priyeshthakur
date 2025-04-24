import React, { useEffect } from "react";
import HeroImage from "./assets/hero.jpg";
import EventOneImage from "./assets/event1.jpg";
import EventTwoImage from "./assets/event2.jpg";
import ReelOneImage from "./assets/reel1.jpg";
import ReelTwoImage from "./assets/reel2.jpg";
import ReelThreeImage from "./assets/reel3.jpg";
import ReelFourImage from "./assets/reel4.jpg";
import ReelFiveImage from "./assets/reel5.jpg";
import ReelSixImage from "./assets/reel6.jpg";
import ReelSevenImage from "./assets/reel7.jpg";
import ReelEightImage from "./assets/reel8.jpg";
import ReelNineImage from "./assets/reel9.jpg";
import SocialOneImage from "./assets/social1.jpg";
import SocialTwoImage from "./assets/social2.jpg";
import SocialThreeImage from "./assets/social3.jpg";
import MusicOneImage from "./assets/music1.jpg";
import MusicTwoImage from "./assets/music2.jpg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { styles, tailwindConfig } from "./styles";

const narrativeImages = [
  { src: "https://placehold.co/400x300", text: "Lorem ipsum" },
  { src: "https://placehold.co/400x300", text: "Dolor sit" },
  { src: "https://placehold.co/400x300", text: "Amet consectetur" },
];

const musicVideoImages = [
  { src: "https://placehold.co/400x300", text: "Adipiscing elit" },
  { src: "https://placehold.co/400x300", text: "Sed do" },
  { src: "https://placehold.co/400x300", text: "Eiusmod tempor" },
];

const commercialImages = [
  { src: "https://placehold.co/400x300", text: "Incididunt ut" },
  { src: "https://placehold.co/400x300", text: "Labore et" },
  { src: "https://placehold.co/400x300", text: "Dolore magna" },
];

const App = () => {
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

  // Popup modal functionality
  const openPopup = (embedUrl) => {
    const modal = document.getElementById("popup-modal");
    modal.querySelector("iframe").src = embedUrl;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closePopup = () => {
    const modal = document.getElementById("popup-modal");
    modal.querySelector("iframe").src = "";
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Re-enable scrolling
  };

  // Setup event listeners for popup
  useEffect(() => {
    const closeBtn = document.getElementById("close-modal");
    const modal = document.getElementById("popup-modal");

    if (closeBtn && modal) {
      // Close modal when clicking close button
      closeBtn.addEventListener("click", closePopup);

      // Close modal when clicking outside content
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closePopup();
        }
      });

      // Close modal on ESC key
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.classList.contains("hidden")) {
          closePopup();
        }
      });
    }

    return () => {
      if (closeBtn) closeBtn.removeEventListener("click", closePopup);
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal?.classList.contains("hidden")) {
          closePopup();
        }
      });
    };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <script dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      
      <div className="font-sans text-dark min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto mt-6">
            <a
              href="https://www.behance.net/gallery/157282833/Abu-Dhabi-Tour-For-WIAK/modules/887335431"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                alt="A woman sitting at a table looking down, with a dimly lit background and some framed pictures on the wall"
                className="w-full"
                src={HeroImage}
              />
            </a>
          </div>

          <div className="container mx-auto px-4 py-12">
            <h2 className="section-heading text-2xl text-center uppercase mb-8">
              Reels and Engagement content
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {/* Reel 1 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/EXefeNxT2-w?rel=0')}
              >
                <img
                  alt="Gallery image 1"
                  className="w-full h-64 object-cover"
                  src={ReelOneImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>

              {/* Reel 2 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/Ov_tfyxqsUQ?rel=0')}
              >
                <img
                  alt="Gallery image 2"
                  className="w-full h-64 object-cover"
                  src={ReelTwoImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>

              {/* Reel 3 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/oNSkv62jCNw?rel=0')}
              >
                <img
                  alt="Gallery image 3"
                  className="w-full h-64 object-cover"
                  src={ReelThreeImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>

              {/* Reel 4 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/9S8TPfY2hqU?rel=0')}
              >
                <img
                  alt="Gallery image 4"
                  className="w-full h-64 object-cover"
                  src={ReelFourImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>

              {/* Reel 5 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/Wmh5lV-3MBM?rel=0')}
              >
                <img
                  alt="Gallery image 5"
                  className="w-full h-64 object-cover"
                  src={ReelFiveImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>

              {/* Reel 6 */}
              <a href="https://www.instagram.com/p/CjKp6UorNst/" target="_blank" rel="noopener noreferrer">
                <div className="relative image-container fade-in">
                  <img
                    alt="Gallery image 6"
                    className="w-full h-64 object-cover"
                    src={ReelSixImage}
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                    <div className="text-white flex items-center justify-center">
                      <i className="fab fa-instagram text-4xl"></i>
                    </div>
                  </div>
                </div>
              </a>

              {/* Reel 7 */}
              <a href="https://www.instagram.com/p/ChW1rPxIW9V/" target="_blank" rel="noopener noreferrer">
                <div className="relative image-container fade-in">
                  <img
                    alt="Gallery image 7"
                    className="w-full h-64 object-cover"
                    src={ReelSevenImage}
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                    <div className="text-white flex items-center justify-center">
                      <i className="fab fa-instagram text-4xl"></i>
                    </div>
                  </div>
                </div>
              </a>

              {/* Reel 8 */}
              <a href="https://www.instagram.com/p/CkA7DnTqmYN/" target="_blank" rel="noopener noreferrer">
                <div className="relative image-container fade-in">
                  <img
                    alt="Gallery image 8"
                    className="w-full h-64 object-cover"
                    src={ReelEightImage}
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                    <div className="text-white flex items-center justify-center">
                      <i className="fab fa-instagram text-4xl"></i>
                    </div>
                  </div>
                </div>
              </a>

              {/* Reel 9 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/aRXntHcYFZs?rel=0')}
              >
                <img
                  alt="Gallery image 9"
                  className="w-full h-64 object-cover"
                  src={ReelNineImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="section-heading text-2xl text-center uppercase mb-8">
              Event Videos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {/* Event 1 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/LhE-Lgkj3tg?rel=0')}
              >
                <img
                  alt="Gallery image 4"
                  className="w-full h-64 object-cover"
                  src={EventOneImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>

              {/* Event 2 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/W8NTANiXYxc?rel=0')}
              >
                <img
                  alt="Gallery image 5"
                  className="w-full h-64 object-cover"
                  src={EventTwoImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="section-heading text-2xl text-center uppercase mb-8">
              Personal Social Content Page
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {/* Social 1 */}
              <a href="https://www.instagram.com/p/C2Ffz0xN1s6/" target="_blank" rel="noopener noreferrer">
                <div className="relative image-container fade-in">
                  <img
                    alt="Gallery image 7"
                    className="w-full h-64 object-cover"
                    src={SocialOneImage}
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                    <div className="text-white flex items-center justify-center">
                      <i className="fab fa-instagram text-4xl"></i>
                    </div>
                  </div>
                </div>
              </a>

              {/* Social 2 */}
              <a href="https://www.instagram.com/p/C3alfkJovZk/" target="_blank" rel="noopener noreferrer">
                <div className="relative image-container fade-in">
                  <img
                    alt="Gallery image 8"
                    className="w-full h-64 object-cover"
                    src={SocialTwoImage}
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                    <div className="text-white flex items-center justify-center">
                      <i className="fab fa-instagram text-4xl"></i>
                    </div>
                  </div>
                </div>
              </a>

              {/* Social 3 */}
              <a href="https://www.instagram.com/p/C6MR1b8SeGq/" target="_blank" rel="noopener noreferrer">
                <div className="relative image-container fade-in">
                  <img
                    alt="Gallery image 9"
                    className="w-full h-64 object-cover"
                    src={SocialThreeImage}
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                    <div className="text-white flex items-center justify-center">
                      <i className="fab fa-instagram text-4xl"></i>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <h2 className="section-heading text-2xl text-center uppercase mb-8">
              Music Videos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {/* Music 1 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/ZcQq9CGWev0?rel=0')}
              >
                <img
                  alt="Gallery image 7"
                  className="w-full h-64 object-cover"
                  src={MusicOneImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>

              {/* Music 2 */}
              <div
                className="relative image-container fade-in"
                onClick={() => openPopup('https://www.youtube.com/embed/cU2FfP4UuOo?rel=0')}
              >
                <img
                  alt="Gallery image 8"
                  className="w-full h-64 object-cover"
                  src={MusicTwoImage}
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                  <div className="text-white flex items-center justify-center">
                    <i className="fas fa-play-circle text-4xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div
          id="popup-modal"
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center hidden z-50"
          style={{ backdropFilter: "blur(5px)" }}
        >
          <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full">
            <div className="relative">
              <iframe
                width="100%"
                height="600px"
                src=""
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-t-lg"
              ></iframe>
              <button
                id="close-modal"
                className="absolute top-3 right-3 text-white hover:text-gray-300 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-all duration-300"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

const Section = ({ title, images }) => {
  return (
    <>
      <h2 classname="text-2xl font-staatliches text-center mb-8 uppercase font-bold">
        {title}
      </h2>
      <div classname="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {images.map((image, index) => (
          <div classname="relative image-container" key={index}>
            <img
              alt={`Gallery ${index + 1}`}
              classname="w-full h-auto"
              src={image.src}
            />
            <div classname="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none image-container:hover:opacity-100 image-container:hover:pointer-events-auto">
              <div classname="border border-white p-4 text-white">
                {image.text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
