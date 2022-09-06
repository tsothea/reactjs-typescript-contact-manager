import React from "react";
import {NavLink, useLocation} from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
      <nav id="sidebar">
        <div className="img bg-wrap text-center py-4">
          <div className="user-logo">
            <div className="img"></div>
            <h2 className="title">John Doe</h2>
            <p className="color-blue">SubScript, CEO</p>
          </div>
        </div>
        <ul className="list-unstyled components mb-5">
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <NavLink to="/">
              <span className="fa fa-home mr-3"></span> Home
            </NavLink>
          </li>
          <li className={splitLocation[1] === "contacts" ? "active" : ""}>
            <NavLink to="contacts">
              <span className="fa fa-address-book mr-3"></span> Contacts
            </NavLink>
          </li>
          <li className={splitLocation[1] === "favorites" ? "active" : ""}>
            <NavLink to="favorites">
              <span className="fa fa-heart mr-3"></span> Favourites
            </NavLink>
          </li>
          <li className={splitLocation[1] === "people" ? "active" : ""}>
            <NavLink to="people">
              <span className="fa fa-users mr-3"></span> People
            </NavLink>
          </li>
          <li className={splitLocation[1] === "companies" ? "active" : ""}>
            <NavLink to="companies">
              <span className="fa fa-id-card mr-3"></span> Companies
            </NavLink>
          </li>
        </ul>
        <div className="menu-bottom">
          <NavLink to="setting"><i className="fa fa-cog"></i> Setting</NavLink>
          <NavLink to="logout"><i className="fa fa-sign-out"></i> Logout</NavLink>
        </div>

      </nav>

  );
}
