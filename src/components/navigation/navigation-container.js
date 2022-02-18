import React from "react";
import { NavLink } from "react-router-dom";

const NavigationComponent = (props) => {

        return (
          <div className="nav-wrapper">
            <div className="left-side">
              <div className="nav-link-wrapper">
                <NavLink exact to="/">
                  Home
                </NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/about-me" activeClassName="nav-link-active">
                  About
                </NavLink>
              </div>

              <div className="nav-link-wrapper">
                <NavLink to="/contact" activeClassName="nav-link-active">
                  Contact
                </NavLink>
              </div>
              
              <div className="nav-link-wrapper">
                <NavLink to="/blog" activeClassName="nav-link-active">
                  Blog
                </NavLink>
              </div>
            </div>

            <div className="right-side">Gary Duncan</div>
          </div>
        );
    }

export default NavigationComponent