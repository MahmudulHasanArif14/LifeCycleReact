import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Recipe } from "../context/RecipeContext.jsx";

const Create = () => {
  const { data, setdata } = useContext(Recipe);

  // declative way to create form and handle form state and validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (formData) => {
    formData.id = nanoid();

    const copyData = [...data];
    copyData.push(formData);
    setdata(copyData);

    reset();
  };

  return (
    <div className="container w-screen min-h-screen mx-auto">
      <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-10">
        <div className="mx-auto w-full max-w-3xl">
          <div className="rounded-2xl border border-amber-100 bg-white/80 p-6 shadow-xl shadow-orange-100/60 backdrop-blur sm:p-10">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                New Recipe
              </p>
              <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Create something delicious
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Add your recipe details so others can cook along.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit(SubmitHandler)}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Image URL
                </label>
                <input
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                  type="url"
                  name="imageUrl"
                  placeholder="https://example.com/recipe.jpg"
                  {...register("imageUrl", {
                    required: "Image URL is required",
                  })}
                />
                {errors.imageUrl && (
                  <p className="text-xs text-rose-600">
                    {errors.imageUrl.message}
                  </p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Recipe Name
                  </label>
                  <input
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                    type="text"
                    name="recipeName"
                    placeholder="Spicy Garlic Noodles"
                    {...register("recipeName", {
                      required: "Recipe name is required",
                    })}
                  />
                  {errors.recipeName && (
                    <p className="text-xs text-rose-600">
                      {errors.recipeName.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">
                    Ingredients
                  </label>
                  <textarea
                    className="resize-none min-h-30 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                    name="ingredients"
                    placeholder="Noodles, garlic, soy sauce, chili flakes..."
                    {...register("ingredients", {
                      required: "Ingredients are required",
                    })}
                  />
                  {errors.ingredients && (
                    <p className="text-xs text-rose-600">
                      {errors.ingredients.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Category
                </label>
                <select
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                  name="category"
                  defaultValue=""
                  {...register("category", {
                    required: "Category is required",
                  })}
                >
                  <option value="" disabled>
                    Select a category
                  </option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="snack">Snack</option>
                  <option value="dessert">Dessert</option>
                  <option value="drink">Drink</option>
                </select>
                {errors.category && (
                  <p className="text-xs text-rose-600">
                    {errors.category.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Description
                </label>
                <textarea
                  className="min-h-27.5 w-full rounded-xl border border-slate-200 resize-none bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                  name="description"
                  placeholder="A quick, cozy dish with punchy garlic heat."
                  {...register("description", {
                    required: "Description is required",
                  })}
                />
                {errors.description && (
                  <p className="text-xs text-rose-600">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">
                  Instructions
                </label>
                <textarea
                  className="resize-none min-h-35 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-100"
                  name="instructions"
                  placeholder="1) Cook noodles... 2) Sizzle garlic..."
                  {...register("instructions", {
                    required: "Instructions are required",
                  })}
                />
                {errors.instructions && (
                  <p className="text-xs text-rose-600">
                    {errors.instructions.message}
                  </p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <p className="text-xs text-slate-400">
                  Tip: Use clear, step-by-step instructions for best results.
                </p>
                <button
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-slate-800 active:translate-y-0"
                  type="submit"
                >
                  Save Recipe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
