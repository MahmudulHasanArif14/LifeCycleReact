import { useEffect } from "react";
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

  useEffect(() => {
    getProduct();
    console.log("Home component mounted");
    return () => {
      console.log("Home component unmounted");
    };
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
              RecipeHub
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
              Cook, share, and savor every recipe you love
            </h1>
            <p className="mt-4 text-base text-slate-600">
              Create beautiful recipe cards, save favorites, and keep your
              kitchen inspiration organized in one cozy place.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-slate-800"
                href="/create"
              >
                Create a Recipe
              </a>
              <a
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
                href="/recipes"
              >
                Browse Recipes
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-200/70 blur-2xl" />
            <div className="absolute -bottom-8 right-10 h-24 w-24 rounded-full bg-rose-200/70 blur-2xl" />
            <div className="rounded-3xl border border-amber-100 bg-white/90 p-6 shadow-2xl shadow-orange-100/60">
              <div className="rounded-2xl bg-slate-100 p-4">
                <div className="h-40 w-full rounded-xl bg-[linear-gradient(135deg,#fcd34d_0%,#fb923c_55%,#f472b6_100%)]" />
                <div className="mt-4 space-y-2">
                  <div className="h-3 w-24 rounded-full bg-slate-200" />
                  <div className="h-4 w-3/4 rounded-full bg-slate-200" />
                  <div className="h-3 w-2/3 rounded-full bg-slate-200" />
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Save
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Keep your favorites ready for next time.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Share
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    Share recipes with friends and family.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-lg shadow-orange-100/60">
            <h3 className="text-lg font-semibold text-slate-900">
              Organize
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Categories and rich details keep every recipe easy to find.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-lg shadow-orange-100/60">
            <h3 className="text-lg font-semibold text-slate-900">Inspire</h3>
            <p className="mt-2 text-sm text-slate-600">
              Discover new flavors and revisit the classics you love.
            </p>
          </div>
          <div className="rounded-2xl border border-amber-100 bg-white/90 p-6 shadow-lg shadow-orange-100/60">
            <h3 className="text-lg font-semibold text-slate-900">Enjoy</h3>
            <p className="mt-2 text-sm text-slate-600">
              A modern, warm experience built for everyday cooking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
