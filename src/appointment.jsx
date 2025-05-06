import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);

  const Navbar = () => (
    <nav className="bg-black/80 shadow-md px-5 py-3 fixed w-full z-[1000]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap">
        <img className="h-[68px] mt-3" src="./images/logo.png" alt="logo" />
        <button
          className="text-white text-2xl bg-none border-none cursor-pointer block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          &#9776;
        </button>
        <div className={`flex gap-9 ${menuOpen ? "flex-col w-full mt-2" : "hidden md:flex"}`}>
          <Link to="/" className="text-white font-medium hover:text-red-600">Home</Link>
          <Link to="/about" className="text-white font-medium hover:text-red-600">About Us</Link>
          <Link to="/classes" className="text-white font-medium hover:text-red-600">Classes</Link>
          <Link to="/contact" className="text-white font-medium hover:text-red-600">Contact</Link>
          <Link to="/team" className="text-white font-medium hover:text-red-600">Our Team</Link>
        </div>
        <div className={`items-center gap-4 ${menuOpen ? "flex flex-col w-full mt-2" : "hidden md:flex"}`}>
          <div className="flex gap-6 text-xl text-red-600">
            <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Banner */}
      <div className="relative h-[600px] w-full">
        <img
          src="./images/banner.jpg"
          alt="Appointment Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-white">
            Appointment
          </h1>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-[#111] py-16 px-6 md:px-40">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide state-of-the-art facilities, certified trainers, and a wide variety of classes to meet every fitness goal. Your health journey deserves the best support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-black border border-red-600 p-6 rounded-lg shadow hover:shadow-lg transition">
            <i className="fa fa-dumbbell text-red-500 text-4xl mb-4"></i>
            <h4 className="text-xl font-semibold mb-2">Expert Trainers</h4>
            <p className="text-gray-400">Get trained by professionals who understand your fitness needs.</p>
          </div>
          <div className="bg-black border border-red-600 p-6 rounded-lg shadow hover:shadow-lg transition">
            <i className="fa fa-clock text-red-500 text-4xl mb-4"></i>
            <h4 className="text-xl font-semibold mb-2">Flexible Schedule</h4>
            <p className="text-gray-400">Choose workout timings that suit your daily routine perfectly.</p>
          </div>
          <div className="bg-black border border-red-600 p-6 rounded-lg shadow hover:shadow-lg transition">
            <i className="fa fa-heartbeat text-red-500 text-4xl mb-4"></i>
            <h4 className="text-xl font-semibold mb-2">Holistic Programs</h4>
            <p className="text-gray-400">From fitness to nutrition, we take care of your complete well-being.</p>
          </div>
        </div>
      </div>

      {/* Appointment Section */}
      <div className="bg-black text-white px-6 md:px-20 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Form Left Side */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="text-red-500 uppercase font-semibold">Make an Appointment</span>
              <h2 className="text-3xl font-bold mt-2 text-white">BOOK YOUR APPOINTMENT</h2>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-black text-white border border-white hover:border-red-500 p-2 rounded placeholder-gray-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-black text-white border border-white hover:border-red-500 p-2 rounded placeholder-gray-400"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-black text-white border border-white hover:border-red-500 p-2 rounded placeholder-gray-400"
              />
              <textarea
                placeholder="Message"
                className="w-full bg-black text-white border border-white hover:border-red-500 p-2 rounded h-32 placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Video Right Side */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
              <video
                src="./images/appointment.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-md"
              ></video>
            </div>
          </div>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="bg-[#111] py-16">
        <div className="container mx-auto px-4 md:px-40">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 text-center xl:text-left">
            <div className="h-full flex justify-center items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-red-600 text-2xl shadow-md">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>
              <p>
                Shopping Complex-4,5 Sector 4 <br /> Exact Near Gym Khana Club <br /> Rohtak 124001
              </p>
            </div>

            <div className="h-full flex justify-center items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-red-600 text-2xl shadow-md">
                <i className="fa fa-mobile" aria-hidden="true"></i>
              </div>
              <ul>
                <li>7206573666 | 9350366616</li>
              </ul>
            </div>

            <div className="h-full flex justify-center items-center gap-4">
              <div className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center text-red-600 text-2xl shadow-md">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <p>support.gymcenter@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Appointment;
