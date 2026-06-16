import { Link } from "react-router-dom";

const categories = [
  "Beauty Blog",
  "Expert Blog",
  "Family Blog",
  "Fashion Blog",
  "Food Blog",
  "Fun Blog",
  "Health Blog",
  "Lifestyle Blog",
  "Masters of the Mic",
  "Mommy Blog",
  "Psychology Blog",
  "Travel Blog",
];

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, "-");
}

export default function Categories() {
  return (
    <section
      id="categories"
      className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 animate-fadeUp">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] block mb-3">
            Categories
          </span>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Award Categories
          </h2>

          <p className="text-white/35 mt-6 max-w-2xl mx-auto">
            Discover Armenia’s top creators across all blogger categories.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${slugify(category)}`}
              className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] text-white/70 hover:text-white hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-500 flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-white/30 mb-2">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <span className="text-sm font-medium tracking-wide">
                  {category}
                </span>
              </div>

              <span className="text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}