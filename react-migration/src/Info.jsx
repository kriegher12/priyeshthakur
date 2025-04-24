import React from "react";
import InfoImage from "./assets/info.webp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { styles, tailwindConfig } from "./styles";

function Info() {
  return (
    <>
      <style>{styles}</style>
      <script dangerouslySetInnerHTML={{ __html: tailwindConfig }} />
      
      <div className="font-sans text-dark min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/3">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    className="w-full h-auto"
                    src={InfoImage}
                    alt="Priyesh Thakur portrait"
                  />
                  <div className="p-6 text-center">
                    <p className="text-sm font-medium text-gray-700">
                      Content Creator - Videographer - Video Editor - Virtual Tour Specialist
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <section className="mb-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    I am a creative visionary with a wealth of experience in real
                    estate photography, videography, and content creation. Currently
                    contributing my expertise to The Network, formerly known as
                    Starling Properties, I specialize in crafting captivating visuals
                    and compelling narratives that elevate properties to their full
                    potential. From high-resolution photography and polished social
                    media content to immersive Matterport 360° virtual tours, I
                    develop innovative strategies to amplify online presence and
                    engage diverse audiences.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Driven by a passion for storytelling, a mastery of technical
                    artistry, and a meticulous eye for detail, I excel in showcasing
                    properties in their finest light-consistently exceeding
                    expectations while enhancing brand value. My creative journey
                    extends across documentary filmmaking, short films,
                    advertisements, corporate productions, and architectural
                    videography, enabling me to transform ideas into dynamic,
                    memorable experiences.
                  </p>
                </section>

                <section className="mb-8">
                  <h3 className="text-2xl font-semibold mb-6">Expertise:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="expertise-card bg-white py-5 px-4 rounded-lg font-medium text-center">
                      Real Estate Photography
                    </div>
                    <div className="expertise-card bg-white py-5 px-4 rounded-lg font-medium text-center">
                      Videography
                    </div>
                    <div className="expertise-card bg-white py-5 px-4 rounded-lg font-medium text-center">
                      Video Editing
                    </div>
                    <div className="expertise-card bg-white py-5 px-4 rounded-lg font-medium text-center">
                      Social Media Content
                    </div>
                    <div className="expertise-card bg-white py-5 px-4 rounded-lg font-medium text-center">
                      Matterport 360° Virtual Tours
                    </div>
                    <div className="expertise-card bg-white py-5 px-4 rounded-lg font-medium text-center">
                      Marketing Strategy
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
}

export default Info;
