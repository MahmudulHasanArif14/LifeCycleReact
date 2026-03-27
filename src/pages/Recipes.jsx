import React, { useContext } from "react";
import { Recipe } from "../context/RecipeContext";
import Recipescard from "../components/Recipescard";
const Recipes = () => {
  const { data } = useContext(Recipe);
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            Recipes
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Freshly created dishes
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Browse your latest recipes and pick what to cook next.
          </p>
        </div>

        {data.length === 0 ? (
          <div className="rounded-2xl border border-amber-100 bg-white/80 p-10 text-center text-sm text-slate-500 shadow-lg shadow-orange-100/60 backdrop-blur">
            No recipes yet. Create one to see it here.
          </div>
        ) : (
        <Recipescard data={data}/>
        )}
      </div>
    </div>
  );
};

export default Recipes;
