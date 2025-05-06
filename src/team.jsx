import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const teamMembers = [
  { name: "Athart Rachel", role: "Gym Trainer", image: "./images/expert1.png" },
  { name: "Jordan Blake", role: "Strength Coach", image: "./images/expert2.jpg" },
  { name: "Maya Chen", role: "Fitness Instructor", image: "./images/expert3.jpg" },
  { name: "Leo Fernandez", role: "Bodybuilding Coach", image: "./images/expert4.jpg" },
  { name: "Sasha Kapoor", role: "Cardio Specialist", image: "./images/expert5.jpg" },
  { name: "Dylan West", role: "Personal Trainer", image: "./images/expert6.jpg" },
];

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
          <Link to="/" className="text-white font-medium hover:text-red-600">Home</Link>
          <Link to="/about" className="text-white font-medium hover:text-red-600">About Us</Link>
          <Link to="/classes" className="text-white font-medium hover:text-red-600">Classes</Link>
          <Link to="/contact" className="text-white font-medium hover:text-red-600">Contact</Link>
          <Link to="/team" className="text-white font-medium hover:text-red-600">Our Team</Link>
        </div>
        <div
          className={`items-center gap-4 ${menuOpen ? "flex flex-col w-full mt-2" : "hidden md:flex"}`}
        >
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

      {/* Banner Section */}
      <div className="relative h-[600px] w-full">
        <img src="./images/banner.jpg" alt="About Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase">Our Team</h1>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto py-16 px-4 md:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left">
            <span className="text-red-600 uppercase tracking-widest font-semibold text-sm">
              Our Team
            </span>
            <h2 className="text-white mt-2 mb-20 text-4xl font-bold uppercase">
              Train With Experts
            </h2>
          </div>
          <a
            href="/appointment"
            className="mt-6 md:mt-0 bg-red-600 text-white px-6 py-3 font-semibold hover:border hover:border-red-600 hover:bg-transparent transition-all"
          >
            Appointment
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative shadow-lg group">
              <div className="overflow-hidden mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-all duration-300"
                />
              </div>

              <div className="absolute pb-10 bottom-0 left-0 right-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center py-4">
                <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                <p className="text-red-400">{member.role}</p>
              </div>
            </div>
          ))}
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
