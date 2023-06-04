import React from "react";
import logo from "./images/logo.png";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* logo*/}
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navigate">
        {/* list by each category...return a value when each link is clicked*/}
        <i class="fa-solid fa-bars"></i>
        <NavLink to="/">Characters</NavLink>
        <NavLink to="/comics">Comics</NavLink>
        <NavLink to="/creators">Creators</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/stories">Stories</NavLink>
      </div>
    </div>
  );
};
