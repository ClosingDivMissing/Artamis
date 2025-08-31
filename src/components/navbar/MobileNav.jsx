import React from "react";
import "./MobileNav.css";
import logo from "../../images/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";

import { nav_items } from "./navbar";
const MobileNav = ({ setNavActive }) => {
  console.log(nav_items);
  const handleCoverClick = (e) => {
    if (e.target.classList.contains("nav-cover")) {
      setNavActive(false);
    }
  };

  return (
    <motion.div
      className="nav-cover"
      onClick={handleCoverClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="mb-Navbar"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{
          type: "spring",
        }}
      >
        <div className="container">
          <div className="nav-items">
            {nav_items.map((i, index) => {
              return (
                <i
                  onClick={() => {
                    setNavActive(false);
                    if (i.to === "Home") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      const element = document.querySelector(`.${i.to}`);
                      if (element)
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {i.title}
                </i>
              );
            })}
          </div>

          <div className="nav-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="close-nav" onClick={() => setNavActive(false)}>
            <MdOutlineClose size={50} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileNav;
