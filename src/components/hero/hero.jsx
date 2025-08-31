import React from "react";
import "./hero.css";
import CountUp from "react-countup";
import backgroundLogo from "../../images/BG_LOGO.png";
import backgroundText from "../../images/BG_TEXT.png";
import ParticleBackground from "../Particle/ParticleBackground";
const hero_stats = [
  {
    title: "پرونده موفق",

    number: Math.floor(Math.random() * 100),
  },
  {
    title: "پرونده جاری",

    number: Math.floor(Math.random() * 100),
  },
  {
    title: "سابقه",

    number: Math.floor(Math.random() * 100),
  },
  {
    title: "پرونده معلق",

    number: Math.floor(Math.random() * 100),
  },
];
const Hero = () => {
  return (
    <div className="Hero">
      <div className="background">
        <img src={backgroundLogo} alt="" />
        <img src={backgroundText} alt="" />
        <div className="bg_blur"></div>
        <div className="bg_particle">
          <ParticleBackground id="tsparticles" />
        </div>
      </div>
      <div className="container">
        <div className="stats">
          {hero_stats.map((item) => {
            return (
              <div className="stats_item">
                <div className="state_title">{item.title}</div>
                <div className="state_number">
                  +
                  {
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2}
                      separator=","
                    />
                  }
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
