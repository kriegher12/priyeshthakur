import React from "react";
import InfoImage from "./assets/info.webp";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div class="bg-white text-black">
      <div class="px-4 lg:px-16">
        <div class="container mx-auto pb-8">
          <div class="container mx-auto text-center py-8">
            <h1 class="text-2xl font-bold">PRIYESH THAKUR</h1>
            <p class="text-sm">CINEMATOGRAPHER</p>
            <nav class="mt-4">
              <ul class="flex justify-center space-x-8 text-sm">
                <li>
                  <Link class="hover:underline" to="/">
                    {" "}
                    Narrative{" "}
                  </Link>
                </li>
                <li>
                  <Link class="hover:underline" to="/info">
                    {" "}
                    Info{" "}
                  </Link>
                </li>
                <li>
                  <Link class="hover:underline" to="/contact">
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <main class="flex flex-col lg:flex-row">
            <div class="lg:w-1/3 mb-8 lg:mb-0">
              <img class="w-full h-auto" src={InfoImage} />
              <p class="text-sm font-medium py-3 text-center">
                Content Creator - Videographer - Video Editor - Virtual Tour
                Specialist
              </p>
            </div>
            <div class="lg:w-1/2 lg:pl-8">
              <section class="mb-8">
                <p class="mt-4 text-gray-700">
                  I am a creative visionary with a wealth of experience in real
                  estate photography, videography, and content creation.
                  Currently contributing my expertise to The Network, formerly
                  known as Starling Properties, I specialize in crafting
                  captivating visuals and compelling narratives that elevate
                  properties to their full potential. From high-resolution
                  photography and polished social media content to immersive
                  Matterport 360° virtual tours, I develop innovative strategies
                  to amplify online presence and engage diverse audiences.
                </p>
                <p class="mt-4 text-gray-700">
                  Driven by a passion for storytelling, a mastery of technical
                  artistry, and a meticulous eye for detail, I excel in
                  showcasing properties in their finest light-consistently
                  exceeding expectations while enhancing brand value. My
                  creative journey extends across documentary filmmaking, short
                  films, advertisements, corporate productions, and
                  architectural videography, enabling me to transform ideas into
                  dynamic, memorable experiences.
                </p>
              </section>

              <section class="mb-8">
                <h3 class="text-2xl font-semibold">Expertise:</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div class="py-4 px-6 rounded-lg font-medium">
                    Real Estate Photography
                  </div>
                  <div class="py-4 px-6 rounded-lg font-medium">
                    Videography
                  </div>
                  <div class="py-4 px-6 rounded-lg font-medium">
                    Video Editing
                  </div>
                  <div class="py-4 px-6 rounded-lg font-medium">
                    Social Media Content
                  </div>
                  <div class="py-4 px-6 rounded-lg font-medium">
                    Matterport 360° Virtual Tours
                  </div>
                  <div class="py-4 px-6 rounded-lg font-medium">
                    Marketing Strategy
                  </div>
                </div>
              </section>

              {/* <!-- <section class="mb-8">
              <h3 class="text-2xl font-semibold">Experience</h3>
              <p class="mt-4 text-gray-700">
                With a passion for storytelling, technical expertise, and
                attention to detail, I help showcase properties in the best light.
                My work exceeds expectations and enhances brand value, driving
                more visibility and engagement.
              </p>
              <p class="mt-4 text-gray-700">My experience spans:</p>
              <ul class="list-disc list-inside mt-4 text-gray-600">
                <li>Documentary Videos</li>
                <li>Short Films</li>
                <li>Advertisements</li>
                <li>Corporate Content</li>
                <li>Architectural Videos</li>
              </ul>
              <p class="mt-4 text-gray-700">
                I am a versatile content creator who brings stories to life.
              </p>
            </section> --> */}
            </div>
          </main>
          {/* <!-- <section class="mt-12">
          <h2 class="text-lg font-bold mb-4">UK/EU AGENTS</h2>
          <div class="flex flex-col lg:flex-row">
            <div class="lg:w-1/2 mb-8 lg:mb-0">
              <h3 class="text-2xl font-bold mb-4">LUX</h3>
              <h4 class="text-lg font-bold mb-2">
                COMMERCIALS &amp; MUSIC VIDEO
              </h4>
              <p class="mb-2">
                Jerry Deeney
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:jerry@luxartists.net"
                >
                  jerry@luxartists.net
                </a>
              </p>
              <p class="mb-2">
                Wladimir Baseden
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:wladimir@luxartists.net"
                >
                  wladimir@luxartists.net
                </a>
              </p>
              <p class="mb-2">+33 (0)1 3 44 09 69</p>
              <p class="mb-2">
                Nikhil Sinh Smith
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:nikhil@luxartists.net"
                >
                  nikhil@luxartists.net
                </a>
              </p>
              <p class="mb-2">+44 20 7637 9064</p>
            </div>
            <div class="lg:w-1/2 lg:pl-8">
              <h4 class="text-lg font-bold mb-2">FILM &amp; TV</h4>
              <p class="mb-2">
                Rebecca Fayyad Palud
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:rebecca@luxartists.net"
                >
                  rebecca@luxartists.net
                </a>
              </p>
              <p class="mb-2">
                Molly Eaglesham
                <br />
                <a
                  class="text-black hover:underline"
                  href="mailto:molly@luxartists.net"
                >
                  molly@luxartists.net
                </a>
              </p>
            </div>
          </div>
        </section> --> */}
        </div>
      </div>
      <footer class="text-center pb-4 w-full">
        <p class="text-sm flex flex-col">
          <div>
            <div class="flex justify-center space-x-4">
              <a
                href="https://www.behance.net/Priyesh96"
                target="_blank"
                class="rounded-full p-3"
              >
                <i class="fab fa-behance text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com/priyeshcinematics/"
                target="_blank"
                class="rounded-full p-3"
              >
                <i class="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/priyesh-thakur-8170a6101/"
                target="_blank"
                class="rounded-full p-3"
              >
                <i class="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
          <span>&copy; 2025 Priyesh Thakur</span>
        </p>
      </footer>
    </div>
  );
}

export default Info;
