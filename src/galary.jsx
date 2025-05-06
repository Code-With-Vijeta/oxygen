import React from "react";
import { ArrowRight } from "lucide-react";

const images = [
  {
    src: "./images/galary1.png",
    alt: "Weightlifting",
    className: "row-span-2 col-span-2",
  },
  {
    src: "./images/galary2.png",
    alt: "Gym shoes",
    className: "col-span-1 row-span-1",
  },
  {
    src: "./images/galary3.png",
    alt: "Chest press",
    className: "col-span-1 row-span-1",
  },
  {
    src: "./images/galary4.png",
    alt: "Deadlift",
    className: "col-span-1 row-span-1",
  },
  {
    src: "./images/galary5.png",
    alt: "Older man training",
    className: "row-span-2 col-span-2",
  },
  {
    src: "./images/galary6.png",
    alt: "Older man training",
    className: "row-span-1 col-span-1",
  },
];

export default function FitnessGallery() {
  return (
    <div className="w-full bg-black py-30 px-40 max-md:px-10 max-sm:px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left">
            <span className="text-red-600 uppercase tracking-widest font-semibold text-sm">
            Our Gallery
            </span>
            <h2 className="text-white mt-2 mb-20 text-4xl font-bold uppercase">
            Explore moments of strength and fitness
            </h2>
          </div>
          <a
            href="/appointment"
            className="mt-6 md:mt-0 bg-red-600 text-white px-6 py-3 font-semibold hover:border hover:border-red-600 hover:bg-transparent transition-all"
          >
            Appointment
          </a>
        </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden ${image.className}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-500 filter brightness-60 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <div className="text-white text-center w-full">
                <button className="mb-2 bg-red-600 text-white p-2 md:p-3 rounded-full hover:bg-red-700 transition-all">
                  <ArrowRight size={18} className="md:size-6" />
                </button>
                <h1 className="text-lg md:text-2xl font-bold">Best fitness gallery</h1>
                <p className="text-sm md:text-base mt-1">Fitness, Body</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
