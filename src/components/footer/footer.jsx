import React from "react";
import "./footer.css";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-about">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز
        </div>
        <ul>
          <h5>ایتم ها</h5>
          <li>خانه</li>
          <li>درباره</li>
          <li>وکلای ما</li>
          <li>خدمات</li>
          <li>تماس با ما</li>
        </ul>
        <ul>
          <h5>ایتم ها</h5>
          <li>خانه</li>
          <li>درباره</li>
          <li>وکلای ما</li>
          <li>خدمات</li>
          <li>تماس با ما</li>
        </ul>
        <ul>
          <h5>ایتم ها</h5>
          <li>خانه</li>
          <li>درباره</li>
          <li>وکلای ما</li>
          <li>خدمات</li>
          <li>تماس با ما</li>
        </ul>
        <div className="icon">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
