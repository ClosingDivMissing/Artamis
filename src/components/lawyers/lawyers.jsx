import React from "react";
import "./lawyers.css";
import lawyerBg from "../../images/customerBg.png";
import Card from "../lawyerCard/Card";
import lawyer1 from "../../images/Lawyers/lawyer1.png";
import lawyer2 from "../../images/Lawyers/lawyer2.png";
import lawyer3 from "../../images/Lawyers/lawyer3.png";
import lawyer4 from "../../images/Lawyers/lawyer4.png";
import Title from "../title/title";
const lawyersList = [
  {
    name: "محمد محمدی",
    experience: 4,
    photo: lawyer1,
  },
  {
    name: "ارسلان ارسلانی ",
    experience: 2,
    photo: lawyer2,
  },
  {
    name: "ایلیا ایلیایی ",
    experience: 10,
    photo: lawyer3,
  },
  {
    name: " مهدی کریمی",
    experience: 4,
    photo: lawyer4,
  },
];
const Lawyers = () => {
  return (
    <div className="Lawyers">
      <div className="container">
        <Title title="وکلای برتر" />
        <div className="card-section">
          {lawyersList.map((item) => (
            <Card
              name={item.name}
              experience={item.experience}
              photo={item.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
