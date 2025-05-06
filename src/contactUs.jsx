import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const OurTeam = () => {
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
        <div
          className={`flex gap-9 ${menuOpen ? "flex-col w-full mt-2" : "hidden md:flex"}`}
        >
          <Link to="/" className="text-white font-medium hover:text-red-600">
            Home
          </Link>
          <Link to="/about" className="text-white font-medium hover:text-red-600">
            About Us
          </Link>
          <Link to="/classes" className="text-white font-medium hover:text-red-600">
            Classes
          </Link>
          <Link to="/contact" className="text-white font-medium hover:text-red-600">
            Contact
          </Link>
          <Link to="/team" className="text-white font-medium hover:text-red-600">
            Our Team
          </Link>
        </div>
        <div
          className={`items-center gap-4 ${menuOpen ? "flex flex-col w-full mt-2" : "hidden md:flex"}`}
        >
          <div className="flex gap-6 text-xl text-red-600">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-[600px] w-full">
        <img
          src="./images/banner.jpg"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white px-10 md:px-20 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2">
            <div className="mb-6">
              <span className="text-red-500 uppercase font-semibold">
                Contact Us
              </span>
              <h2 className="text-3xl font-bold mt-2 text-white">
                GET IN TOUCH
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <i className="fa fa-map-marker text-red-500 text-xl mt-1" />
                <p>
                  Shopping Complex-4,5 Sector 4 Exact Near Gym Khana Club
                  <br /> Rohtak 124001
                </p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa fa-mobile text-red-500 text-xl mt-1" />
                <ul>
                  <li>7206573666 | 9350366616</li>
                </ul>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa fa-envelope text-red-500 text-xl mt-1" />
                <p>Support.gymcenter@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2">
            <div className="p-6 rounded-lg shadow-md">
              <form action="#" className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-black text-white border border-white hover:border-red-500 p-2 rounded placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full bg-black text-white border border-white hover:border-red-500 p-2 rounded placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Website"
                  className="w-full bg-black text-white border border-white hover:border-red-500 p-2 rounded placeholder-gray-400"
                />
                <textarea
                  placeholder="Comment"
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
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-10 pb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"
          height="550"
          className="w-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
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
                Shopping Complex-4,5 Sector 4 <br /> Exact Near Gym Khana Club
                <br /> Rohtak 124001
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
              <p>Support.gymcenter@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurTeam;
