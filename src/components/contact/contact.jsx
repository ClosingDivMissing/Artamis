import React from "react";
import Title from "../title/title";
import "./contact.css";
import curtroom from "../../images/curtroom.jpg";
const Contact = () => {
  return (
    <div className="Contact">
      <Title title="ارتباط با ما" />
      <div className="container">
        <div className="contact-form">
          <div className="pic-side">
            <img src={curtroom} alt="" />
          </div>
          <div className="input-side">
            <h3>اطلاعات خود را وارد کنید</h3>
            <form action="submit">
              <h5>نام خانوادگی</h5>
              <input type="text" />
              <h5>ایمیل ادرس </h5>
              <input type="text" />
              <h5>موضوع ارسالی </h5>
              <input type="text" />
              <button>بزن دیگه</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
