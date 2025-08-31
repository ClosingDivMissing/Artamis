import React from "react";
import "./card.css";
import img from "../../images/lawyer1.jpg";
const Card = () => {
  return (
    <div className="Comment">
      <img src={img} alt="" className="pfp-picture" />
      <h5>احسان ناظری</h5>
      <p>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است وز
      </p>
    </div>
  );
};

export default Card;
