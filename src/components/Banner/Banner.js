import React from "react";
import "./banner.css";
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { BannerImage } from "../../Data";

const Banner = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
      loop={true}
      effect="fade"
      slidesPerView="auto"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="banner_slider"
    >
      {BannerImage.map((banner) => (
        <SwiperSlide key={banner.id} className="banner_slide">
          <span
            style={{
              background: "orange",
              color: "#fff",
              position: "absolute",
              height: "40px",
              marginTop: "5rem",
              paddingLeft: "3rem",
              padding: "1rem",
              fontSize: "1.3rem",
              fontWeight: "600",
            }}
          >
            {banner.description}
          </span>
          <img src={banner.image} alt={banner.description} style={{}} />
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default Banner;
