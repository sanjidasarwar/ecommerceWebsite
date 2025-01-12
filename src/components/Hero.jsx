import React from "react";
import { slider1, slider2, slider3 } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  const slides = [
    {
      id: 1,
      background: `url(${slider1})`,
      title: "men's fashion",
      subtitle: "new arrivals",
      price: "start at $99.00",
    },
    {
      id: 2,
      background: `url(${slider2})`,
      title: "kid's fashion",
      subtitle: "new arrivals",
      price: "start at $49.00",
    },
    {
      id: 3,
      background: `url(${slider3})`,
      title: "winter collection",
      subtitle: "new arrivals",
      price: "start at $99",
    },
  ];

  return (
    <Swiper
      className="mySwiper"
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      autoplay
      pagination={true}
      loop={true}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            key={slide.id}
            className="flex-none w-full h-[500px] bg-cover bg-center relative"
            style={{ backgroundImage: slide.background }}
          >
            <div className="absolute inset-0 flex flex-col justify-start items-start p-8 text-left translate-x-10 translate-y-10">
              <h3 className="text-lg uppercase tracking-widest">
                {slide.subtitle}
              </h3>
              <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
              <h6 className="text-lg mb-4">{slide.price}</h6>
              <a
                href="#"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full text-sm transition"
              >
                Shop Now
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
