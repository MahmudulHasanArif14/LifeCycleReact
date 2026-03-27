import React from 'react'
import { Link } from 'react-router';
import { useContext } from 'react';
import { Recipe } from '../context/RecipeContext';

const Recipescard = (props) => {
    console.log(props.data.id);
  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {props.data.map((item) => {
          const title = item.recipeName || item.name || "Untitled Recipe";
          const category = item.category || "Uncategorized";
          return (
            <Link
              to={`RecipesDetails/${item.id}`}
              className="group overflow-hidden rounded-2xl border border-amber-100 bg-white/95 shadow-xl shadow-orange-100/60 transition hover:-translate-y-1 hover:shadow-2xl"
              key={item.id}
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                {item.imageUrl ? (
                  <img
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    src={item.imageUrl}
                    alt={title}
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
                    No image
                  </div>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow">
                  {category}
                </span>
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-500">
                    Recipe
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                    {title}
                  </h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Ingredients
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      {item.ingredients || "No ingredients provided yet."}
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Category
                    </p>
                    <p className="mt-2 text-sm font-medium text-slate-700">
                      {category}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Description
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    {item.description || "No description provided yet."}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Instructions
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm text-slate-700">
                    {item.instructions || "No instructions provided yet."}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Recipescard