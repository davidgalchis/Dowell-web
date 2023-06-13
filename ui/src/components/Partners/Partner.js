import React from "react";
import "./partner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Partners } from "../../Data";

const Partner = () => {
  return (
    <section className="partners_wrapper">
      <div className="tab">
        <span>Partners</span>
        <span>Ensuring excellence in service delivery...</span>
      </div>

      <div className="partners_container">
        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          spaceBetween={5}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {Partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <img src={partner.image} alt="" className="partner" />
            </SwiperSlide>
          ))}
          ...
        </Swiper>
      </div>
    </section>
  );
};

export default Partner;
