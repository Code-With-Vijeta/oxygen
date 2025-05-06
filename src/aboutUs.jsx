import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChoseUsSection from "./choseUs";
import Experts from "./experts";
import Contact from "./contact";
import Footer from "./footer";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      img: "./images/client1.webp",
      text: "Joining Oxygen Gym has been the best decision of my life. The trainers are highly skilled, always supportive, and make every workout session both challenging and fun. I’ve never felt this motivated!",
      name: "Aarav Mehta",
    },
    {
      img: "./images/client2.webp",
      text: "Oxygen Gym’s modern equipment, vibrant ambiance, and personalized training plans have helped me stay consistent and achieve my fitness goals faster than I expected.",
      name: "Priya Sharma",
    },
    {
      img: "./images/client3.webp",
      text: "What sets this gym apart is the attention to individual progress and well-being. The staff really cares about your fitness journey, and it shows in every aspect of their service.",
      name: "Rohan Kapoor",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

      <div className="relative h-[600px] w-full">
        <img src="./images/banner.jpg" alt="About Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase">About Us</h1>
        </div>
      </div>

      <ChoseUsSection />

      {/* Video Section with responsiveness */}
      <div className="px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
        <video
            src="./images/aboutUs.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-md"
          ></video>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-red-600 uppercase font-semibold">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold uppercase">What we have done</h2>
          </div>
          <p className="text-gray-300 text-sm sm:text-base">
            Oxygen Gym has empowered hundreds of individuals to transform their lifestyle through disciplined
            training, expert guidance, and a motivating environment. Our programs are designed for everyone—whether you're a beginner or a seasoned athlete—ensuring that every workout counts toward your goals.
          </p>

          <div className="space-y-5">
            <div>
              <p className="mb-1 font-medium text-red-600">Bodybuilding</p>
              <div className="relative w-full h-2 bg-gray-800 rounded-full">
                <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: "80%" }}></div>
                <span className="absolute top-[-30px] right-0 text-sm text-white">80%</span>
              </div>
            </div>

            <div>
              <p className="mb-1 font-medium text-red-600">Training</p>
              <div className="relative w-full h-2 bg-gray-800 rounded-full">
                <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: "85%" }}></div>
                <span className="absolute top-[-30px] right-0 text-sm text-white">85%</span>
              </div>
            </div>

            <div>
              <p className="mb-1 font-medium text-red-600">Fitness</p>
              <div className="relative w-full h-2 bg-gray-800 rounded-full">
                <div className="h-full bg-white rounded-full transition-all duration-1000" style={{ width: "75%" }}></div>
                <span className="absolute top-[-30px] right-0 text-sm text-white">75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />

      {/* Testimonial Section */}
      <div className="bg-zinc-900 py-12 sm:py-16">
        <div className="max-w-[800px] mx-auto px-4 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-10">What Our Clients Say</h2>

          <div className="relative flex items-center justify-center">
            {/* Left Slide Button */}
            <button
              className="absolute left-0 sm:left-4 top-1/2 transform -translate-y-1/2 text-red-600 text-2xl sm:text-3xl hover:text-white transition duration-300"
              onClick={() =>
                setCurrentTestimonial((prev) =>
                  (prev - 1 + testimonials.length) % testimonials.length
                )
              }
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            {/* Testimonial Card */}
            <div className="bg-black/40 rounded-xl p-6 w-full max-w-[600px] flex flex-col items-center text-center shadow-lg transition-all duration-700 ease-in-out">
              <img
                src={testimonials[currentTestimonial].img}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 object-cover border-2 border-red-600 transition-all duration-700"
              />
              <p className="italic text-gray-300 transition-all duration-700">
                "{testimonials[currentTestimonial].text}"
              </p>
              <h4 className="mt-4 font-semibold">{testimonials[currentTestimonial].name}</h4>
              <div className="text-yellow-400 mt-2 text-lg">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>

            {/* Right Slide Button */}
            <button
              className="absolute right-0 sm:right-4 top-1/2 transform -translate-y-1/2 text-red-600 text-2xl sm:text-3xl hover:text-white transition duration-300"
              onClick={() =>
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
              }
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 rounded-full ${
                  idx === currentTestimonial ? "bg-red-600" : "bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <Experts />
      <Footer />
    </div>
  );
};

export default AboutUs;
