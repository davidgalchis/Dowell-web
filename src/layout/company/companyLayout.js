import "./companyLayout.css";
import { LatestNews } from "../../Data";

import { BiSearch } from "react-icons/bi";

// Swiper
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Outlet, useLocation } from "react-router";

const CompanyLayout = () => {
  const location = useLocation();
  const myLocation = location.pathname.split("/");

  console.log(myLocation[2]);
  return (
    <section className="about_us">
      <div className="tab">
        <h1 style={{ textTransform: "uppercase" }}>
          {myLocation[2] || myLocation}
        </h1>
      </div>
      <div>
        <article>
          <Outlet />
        </article>

        <aside>
          <div className="color_line">
            <div className="orange"></div>
          </div>
          <section className="search">
            <div>
              <input type="text" placeholder="Search MatroPetroserve" />
            </div>
          </section>
          <section className="news_section">
            <h1>Latest News</h1>
            <div className="color_line">
              <div className="orange"></div>
            </div>
            <Swiper
              direction={"vertical"}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {LatestNews.map((news) => (
                <SwiperSlide key={news.id}>
                  <h2> {news.title} </h2>
                  <p>{news.description}</p>
                </SwiperSlide>
              ))}{" "}
            </Swiper>
          </section>
        </aside>
      </div>
    </section>
  );
};

export default CompanyLayout;
