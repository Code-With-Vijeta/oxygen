import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubscription = (e) => {
    e.preventDefault();

    // Email validation (basic pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      // Navigate to subscription page
      navigate("/subscribe");
    }
  };

  return (
    <footer
      className="relative text-gray-400 py-35"
      style={{
        backgroundImage: "url('./images/footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-opacity-80"></div>

      <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          <div className="mb-8 md:mb-0">
            <img
              src="./images/logo.png"
              alt="Oxygen Gym Logo"
              className="h-16 mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-400 text-lg max-w-md mx-auto md:mx-0">
              Elevate your fitness journey with expert trainers, top-tier
              equipment, and a community that motivates you every step of the
              way.
            </p>
          </div>

          <div className="mb-8 md:mb-0">
            <h4 className="text-2xl font-semibold text-red-500 mb-4">
              Stay Updated
            </h4>
            <p className="text-gray-400 text-lg mb-4">
              Subscribe to our newsletter for the latest news and offers.
            </p>
            <div className="flex justify-center md:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-9 w-40 text-sm px-3 text-gray-200 border-2 border-solid outline-red-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="h-9 text-sm bg-red-500 text-white px-4 hover:border hover:border-red-600 hover:bg-transparent transition-all"
                onClick={handleSubscription}
              >
                Subscribe
              </button>
            </div>

            {/* Display error message */}
            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            <p className="text-gray-400 text-sm italic mt-6 max-w-md mx-auto">
              "Oxygen Gym has transformed my fitness journey. The trainers are
              amazing!"
            </p>
            <span className="text-red-500 font-semibold">- Vijeta Nehra</span>
          </div>

          <div className="text-center md:text-left flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-red-500 mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start gap-8 text-2xl">
              <a
                href="#"
                className="hover:text-red-500 transition duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="hover:text-red-500 transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="hover:text-red-500 transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-600 pt-6 mt-30">
          <p className="text-sm text-gray-200">
            &copy; {new Date().getFullYear()} Oxygen Gym. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-red-500 text-3xl hover:text-red-600 transition mt-4 md:mt-0"
            aria-label="Scroll to top"
          >
            <i className="fa fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
