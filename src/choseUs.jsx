import React from "react";
import { Link } from "react-router-dom";

const ChoseUsSection = () => {
  const features = [
    {
      icon: "fas fa-biking",
      title: "Modern equipment",
      text: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't and the right tools help make it possible.",
    },
    {
      icon: "fas fa-apple-alt",
      title: "Healthy nutrition plan",
      text: "What you eat in private, you wear it in public also. Fuel your body with the right nutrition and it will return the favor with power and endurance.",
    },
    {
      icon: "fas fa-dumbbell",
      title: "Proffesponal training plan",
      text: "Success in the gym isn't just about lifting weights. It's about lifting your mindset, your habits, and your commitment — with a plan that’s built for you.",
    },
  ];

  return (
    <section className="py-[100px] bg-black text-white">
      <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left">
            <span className="text-red-600 uppercase tracking-widest font-semibold text-sm">
            Why choose us?
            </span>
            <h2 className="text-white mt-2 mb-20 text-4xl font-bold uppercase">
            PUSH YOUR LIMITS FORWARD
            </h2>
          </div>
          <a
            href="/appointment"
            className="mt-6 md:mt-0 bg-red-600 text-white px-6 py-3 font-semibold hover:border hover:border-red-600 hover:bg-transparent transition-all"
          >
            Appointment
          </a>
        </div>

        <div className="flex flex-wrap justify-center">
          {features.map((item, index) => (
            <div
              className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-[30px]"
              key={index}
            >
              <div className="bg-[#111] text-center p-[30px] rounded-md shadow-md hover:bg-[#1c1c1c] transition duration-300 ease-in-out h-full">
                <span className={`${item.icon} text-[50px] text-[#ff0101] block mb-[20px]`}></span>
                <h4 className="text-[20px] text-white capitalize mb-[15px] font-semibold">
                  {item.title}
                </h4>
                <p className="text-[14px] text-[#ccc] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoseUsSection;
