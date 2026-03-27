import { Route } from "react-router";
import { Routes } from "react-router";

import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Create from "../pages/Create";
import RecipesDetails from "../pages/RecipesDetails";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Recipes/RecipesDetails/:id" element={<RecipesDetails />} />
      <Route path="/About" element={<About />} />
      <Route path="/Create" element={<Create />} />
    </Routes>
  );
};

export default Mainroutes;
