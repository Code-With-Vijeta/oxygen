import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Subscription = () => {
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
      <div className="relative h-[500px] w-full">
        <img
          src="./images/banner.jpg"
          alt="Subscription Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold uppercase">Subscribe</h1>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="px-6 md:px-20 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Find a membership plan that fits your fitness journey and budget.</p>
        </div>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Basic", price: "$29", features: ["Gym Access", "Free Wi-Fi", "Locker Facility"] },
            { name: "Standard", price: "$49", features: ["Everything in Basic", "Group Classes", "1 Personal Training Session"] },
            { name: "Premium", price: "$79", features: ["Everything in Standard", "Unlimited PT Sessions", "Diet Consultation"] }
          ].map((plan, index) => (
            <div key={index} className="bg-[#111] p-8 rounded-lg border border-red-600 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-red-500 mb-4">{plan.price}/mo</p>
              <ul className="text-gray-400 space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded transition">
                Subscribe
              </button>
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

    </div>
  );
};

export default Subscription;