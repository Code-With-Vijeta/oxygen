import React from "react";

const Appointment = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-30"
        style={{ backgroundImage: "url('./images/contact.png')" }}
      ></div>

      <div className="relative z-10 p-8 rounded-2xl shadow-lg max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
          Contact Now to get more details
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Where health, beauty and fitness meet.
        </p>
        <a href="/contact">
          <button className="outline-red-500 outline-1 hover:bg-red-700 text-white font-semibold py-3 px-6 transition duration-300 mt-4">
            CONTACT NOW
          </button>
        </a>
      </div>
    </section>
  );
};

export default Appointment;
