import { get } from "react-hook-form";
import { useContext, useEffect } from "react";
import { Recipe } from "../context/RecipeContext";
import axios from "axios";

const Home = () => {
  const getProduct = async () => {
    try {
      const { data } = await axios.get("https://fakestoreapi.com/products/1");
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  getProduct();


  useEffect(() => {
    getProduct();
    console.log("Home component mounted");
    return () => {
      console.log("Home component unmounted");
    };
  }, );






  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-900">
        Welcome to RecipeHub
      </h1>
      <p className="text-lg text-slate-600 mt-4">
        Discover and share delicious recipes from around the world.
      </p>
    </div>
  );
};

export default Home;
