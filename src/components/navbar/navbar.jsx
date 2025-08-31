import React, { useEffect, useState } from "react";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../images/logo.png";

export const nav_items = [
  {
    title: "خانه",
    to: "Home",
  },
  {
    title: "درباره ما",
    to: "AboutUs",
  },
  {
    title: "وکلای ما",
    to: "Lawyers",
  },
  {
    title: "مشتری ها",
    to: "Customers",
  },
  {
    title: "تماس با ما",
    to: "Contact",
  },
];
const Navbar = ({ setNavActive, navActive }) => {
  const [mobileActive, setMobileActive] = useState(window.innerWidth < 900);
  const [onScroll, setOnScroll] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setMobileActive(true);
      } else {
        setMobileActive(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setOnScroll(true);
      } else {
        setOnScroll(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();
    handleScroll();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`Navbar  ${onScroll ? "onScroll" : ""}`}>
      <div className="container">
        {mobileActive ? (
          <div onClick={() => setNavActive(true)} className="hamburger-menu">
            <RxHamburgerMenu size={40} />
          </div>
        ) : (
          <>
            <div className="nav-buttons">
              <button>پشتیبانی</button>
              <button>سفارش</button>
            </div>

            <div className="nav-items">
              {nav_items.map((i) => {
                return (
                  <i
                    onClick={() => {
                      const element = document.querySelector(`.${i.to}`);
                      if (i.to === "Home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const element = document.querySelector(`.${i.to}`);
                        if (element)
                          element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {" "}
                    {i.title}
                  </i>
                );
              })}
            </div>
          </>
        )}
        <div className="nav-logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
