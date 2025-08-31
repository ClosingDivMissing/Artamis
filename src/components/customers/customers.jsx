import React from "react";
import "./customers.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import { FreeMode } from "swiper/modules";
import icon1 from "../../images/Customers/snapfood.png";
import icon2 from "../../images/Customers/digikala.png";
import icon3 from "../../images/Customers/emalls.png";
import icon4 from "../../images/Customers/snap.png";
import icon5 from "../../images/Customers/tapsi.png";
import { delay } from "framer-motion";
const logos = [
  icon1,
  icon2,
  icon4,
  icon3,
  icon5,
  icon1,
  icon2,
  icon4,
  icon3,
  icon5,
  icon3,
  icon5,
];
const Customers = () => {
  return (
    <div className="Customers">
      <div className="container">
        <h2 className="title">مشتریان ما</h2>
        <div className="swiper-cover">
          <Swiper
            breakpoints={{
              290: {
                slidesPerView: 2,
              },
              405: {
                slidesPerView: 3,
              },
              590: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              740: {
                slidesPerView: 5,
              },
              888: {
                slidesPerView: 6,
              },
              1124: {
                slidesPerView: 7,
              },
              1274: {
                slidesPerView: 8,
              },
              1430: {
                slidesPerView: 10,
                spaceBetween: 50,
              },
            }}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            modules={[FreeMode, Autoplay]}
          >
            {logos.map((i) => (
              <SwiperSlide>
                <div className="slide">
                  <img src={i} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Customers;
