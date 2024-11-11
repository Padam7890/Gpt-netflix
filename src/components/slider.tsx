import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

interface item {
  src: string;
  alt: string;
  title: string;
  description: string;
}
interface itemsProps {
  items: item[];
}

//swiper responsive MEDIA QUERy

const Slider = ({ items }: itemsProps) => {
  return (
    <Swiper
      breakpoints={{
        
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 35,
        },
      }}
      modules={[Navigation, Autoplay, Pagination]}
      spaceBetween={25}
      slidesPerView={1}
      autoplay
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((items, index) => {
        return (
          <SwiperSlide className=" bg-red-500 bg-opacity-25 p-2" key={index}>
            <img src={items.src} alt={items.alt} />
            <div className="flex gap-4 flex-col">
              <h3 className="text-2xl">{items.title}</h3>
              <p>{items.description}</p>
            </div>
            <div className="flex justify-end mt-4">
              <button className="p-2 bg-red-500 text-white rounded-lg text-sm font-semibold hover:bg-red-400 transition-colors duration-200">
                Watch Now
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
