import React from "react";
import "./title.css";
const Title = ({ title }) => {
  return (
    <div className="title-container">
      <h2 className="title-title"> {title}</h2>
      <p className="title-paragraph">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
      </p>
    </div>
  );
};

export default Title;
