import React from "react";
import axios from "../utils/axios";
import instance from '../utils/axios';

const About = () => {
   const getProduct = async () => {
     try {
      //  axios here use with the instance we created in src/utils/axios.jsx, which has interceptors for logging requests and responses kilan data request gese and kilan response aice ta dekar lagin basically amra axios.get er jaygay instance.get use korbo, jeta src/utils/axios.jsx file e export kora hoyeche
       const { data } = await instance.get("products");
       console.log(data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   getProduct();
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-12">
      <div className="mx-auto w-full max-w-5xl">
        <div className="rounded-3xl border border-amber-100 bg-white/90 p-8 shadow-2xl shadow-orange-100/60 sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
            About Us
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Recipes made simple, warm, and shareable
          </h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-600">
            We built this recipe space to help you save, organize, and share
            the dishes you love. Whether it’s a quick snack or a family feast,
            your recipes deserve a beautiful home.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Purpose
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Keep cooking joyful with simple, organized recipe experiences.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Values
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Clarity, warmth, and a touch of creativity in every detail.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Community
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Share ideas and inspire new meals together.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-amber-100 bg-amber-50/60 p-6 text-sm text-slate-700">
            Tip: Add your favorite recipes and mark them as favorites for quick
            access later.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About
