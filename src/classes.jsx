import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("tabs-1");

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
          className={`flex gap-9 ${
            menuOpen ? "flex-col w-full mt-2" : "hidden md:flex"
          }`}
        >
          <Link to="/" className="text-white font-medium hover:text-red-600">Home</Link>
          <Link to="/about" className="text-white font-medium hover:text-red-600">About Us</Link>
          <Link to="/classes" className="text-white font-medium hover:text-red-600">Classes</Link>
          <Link to="/contact" className="text-white font-medium hover:text-red-600">Contact</Link>
          <Link to="/team" className="text-white font-medium hover:text-red-600">Our Team</Link>
        </div>
        <div
          className={`items-center gap-4 ${
            menuOpen ? "flex flex-col w-full mt-2" : "hidden md:flex"
          }`}
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
      <div className="relative h-[400px] md:h-[600px] w-full">
        <img
          src="./images/banner.jpg"
          alt="About Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold uppercase">Classes</h1>
        </div>
      </div>

      {/* Our Classes Section */}
      <section className="py-20 bg-black text-white" id="our-classes">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Our <em className="text-red-600 not-italic">Classes</em>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Discover a variety of fitness classes tailored for every goal — whether you're aiming to build muscle, burn fat, or improve flexibility. Join our expert-led sessions and elevate your training experience.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tabs */}
            <div className="lg:w-1/3">
              <ul className="space-y-4">
                {[
                  { id: "tabs-1", label: "First Training Class" },
                  { id: "tabs-2", label: "Second Training Class" },
                  { id: "tabs-3", label: "Third Training Class" },
                  { id: "tabs-4", label: "Fourth Training Class" },
                ].map((tab) => (
                  <li
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`p-4 rounded-lg cursor-pointer flex items-center gap-3 transition ${
                      activeTab === tab.id
                        ? "bg-red-600"
                        : "bg-[#1a1a1a] hover:bg-red-600"
                    }`}
                  >
                    <div className="flex justify-center mb-4 rotate-45 ">
                      <i className="fas fa-dumbbell text-gray-400 text-7xl"></i>
                    </div>
                    {tab.label}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center">
                <a
                  href="#"
                  className="inline-block px-6 py-3 text-white bg-red-600 font-semibold hover:bg-transparent border-2 border-red-600 transition duration-300"
                >
                  View All Schedules
                </a>
              </div>
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3 space-y-8">
              {activeTab === "tabs-1" && (
                <article className="bg-[#111] p-6 rounded-lg shadow-md">
                  <img
                    src="./images/training1.webp"
                    alt="First Class"
                    className="w-full rounded mb-4"
                  />
                  <h4 className="text-2xl font-semibold mb-2">
                    First Training Class
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Achieve your fitness goals with our beginner-friendly strength training class. Perfect for all levels, this session focuses on building core strength, improving form, and boosting endurance in a supportive environment.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-5 py-2 mt-4 text-white bg-black border border-red-600 hover:bg-red-600 hover:text-white transition duration-300"
                  >
                    View Schedule
                  </a>
                </article>
              )}
              {activeTab === "tabs-2" && (
                <article className="bg-[#111] p-6 rounded-lg shadow-md">
                  <img
                    src="./images/training2.jpg"
                    alt="Second Class"
                    className="w-full rounded mb-4"
                  />
                  <h4 className="text-2xl font-semibold mb-2">
                    Second Training Class
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Achieve your fitness goals with our beginner-friendly strength training class. Perfect for all levels, this session focuses on building core strength, improving form, and boosting endurance in a supportive environment.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-5 py-2 mt-4 text-white bg-black border border-red-600 hover:bg-red-600 hover:text-white transition duration-300"
                  >
                    View Schedule
                  </a>
                </article>
              )}
              {activeTab === "tabs-3" && (
                <article className="bg-[#111] p-6 rounded-lg shadow-md">
                  <img
                    src="./images/training3.jpg"
                    alt="Third Class"
                    className="w-full rounded mb-4"
                  />
                  <h4 className="text-2xl font-semibold mb-2">
                    Third Training Class
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Achieve your fitness goals with our beginner-friendly strength training class. Perfect for all levels, this session focuses on building core strength, improving form, and boosting endurance in a supportive environment.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-5 py-2 mt-4 text-white bg-black border border-red-600 hover:bg-red-600 hover:text-white transition duration-300"
                  >
                    View Schedule
                  </a>
                </article>
              )}
              {activeTab === "tabs-4" && (
                <article className="bg-[#111] p-6 rounded-lg shadow-md">
                  <img
                    src="./images/training4.jpg"
                    alt="Fourth Class"
                    className="w-full rounded mb-4"
                  />
                  <h4 className="text-2xl font-semibold mb-2">
                    Fourth Training Class
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Achieve your fitness goals with our beginner-friendly strength training class. Perfect for all levels, this session focuses on building core strength, improving form, and boosting endurance in a supportive environment.
                  </p>
                  <a
                    href="#"
                    className="inline-block px-5 py-2 mt-4 text-white bg-black border border-red-600 hover:bg-red-600 hover:text-white transition duration-300"
                  >
                    View Schedule
                  </a>
                </article>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Time Table */}
      <div className="bg-[#111] py-16 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Weekly Timetable
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-red-600 text-white">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="px-6 py-3 border-r border-black">Day</th>
                <th className="px-6 py-3 border-r border-black">Morning</th>
                <th className="px-6 py-3 border-r border-black">Afternoon</th>
                <th className="px-6 py-3">Evening</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {[
                ["Monday", "Strength Training", "Yoga", "HIIT"],
                ["Tuesday", "Cardio", "Zumba", "Boxing"],
                ["Wednesday", "CrossFit", "Pilates", "Mobility"],
                ["Thursday", "Strength Training", "Dance", "HIIT"],
                ["Friday", "Circuit Training", "Zumba", "Stretch & Relax"],
                ["Saturday", "Bootcamp", "-", "Open Gym"],
                ["Sunday", "-", "-", "Rest Day"],
              ].map(([day, morning, afternoon, evening], i) => (
                <tr
                  key={day}
                  className={`transition duration-300 ease-in-out hover:bg-red-900/50 ${
                    i % 2 === 0 ? "bg-[#1a1a1a]" : "bg-[#222]"
                  }`}
                >
                  <td className="px-6 py-4 border-r border-red-600 font-semibold">
                    {day}
                  </td>
                  <td className="px-6 py-4 border-r border-red-600">
                    {morning}
                  </td>
                  <td className="px-6 py-4 border-r border-red-600">
                    {afternoon}
                  </td>
                  <td className="px-6 py-4">{evening}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
