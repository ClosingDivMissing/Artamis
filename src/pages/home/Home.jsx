import React from "react";
import "./Home.css";
import Hero from "../../components/hero/hero";
import AboutUs from "../../components/aboutUs/aboutUs";
import Lawyers from "../../components/lawyers/lawyers";
import Customers from "../../components/customers/customers";
import Contact from "../../components/contact/contact";
import Views from "../../components/views/views";
const Home = () => {
  return (
    <div className="Home">
      <Hero />
      <AboutUs />
      <Lawyers />
      <Customers />
      <Contact />
      <Views />
    </div>
  );
};

export default Home;
