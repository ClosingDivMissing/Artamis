import React from "react";
import "./views.css";
import Title from "../title/title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FreeMode } from "swiper/modules";
import Comment from "../comment/card";

const Views = () => {
  return (
    <div className="Views">
      <Title title="نظرات شما" />
      <div className="container">
        <div className="view-slider">
          <Swiper
            breakpoints={{
              850: {
                slidesPerView: 2,
              },

              1430: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            modules={[FreeMode]}
            spaceBetween={10}
          >
            {Array(12)
              .fill()
              .map((i) => (
                <SwiperSlide>
                  <Comment />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Views;
