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
    <div classname="font-roboto">
      <div classname="container mx-auto text-center py-8">
        <h1 classname="text-2xl font-bold">PRIYESH THAKUR</h1>
        <p classname="text-sm">CINEMATOGRAPHER</p>
        <nav classname="mt-4">
          <ul classname="flex justify-center space-x-8 text-sm">
            <li>
              <a classname="hover:underline" href="#">
                Narrative
              </a>
            </li>
            <li>
              <a classname="hover:underline" href="#">
                Music videos
              </a>
            </li>
            <li>
              <a classname="hover:underline" href="#">
                Commercials
              </a>
            </li>
            <li>
              <a classname="hover:underline" href="#">
                Info
              </a>
            </li>
            <li>
              <a classname="hover:underline" href="#">
                Stills
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div classname="container mx-auto">
        <img
          alt="A woman sitting at a table looking down, with a dimly lit background and some framed pictures on the wall"
          classname="w-full"
          src="https://placehold.co/1200x800"
        />
      </div>
      <div classname="container mx-auto py-8">
        <Section images={narrativeImages} title="Narrative"></Section>
        <Section images={musicVideoImages} title="Music Videos"></Section>
        <Section images={commercialImages} title="Commercials"></Section>
      </div>
    </div>
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
