import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const teamMembers = [
  { name: "Athart Rachel", role: "Gym Trainer", image: "./images/expert1.png" },
  { name: "Jordan Blake", role: "Strength Coach", image: "./images/expert2.jpg" },
  { name: "Maya Chen", role: "Fitness Instructor", image: "./images/expert3.jpg" },
  { name: "Leo Fernandez", role: "Bodybuilding Coach", image: "./images/expert4.jpg" },
  { name: "Sasha Kapoor", role: "Cardio Specialist", image: "./images/expert5.jpg" },
  { name: "Dylan West", role: "Personal Trainer", image: "./images/expert6.jpg" },
];


export default function TeamSection() {
  return (
    <div className="bg-black text-white">
      {/* Carousel Section */}
      <div className="container mx-auto py-16 px-4 md:px-40">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-center md:text-left">
            <span className="text-red-600 uppercase tracking-widest font-semibold text-sm">
              Our Experts
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

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={800}
          effect="slide"
          modules={[Pagination, Autoplay, EffectFade]}
          className="team-swiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className="relative overflow-hidden shadow-lg group h-[500px] bg-center bg-cover transition-all duration-700 ease-in-out"
                style={{ backgroundImage: `url(${member.image})` }}
              >
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 bg-black h-[120px] opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center p-6 z-10">
                  <h4 className="text-white text-2xl font-bold">
                    {member.name}
                  </h4>
                  <span className="text-red-400 mt-1">{member.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination mt-6 flex justify-center space-x-4"></div>
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
    </div>
  );
}
