// src/components/HeroBanner/HeroBanner.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner from "./imgs/banner.jpg"; // імпорт зображення
import "./HeroBanner.scss"; // власні стилі

// slides.js
export const slides = [
  {
    subtitle: "Urban / Portraits",

    title: "Summer Essentials",

    tagline: "cool / colorful / comfy",

    cta: "Explore",

    bg: "#00AEEF",
  },
  {
    subtitle: "Nature / Landscapes",
    title: "Lovely Pack",
    tagline: "fresh / vibrant / scenic",
    cta: "View",
    bg: "#00AEEF",
  },
];

export default function HeroBanner() {
  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={1}
        loop
        navigation /* стрілки */
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        speed={700}
      >
        {slides.map((s) => (
          <SwiperSlide key={s.title}>
            <div className="slide" style={{ backgroundColor: s.bg }}>
              <div className="slide__content">
                <p className="slide__subtitle">{s.subtitle}</p>
                <h2 className="slide__title">{s.title}</h2>
                <p className="slide__tag">{s.tagline}</p>
                <button className="btn">{s.cta}</button>
              </div>
              <img
                src="https://picsum.photos/1600?random=11"
                alt={s.title}
                className="slide__img"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
