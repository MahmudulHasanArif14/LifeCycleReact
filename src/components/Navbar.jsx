import React from "react";
import { NavLink } from "react-router";


const Navbar = () => {
  return (
    <div className="flex gap-5 text-lg mb-5 items-center justify-center">
      <NavLink
        to="/"
        className={(e) => (e.isActive ? "text-green-500" : "text-white")}
      >
        Home
      </NavLink>

      <NavLink
        to="/Recipes"
        className={(e) => (e.isActive ? "text-green-500 " : "text-white")}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/about"
        className={(e) => (e.isActive ? "text-green-500" : "text-white")}
      >
        About
      </NavLink>

      <NavLink
        to="/Create"
        className={(e) =>
          (e.isActive ? "text-green-500" : "text-white") +
          " border-none bg-gray-900 px-2 py-1 rounded"
        }
      >
        Create Recipe
      </NavLink>

      <NavLink
        to="/Favourite"
        className={(e) => (e.isActive ? "text-green-500" : "text-white")}
      >
        Favourite
      </NavLink>
    </div>
  );
};

export default Navbar;
