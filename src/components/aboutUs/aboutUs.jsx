import React from "react";
import "./aboutUs.css";

import squareBg from "../../images/square.png";
import lawyer1 from "../../images/Lawyers/lawyer1.png";
import lawyer2 from "../../images/Lawyers/lawyer2.png";
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="container">
        <div className="circle_bg"></div>
        <div className="about-use-section">
          <div className="text-side">
            <h2>درباره ما</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              فارسی ایجاد کرد، در ادنیای موجود طراحی اساسا مورد استفاده قرار
              گیرد.
            </p>
            <button>جستجو بیشتر</button>
          </div>
          <div className="img-side">
            <div className="img-cover">
              <img src={lawyer1} alt="" />
              <img src={squareBg} alt="" />
            </div>
          </div>
        </div>
        <div className="about-work-section">
          <div className="text-side">
            <h2> نحوه کار ما</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              فارسی ایجاد کرد، در ادنیای موجود طراحی اساسا مورد استفاده قرار
              گیرد.
            </p>
            <button>جستجو بیشتر</button>
          </div>
          <div className="img-side">
            <div className="img-cover">
              <img src={lawyer2} alt="" />
              <img src={squareBg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
