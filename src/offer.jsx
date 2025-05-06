import React from "react";

const classes = [
  {
    img: './images/class1.png',
    category: 'STRENGTH',
    title: 'Weight Lifting',
  },
  {
    img: './images/class2.png',
    category: 'Cardio',
    title: 'Indoor Cycling',
  },
  {
    img: './images/class3.png',
    category: 'HIIT',
    title: 'Fat Burn Express',
  },
];

const Card = ({ item }) => {
  return (
    <div className="bg-[#1e1e1e] border border-[#292929] rounded-md overflow-hidden flex flex-col h-[500px] transition-transform duration-300 ease-in-out shadow-[0_10px_25px_rgba(255,60,60,0.05)] hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(255,60,60,0.15)] relative">
      <div className="h-[250px] bg-[#111] flex items-center justify-center">
        <img
          src={item.img}
          alt={item.title}
          className="max-w-full max-h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6">
        <span className="text-sm text-[#ff3c3c] font-semibold uppercase tracking-wider">{item.category}</span>
        <h4 className="text-white text-xl mt-2 font-bold">{item.title}</h4>
        <a
          href="#"
          className="mt-auto text-[#ff3c3c] text-base inline-flex items-center gap-2 font-semibold hover:text-[#ff7070] transition-colors duration-300"
        >
          Explore <i className="fa fa-angle-right"></i>
        </a>
      </div>
    </div>
  );
};

const ClassesSection = () => {
  return (
    <section className="bg-[#121212] text-white font-[Segoe_UI] px-4 sm:px-10 lg:px-40">
      <div className="container mx-auto py-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left">
            <span className="text-red-600 uppercase tracking-widest font-semibold text-sm">
              Our Classes
            </span>
            <h2 className="text-white mt-2 mb-20 text-4xl font-bold">
              WHAT WE CAN OFFER
            </h2>
          </div>
          <a
            href="/appointment"
            className="mt-6 md:mt-0 bg-red-600 text-white px-6 py-3 font-semibold hover:border hover:border-red-600 hover:bg-transparent transition-all"
          >
            Appointment
          </a>
        </div>
        <div className="grid gap-[45px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassesSection;
