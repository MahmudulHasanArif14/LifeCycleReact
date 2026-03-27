
import { useParams } from "react-router";
import { Recipe } from "../context/RecipeContext";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";

import {  useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const RecipesDetails = () => {
  const { data, setdata } = useContext(Recipe);
  const navigate = useNavigate();

  const param = useParams();
  const recipe = data.find((item) => item.id === parseInt(param.id));

  const editHandler = () => {
    const submitButton = document.querySelector(".submit-button");
    const ingredientsInput = document.getElementById("ingredients");

    if (ingredientsInput) {
      ingredientsInput.removeAttribute("readOnly");
    }
        if (submitButton) {
        submitButton.classList.remove("hidden");
        }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ingredients: recipe ? recipe.ingredients : "No ingredients provided yet.",
    },
  });

  const SubmitHandler = (formData) => {
    const index = data.findIndex((item) => item.id == param.id);

    if (index !== -1) {
      const updatedRecipe = { ...data[index], ...formData };

      const copyData = [...data];
      copyData[index] = updatedRecipe;
        setdata(copyData);
        localStorage.setItem("recipes", JSON.stringify(copyData));
     
        toast.success("Recipe updated successfully!");
        const ingredientsInput = document.getElementById("ingredients");
         const submitButton = document.querySelector(".submit-button");

          if (ingredientsInput) {
            ingredientsInput.setAttribute("readOnly", true);
          }
            if (submitButton) {
              submitButton.classList.add("hidden");
            }
    }
  };

  const deleteHandler = () => {
    const index = data.findIndex((item) => item.id == param.id);
    if (index !== -1) {
      const copyData = [...data];
      copyData.splice(index, 1);
        setdata(copyData);
         localStorage.setItem("recipes", JSON.stringify(copyData));
      navigate("/Recipes");
      toast.success("Recipe deleted successfully!");
    }
  };

     useEffect(() => {
       
        console.log("Home component mounted");
        return () => {
          console.log("Home component unmounted");
        };
     }, []);
    // [] stops the rendering loop by ensuring the effect runs only once when the component mounts and not on every update.
    
    const [favourite, setfavourite] = useState(
      JSON.parse(localStorage.getItem("favouriteRecipes")) || [],
    );

   
    const isFavourite = favourite.some((item) => item.id == recipe?.id);
    console.log(isFavourite);

   const toggleFavourite = (id) => {
     let updatedFavourite = [...favourite];

     const index = updatedFavourite.findIndex((item) => item.id === id);

     if (index !== -1) {
       updatedFavourite.splice(index, 1);
       toast.info("Recipe removed from favourites.");
     } else {
       const recipeToAdd = data.find((item) => item.id === id);
       if (recipeToAdd) {
         updatedFavourite.push(recipeToAdd);
         toast.success("Recipe added to favourites!");
       }
     }

     setfavourite(updatedFavourite);
     localStorage.setItem("favouriteRecipes", JSON.stringify(updatedFavourite));
   };

    useEffect(() => {
      console.log("Favourite updated:", favourite);
    }
    , [favourite]);
    
  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-10">
      <div className="mx-auto w-full max-w-5xl">
        {!recipe ? (
          <div className="rounded-2xl border border-amber-100 bg-white/80 p-10 text-center text-sm text-slate-500 shadow-lg shadow-orange-100/60 backdrop-blur">
            Recipe not found.
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-amber-100 bg-white/90 shadow-2xl shadow-orange-100/60">
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
              {recipe.imageUrl ? (
                <img
                  className="h-full w-full object-cover"
                  src={recipe.imageUrl}
                  alt={recipe.recipeName || recipe.name || "Recipe image"}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
                  No image
                </div>
              )}
              <span className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow">
                {recipe.category || "Uncategorized"}
              </span>
            </div>

            <form
              className="space-y-6 p-6 sm:p-10"
              onSubmit={handleSubmit(SubmitHandler)}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 relative">
                <span>
                    {isFavourite ? (
                      <i onClick={() => toggleFavourite(recipe.id)} className="ri-heart-2-line text-3xl text-red-500 ri-heart-fill"></i>
                    ) : (
                      <i onClick={() => toggleFavourite(recipe.id)} className="ri-heart-add-line text-3xl text-red-500"></i>
                    )}

                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                  Recipe Details
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={editHandler}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-rose-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-100"
                    type="button"
                    onClick={deleteHandler}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                  {recipe.recipeName || recipe.name || "Untitled Recipe"}
                </h1>
                <p className="mt-3 text-sm text-slate-600">
                  {recipe.description || "No description provided yet."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Ingredients
                  </p>

                  <input
                    className="mt-3 text-sm text-slate-700 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                    id="ingredients"
                    type="text"
                    {...register("ingredients")}
                    readOnly
                  />
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Category
                  </p>
                  <p className="mt-3 text-sm font-medium text-slate-700">
                    {recipe.category || "Uncategorized"}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Instructions
                </p>
                <p className="mt-3 whitespace-pre-line text-sm text-slate-700">
                  {recipe.instructions || "No instructions provided yet."}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3">
                <button
                  className="hidden rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 submit-button"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipesDetails;
