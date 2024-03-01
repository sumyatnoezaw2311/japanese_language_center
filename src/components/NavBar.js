import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavLogo from "../assets/images/kakehashi_logo.jpg";

function NavBar(props) {
  const location = useLocation();
  let currentUrl = location.pathname;

  let [isOpened, setIsOpened] = useState(false);
  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const myData = props.courses;
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-0 navbarCutstomize">
      <div className="container-fluid bg-primary py-3 d-flex align-items-center">
        <Link to={"/"}>
          <div
            className="navbar-brand"
            style={{ backgroundImage: `url(${NavLogo})` }}
          ></div>
        </Link>
        <button
          onClick={toggleMenu}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="border-none">
            {isOpened ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </span>
        </button>
        <div
          className={isOpened ? "navbar-collapse" : "navbar-collapse isOpened"}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-3 mt-lg-0">
            <li className="nav-item" onClick={toggleMenu}>
              <Link
                className="nav-link text-light px-3"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <div
                className={
                  currentUrl === "/"
                    ? "navbarSlider mx-2 sliderActive"
                    : "navbarSlider mx-2"
                }
              ></div>
            </li>
            {
              props.courses.map((el,index)=>{
                return (
                  <li className="nav-item" onClick={toggleMenu} key={index}>
                  <Link
                    className="nav-link text-light px-3"
                    aria-current="page"
                    to={`/courses/${el.name.replace(" ","_")}`}
                    state={myData}
                  >
                    {el.name}
                  </Link>
                  <div
                    className={
                      currentUrl === `/courses/${el.name.replace(" ","_")}`
                        ? "navbarSlider mx-2 sliderActive"
                        : "navbarSlider mx-2"
                    }
                  ></div>
                </li>
                )
              })
            }
            {/* <li className="nav-item" onClick={toggleMenu}>
              <Link
                className="nav-link text-light px-3"
                aria-current="page"
                to="/courses/japanese-courses"
              >
                Japanese Courses
              </Link>
              <div
                className={
                  currentUrl === "/courses/japanese-courses"
                    ? "navbarSlider mx-2 sliderActive"
                    : "navbarSlider mx-2"
                }
              ></div>
            </li> */}
            {/* <li className="nav-item" onClick={toggleMenu}>
              <Link
                className="nav-link text-light px-3"
                aria-current="page"
                to="/courses/it-courses"
              >
                IT Courses
              </Link>
              <div
                className={
                  currentUrl === "/courses/it-courses"
                    ? "navbarSlider mx-2 sliderActive"
                    : "navbarSlider mx-2"
                }
              ></div>
            </li> */}
            <li className="nav-item" onClick={toggleMenu}>
              <Link
                className="nav-link text-light px-3"
                aria-current="page"
                to="/news"
              >
                News
              </Link>
              <div
                className={
                  currentUrl === "/news"
                    ? "navbarSlider mx-2 sliderActive"
                    : "navbarSlider mx-2"
                }
              ></div>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link
                className="nav-link text-light px-3"
                aria-current="page"
                to="/gallery"
              >
                Gallery
              </Link>
              <div
                className={
                  currentUrl === "/gallery"
                    ? "navbarSlider mx-2 sliderActive"
                    : "navbarSlider mx-2"
                }
              ></div>
            </li>
            <li className="nav-item" onClick={toggleMenu}>
              <Link
                className="nav-link text-light px-3"
                aria-current="page"
                to="/about-us"
              >
                About
              </Link>
              <div
                className={
                  currentUrl === "/about-us"
                    ? "navbarSlider mx-2 sliderActive"
                    : "navbarSlider mx-2"
                }
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
