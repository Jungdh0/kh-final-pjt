import React, {useState} from "react";
import { Link } from "react-router-dom";
import OpenMenu from "./OpenMenu";
import {slide as Menu} from "react-burger-menu";

const Header = () => {

  return (
    <div>
      <header className="header_in clearfix element_to_stick">
        <div className="layer" />
        {/*Opacity Mask Menu Mobile*/}
        <div className="container">
          <div className="logo">
            <Link to="/mainPage">
              <img
                src="img/popcon_logo_test.png"
                alt=""
                width="160.62"
                height="31"
                className="dark"
              />
            </Link>
          </div>
          {/*<div id="burger_menu">*/}
          {/*  <OpenMenu pageWrapId={"page-wrap"} outerContainerId={"burger_menu"}/>*/}
          {/*</div>*/}
          <Link to="##" className="open_close">
            <i className="bi bi-list" />
            <span>Menu</span>
          </Link>
          <nav className="main-menu">
            <div id="header_menu">
              <Link to="##" className="open_close">
                <i className="bi bi-x" />
              </Link>
              <Link to="/mainPage" className="logo_menu">
                <img
                  src="img/popcon_logo_test.png"
                  alt=""
                  width="160.62"
                  height="31"
                  className="dark lazy"
                />
              </Link>
            </div>

            <ul>
              <li className="submenu">
                <Link to="/mainPage" className="show-submenu">
                  Home
                </Link>
              </li>
              <li className="submenu">
                <Link to="/explorePage" className="show-submenu">
                  Explore
                </Link>
              </li>
              <li className="submenu">
                <Link to="/likePage" className="show-submenu">
                  Like
                </Link>
              </li>
              <li className="submenu">
                <Link to="/myPage" className="show-submenu">
                  My page
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*/header*/}
    </div>
  );
};

export default Header;
