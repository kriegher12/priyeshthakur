import React from "react";

function Contact() {
  return (
    <div class="font-roboto">
      <div class="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
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
        <div class="max-w-4xl mx-auto p-6">
          <h2 class="text-2xl mb-8 font-bold">Get In Touch</h2>
          <div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
              <div>
                <h2 class="text-lg font-semibold">Location</h2>
                <p>Dubai</p>
              </div>
              <div>
                <h2 class="text-lg font-semibold">Email</h2>
                <p>priyeshcinematics@gmail.com</p>
              </div>
              <div>
                <h2 class="text-lg font-semibold">Phone</h2>
                <p>+971547712951</p>
              </div>
              <a
                href="https://www.behance.net/Priyesh96"
                target="_blank"
                class="flex items-center space-x-4"
              >
                <i class="fab fa-behance text-4xl"></i>
                <span class="font-bold text-lg">Behance</span>
              </a>
              <a
                href="https://www.instagram.com/priyeshcinematics/"
                target="_blank"
                class="flex items-center space-x-4"
              >
                <i class="fab fa-instagram text-4xl"></i>
                <span class="font-bold text-lg">Instagram</span>
              </a>
              <a
                href="https://www.linkedin.com/in/priyesh-thakur-8170a6101/"
                target="_blank"
                class="flex items-center space-x-4"
              >
                <i class="fab fa-linkedin text-4xl"></i>
                <span class="font-bold text-lg">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
          </div>
        </div>
      </div>
      <footer class="text-center pb-4 absolute bottom-0 w-full">
        <p class="text-sm flex flex-col"></p>

        <span> &copy; 2025 Priyesh Thakur </span>
      </footer>
    </div>
  );
}

export default Contact;
