import React from "react";
import "./Card.css";
import img from "../../images/lawyer1.jpg";
import { FaPhone } from "react-icons/fa6";

const Card = ({ experience, name, photo }) => {
  console.log(name);
  return (
    <div className="LawyerCard">
      <div className="image-cover">
        <img src={photo} alt="" className="background-img" />
      </div>
      <div className="background-cover"></div>
      <div className="text-area">
        <h4>{name} </h4>
        <h5> {`سابقه کاری : ${experience} سال`} </h5>
      </div>
      <div className="icon">
        <FaPhone size={25} />
      </div>
    </div>
  );
};

export default Card;
