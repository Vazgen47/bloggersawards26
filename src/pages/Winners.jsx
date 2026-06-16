import { Crown, Trophy } from "lucide-react";

const winners = [
  {
    category: "Beauty Blog",
    winner: "Ruzanna Shahgeldyan",
    username: "glambyruzok",
    image: "/beauty1.jpg",
  },
  {
    category: "Fashion Blog",
    winner: "Ester Zakharian",
    username: "estercouture_",
    image: "/fashion1.jpg",
  },
  {
    category: "Lifestyle Blog",
    winner: "Annais Allahverdian",
    username: "annaiisy",
    image: "/lifestyle2.jpg",
  },
  {
    category: "Food Blog",
    winner: "Armin",
    username: "armin_foodblog",
    image: "/food1.jpg",
  },
  {
    category: "Mommy Blog",
    winner: "Armine Sargsyan",
    username: "armmom_blog",
    image: "/mom1.jpg",
  },
  {
    category: "Health Blog",
    winner: "Lilit Ghalechyan",
    username: "lilit_nutritionist_trainer",
    image: "/health1.jpg",
  },
];

export default function Winners() {
  return (
    <section className="min-h-screen bg-white text-black py-32 relative overflow-hidden">

      {/* Soft Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-black/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-24">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-black/10 bg-black/[0.03] text-black text-xs uppercase tracking-[0.3em]">
            <Trophy size={14} />
            Winners 2026
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight">
            Blogger Awards Winners
          </h1>

          <p className="mt-6 text-black/50 max-w-2xl mx-auto leading-relaxed">
            Celebrating Armenia’s most inspiring creators,
            bloggers and digital personalities of 2026.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {winners.map((item, index) => (
            <div
              key={index}
              className="group rounded-[32px] overflow-hidden border border-black/10 bg-white hover:border-black/20 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.04)]"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden">

                {/* Winner Badge */}
                <div className="absolute top-5 left-5 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-black/10 text-black text-xs uppercase tracking-[0.2em] font-semibold">
                  <Crown size={14} />
                  Winner
                </div>

                <img
                  src={item.image}
                  alt={item.winner}
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-7">

                <p className="text-xs uppercase tracking-[0.3em] text-black/40 mb-4">
                  {item.category}
                </p>

                <h2 className="text-3xl font-bold tracking-tight">
                  {item.winner}
                </h2>

                <p className="text-black/50 mt-2">
                  @{item.username}
                </p>

                {/* BUTTONS */}
                <div className="mt-7 flex gap-3">

                  <a
                    href={`https://instagram.com/${item.username}`}
                    target="_blank"
                    className="flex-1 py-3 rounded-2xl border border-black/10 bg-black/[0.02] hover:bg-black text-black hover:text-white text-center text-sm font-medium transition-all duration-300"
                  >
                    Instagram
                  </a>

                  <button className="flex-1 py-3 rounded-2xl bg-black text-white text-sm font-semibold hover:scale-[1.02] transition-all duration-300">
                    #1 Winner
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mt-28">

          <div className="rounded-[32px] border border-black/10 bg-black text-white p-12 text-center">
            <h3 className="text-6xl font-bold">
              86+
            </h3>

            <p className="mt-4 text-white/50 uppercase tracking-[0.3em] text-xs">
              Bloggers
            </p>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-black/[0.03] p-12 text-center">
            <h3 className="text-6xl font-bold">
              12+
            </h3>

            <p className="mt-4 text-black/40 uppercase tracking-[0.3em] text-xs">
              Categories
            </p>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-black/[0.03] p-12 text-center">
            <h3 className="text-6xl font-bold">
              2026
            </h3>

            <p className="mt-4 text-black/40 uppercase tracking-[0.3em] text-xs">
              Award Season
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}