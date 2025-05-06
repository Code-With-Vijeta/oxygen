import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import ChoseUsSection from "./choseUs";
import Offer from "./offer";
import Contact from "./contact";
import Gallery from "./galary";
import Experts from './experts';
import Footer from "./footer";
import AboutUs from "./aboutUs";
import Team from "./team";
import Classes from "./classes";
import ContactUs from "./contactUs";
import Appointment from "./appointment";
import Subscription from "./subscription";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black/80 shadow-md px-5 py-3 fixed w-full z-[1000]">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap">
        <img className="h-[68px] mt-3" src="./images/logo.png" alt="logo" />

        <button className="text-white text-2xl bg-none border-none cursor-pointer block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
};

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [fadeKey, setFadeKey] = useState(0);

  const slides = [
    {
      image: "./images/carousel1.png",
      span: "Shape your body",
      title: "Be <strong>strong</strong> training hard",
    },
    {
      image: "./images/carousel2.png",
      span: "Push your limits",
      title: "Achieve <strong>greatness</strong> daily",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setFadeKey((prevKey) => prevKey + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-[1040px]">
      <img
        src={slides[index].image}
        alt="carousel"
        className="w-full h-[1040px] object-cover transition-opacity duration-500"
      />
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[57%] text-white z-10 text-left pr-4 sm:pr-8 md:pr-12 lg:pr-16">
        <span className="block text-lg text-white uppercase font-bold tracking-[6px] mb-4">
          {slides[index].span}
        </span>
        <h1
          key={fadeKey}
          className="uppercase font-bold text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-tight mb-10 font-oswald opacity-0 translate-y-10 animate-fadeSlideUp"
          dangerouslySetInnerHTML={{ __html: slides[index].title }}
        ></h1>
        <a
          href="/contact"
          className="inline-block text-sm py-4 px-8 text-white bg-red-600 uppercase font-bold tracking-wider hover:border hover:border-red-600 hover:bg-transparent transition-all"
        >
          Get info
        </a>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <ChoseUsSection />
              <Offer />
              <Contact />
              <Gallery />
              <Experts />
              <Footer />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/subscribe" element={<Subscription />} />
      </Routes>
    </Router>
  );
};

export default App;
