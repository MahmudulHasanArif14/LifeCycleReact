import React from "react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 px-4 py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
        <div className="rounded-3xl border border-amber-100 bg-white/90 p-10 shadow-2xl shadow-orange-100/60">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-500">
            404 Error
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            The page you are looking for doesn’t exist or has been moved.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-0.5 hover:bg-slate-800"
              href="/"
            >
              Back to Home
            </a>
            <a
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300"
              href="/recipes"
            >
              Browse Recipes
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound
