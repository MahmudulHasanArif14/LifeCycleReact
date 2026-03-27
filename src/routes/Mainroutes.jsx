import { Route } from "react-router";
import { Routes } from "react-router";

import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import Create from "../pages/Create";
import RecipesDetails from "../pages/RecipesDetails";
import PageNotFound from "../pages/PageNotFound";
import Fav from "../pages/Fav";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Recipes" element={<Recipes />} />
      <Route path="/Recipes/RecipesDetails/:id" element={<RecipesDetails />} />
      <Route path="/About" element={<About />} />
      <Route path="/Create" element={<Create />} />
      <Route path="*" element={<PageNotFound />} />{" "}
      {/* Optional: A route to handle 404 Not Found wild card route */}
      <Route path="/Favourite" element={<Fav />} />
    </Routes>
  );
};

export default Mainroutes;
