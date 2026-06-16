import { useParams } from "react-router-dom";
import { bloggersData } from "../data/bloggers.js";
import { Link } from "react-router-dom";

export default function CategoryPage() {
  const { slug } = useParams();
  const bloggers = bloggersData[slug] || [];

  // Սարքում ենք վերնագիրը մեծատառերով ու առանց գծիկների
  const categoryTitle = slug ? slug.replace("-", " ") : "";

  return (
    <section className="min-h-screen bg-[#0a0a0a] py-28 text-white relative overflow-hidden">
      
      {/* Թեթև, պրեմիում background glow վերևի հատվածում */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Navigation / Header */}
        <div className="text-center mb-20 animate-fadeUp">
          <span className="text-white/40 text-xs uppercase tracking-[0.3em] block mb-3">
            Nominees
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight capitalize text-shine">
            {categoryTitle}
          </h1>
        </div>

        {/* Bloggers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bloggers.length > 0 ? (
            bloggers.map((b, i) => (
              <div
                key={i}
                className="group bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col justify-between"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Image Container with Zoom effect */}
                <div className="overflow-hidden relative h-72 bg-neutral-900">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                      {b.name}
                    </h3>
                    <p className="text-white/40 text-sm mt-1 font-mono">
                      @{b.username}
                    </p>
                  </div>

                  <div className="mt-6 space-y-3">
                    {/* Instagram Link (Cleaned & Monochromed) */}
                    <a
                      href={b.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white/60 hover:text-white transition-colors flex items-center justify-center gap-1 py-1"
                    >
                      Instagram 
                      <span className="text-[10px] opacity-60 group-hover:translate-x-0.5 transition-transform">↗</span>
                    </a>

                    {/* Vote Button */}
                    <Link
                      to={`/vote?name=${b.name}&username=${b.username}&image=${b.image}`}
                      className="block text-center bg-white text-black text-sm py-3 rounded-xl font-semibold hover:bg-neutral-200 active:scale-[0.98] transition-all duration-300"
                    >
                      Vote Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-4 py-20 text-center">
              <p className="text-white/30 text-lg tracking-wide">
                No bloggers found in this category.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}