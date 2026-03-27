import React from "react";

const Fav = () => {
  const favouriteRecipes =
    JSON.parse(localStorage.getItem("favouriteRecipes")) || [];

  console.log("Favourite Recipes:", favouriteRecipes);
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-10">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
            Favorites
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Your saved recipes
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Keep your best picks ready for the next cook.
          </p>
        </div>

        {favouriteRecipes.length === 0 ? (
          <div className="rounded-2xl border border-amber-100 bg-white/80 p-10 text-center text-sm text-slate-500 shadow-lg shadow-orange-100/60 backdrop-blur">
            No favorites yet. Add a recipe to see it here.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favouriteRecipes.map((item) => {
              const title = item.recipeName || item.name || "Untitled Recipe";
              const category = item.category || "Uncategorized";
              return (
                <div
                  className="group overflow-hidden rounded-2xl border border-amber-100 bg-white/95 shadow-xl shadow-orange-100/60 transition hover:-translate-y-1 hover:shadow-2xl"
                  key={item.id || title}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
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

                  <div className="space-y-2 p-5">
                    <h2 className="text-lg font-semibold text-slate-900">
                      {title}
                    </h2>
                    <p className="line-clamp-3 text-sm text-slate-600">
                      {item.description || "No description provided yet."}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Fav
