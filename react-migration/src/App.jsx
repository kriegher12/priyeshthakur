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
  return (
    <>
      <div class="container mx-auto text-center py-8">
        <h1 class="text-2xl font-bold">PRIYESH THAKUR</h1>
        <p class="text-sm">CINEMATOGRAPHER</p>
        <nav class="mt-4">
          <ul class="flex justify-center space-x-8 text-sm">
            <li>
              <a class="hover:underline" href="index.html">
                {" "}
                Narrative{" "}
              </a>
            </li>
            <li>
              <a class="hover:underline" href="info.html">
                {" "}
                Info{" "}
              </a>
            </li>
            <li>
              <a class="hover:underline" href="contacts.html">
                {" "}
                Contact{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="container mx-auto">
        <a
          href="https://www.behance.net/gallery/157282833/Abu-Dhabi-Tour-For-WIAK/modules/887335431"
          target="_blank"
        >
          <img
            alt="A woman sitting at a table looking down, with a dimly lit background and some framed pictures on the wall"
            class="w-full"
            src="thumbnails/hero.jpg"
          />
        </a>
      </div>
      <div class="container mx-auto py-8">
        <h2 class="text-2xl font-staatliches text-center mb-8 uppercase open-sans-300">
          Reels and Engagement content
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/EXefeNxT2-w?rel=0')"
          >
            <img
              alt="Gallery image 1"
              class="w-full h-48 object-cover"
              src="thumbnails/reel1.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">Villa reel</div> --> */}
            </div>
          </div>
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/Ov_tfyxqsUQ?rel=0')"
          >
            <img
              alt="Gallery image 2"
              class="w-full h-48 object-cover"
              src="thumbnails/reel2.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">Townhouse</div> --> */}
            </div>
          </div>
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/oNSkv62jCNw?rel=0')"
          >
            <img
              alt="Gallery image 3"
              class="w-full h-48 object-cover"
              src="thumbnails/reel3.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">
        If you aspire to be a proud property owner, look no further than
        Starling Properties
      </div> --> */}
            </div>
          </div>
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/9S8TPfY2hqU?rel=0')"
          >
            <img
              alt="Gallery image 4"
              class="w-full h-48 object-cover"
              src="thumbnails/reel4.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">
        Experience European charm in Dubai at Ghaf Woods by Majid AL
        Futtaim
      </div> --> */}
            </div>
          </div>
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/Wmh5lV-3MBM?rel=0')"
          >
            <img
              alt="Gallery image 5"
              class="w-full h-48 object-cover"
              src="thumbnails/reel5.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">
        8 December 2023
      </div> --> */}
            </div>
          </div>
          <a href="https://www.instagram.com/p/CjKp6UorNst/" target="_blank">
            <div class="relative image-container fade-in">
              <img
                alt="Gallery image 6"
                class="w-full h-48 object-cover"
                src="thumbnails/reel6.jpg"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                {/* <!-- <div class="border border-white p-4 text-white">
          Link to Instagram
        </div> --> */}
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/p/ChW1rPxIW9V/" target="_blank">
            <div class="relative image-container fade-in">
              <img
                alt="Gallery image 7"
                class="w-full h-48 object-cover"
                src="thumbnails/reel7.jpg"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                {/* <!-- <div class="border border-white p-4 text-white">
          Link to Instagram
        </div> --> */}
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/p/CkA7DnTqmYN/" target="_blank">
            <div class="relative image-container fade-in">
              <img
                alt="Gallery image 8"
                class="w-full h-48 object-cover"
                src="thumbnails/reel8.jpg"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                {/* <!-- <div class="border border-white p-4 text-white">
          Link to Instagram
        </div> --> */}
              </div>
            </div>
          </a>
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/aRXntHcYFZs?rel=0')"
          >
            <img
              alt="Gallery image 9"
              class="w-full h-48 object-cover"
              src="thumbnails/reel9.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">
        From work mode to beach mode in the blink of an eye!
      </div> --> */}
            </div>
          </div>
        </div>
        <h2 class="text-2xl font-staatliches text-center mb-8 uppercase open-sans-300">
          Event Videos
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/LhE-Lgkj3tg?rel=0')"
          >
            <img
              alt="Gallery image 4"
              class="w-full h-auto"
              src="thumbnails/event1.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">
            Scooter racing cup final 2
          </div> --> */}
            </div>
          </div>
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/W8NTANiXYxc?rel=0')"
          >
            <img
              alt="Gallery image 5"
              class="w-full h-auto"
              src="thumbnails/event2.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">
            Staring Properties Roadshow in Colombia and Mexico
          </div> --> */}
            </div>
          </div>
        </div>
        <h2 class="text-2xl font-staatliches text-center mb-8 uppercase open-sans-300">
          Personal Social Content Page
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <a href="https://www.instagram.com/p/C2Ffz0xN1s6/" target="_blank">
            <div class="relative image-container fade-in">
              <img
                alt="Gallery image 7"
                class="w-full h-auto"
                src="thumbnails/social1.jpg"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                {/* <!-- <div class="border border-white p-4 text-white">
              Link to Instagram
            </div> --> */}
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/p/C3alfkJovZk/" target="_blank">
            <div class="relative image-container fade-in">
              <img
                alt="Gallery image 8"
                class="w-full h-auto"
                src="thumbnails/social2.jpg"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                {/* <!-- <div class="border border-white p-4 text-white">
              Link to Instagram
            </div> --> */}
              </div>
            </div>
          </a>
          <a href="https://www.instagram.com/p/C6MR1b8SeGq/" target="_blank">
            <div class="relative image-container fade-in">
              <img
                alt="Gallery image 9"
                class="w-full h-auto"
                src="thumbnails/social3.jpg"
              />
              <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
                {/* <!-- <div class="border border-white p-4 text-white">
              Link to Instagram
            </div> --> */}
              </div>
            </div>
          </a>
        </div>
        <h2 class="text-2xl font-staatliches text-center my-8 uppercase open-sans-300">
          Music Videos
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/ZcQq9CGWev0?rel=0')"
          >
            <img
              alt="Gallery image 7"
              class="w-full h-auto"
              src="thumbnails/music1.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">
            Duur (Official Video)
          </div> --> */}
            </div>
          </div>
          <div
            class="relative image-container fade-in"
            onclick="openPopup('https://www.youtube.com/embed/cU2FfP4UuOo?rel=0')"
          >
            <img
              alt="Gallery image 8"
              class="w-full h-auto"
              src="thumbnails/music2.jpg"
            />
            <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none overlay">
              {/* <!-- <div class="border border-white p-4 text-white">Yeh Aaina</div> --> */}
            </div>
          </div>
        </div>
      </div>
      <div
        id="popup-modal"
        class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center hidden"
      >
        <div class="bg-white max-w-lg w-full flex">
          <div class="w-full">
            <iframe
              width="100%"
              height="700px"
              src=""
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          {/* <!-- <div class="w-1/3 relative">
        <button
          id="close-modal"
          class="text-gray-700 hover:text-black absolute top-2 right-2"
        >
          <i class="fas fa-times"></i>
        </button>
        <h3 class="text-xl font-bold mb-4 mt-4 ml-4">Popup Title</h3>
        <p class="mb-4 ml-4">
          This is the content of the popup modal describing the image on the
          left.
        </p>
      </div> --> */}
        </div>
        <button
          id="close-modal"
          class="text-white hover:text-gray-100 absolute top-2 right-2"
        >
          <i class="fas fa-times"></i>
        </button>
      </div>
      <footer class="text-center pb-4">
        <p class="text-sm flex flex-col"></p>
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
        <span> &copy; 2025 Priyesh Thakur </span>
      </footer>
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
