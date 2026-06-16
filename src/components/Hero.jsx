import s1 from "../assets/logo.PNG";
import s3 from "../assets/mkheyan.jpeg";
import s4 from "../assets/vivaldi.PNG";

export default function Hero() {
  const sponsors = [
    {
      logo: s1,
      name: "Blogger Awards",
      desc: "Official Media Partner",
    },
    {
      logo: s3,
      name: "Mkheyan Agency",
      desc: "Website Development",
    },
    {
      logo: s4,
      name: "Vivaldi",
      desc: "Premium Sponsor",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">

        {/* HERO */}
        <div className="text-center">

          <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-xs tracking-[0.3em] uppercase text-white/50 mb-8 animate-pulse">
            Blogger Awards 2026
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none">
            BLOGGER
            <span className="block text-white/70 mt-2">
              AWARDS
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-white/40 text-lg leading-relaxed">
            Celebrating Armenia’s most inspiring bloggers,
            creators and influencers across multiple categories.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#categories"
              className="px-10 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300"
            >
              Explore Categories
            </a>

            <a
              href="#sponsors"
              className="px-10 py-4 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
            >
              Our Sponsors
            </a>
          </div>
        </div>

        {/* SPONSORS */}
        <div
          id="sponsors"
          className="mt-40"
        >
          <div className="text-center mb-16">
            <span className="text-white/40 uppercase tracking-[0.4em] text-xs">
              Trusted Partners
            </span>

            <h2 className="text-5xl md:text-6xl font-bold mt-5">
              Our Sponsors
            </h2>

            <p className="text-white/40 mt-6 max-w-2xl mx-auto">
              Proud partners supporting creators,
              influencers and the future of digital media.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 hover:-translate-y-3 hover:border-white/20 transition-all duration-500"
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
                </div>

                {/* Logo */}
                <div className="relative z-10 flex justify-center items-center h-28">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-h-16 object-contain opacity-70 group-hover:opacity-100 transition duration-500"
                  />
                </div>

                {/* TEXT */}
                <div className="relative z-10 text-center mt-8">
                  <h3 className="text-2xl font-semibold">
                    {sponsor.name}
                  </h3>

                  <p className="text-white/40 mt-3">
                    {sponsor.desc}
                  </p>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/10 transition duration-500"></div>

              </div>
            ))}

          </div>

          {/* Bottom Blur Line */}
          <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
{/* STATS SECTION */}
<div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">

  <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 text-center hover:-translate-y-2 transition-all duration-500">
    <h3 className="text-5xl md:text-6xl font-black text-white">
      2026
    </h3>

    <p className="mt-4 text-white/40 uppercase tracking-[0.25em] text-sm">
      Award Season
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 text-center hover:-translate-y-2 transition-all duration-500">
    <h3 className="text-5xl md:text-6xl font-black text-white">
      86+
    </h3>

    <p className="mt-4 text-white/40 uppercase tracking-[0.25em] text-sm">
      Featured Bloggers
    </p>
  </div>

  <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 text-center hover:-translate-y-2 transition-all duration-500">
    <h3 className="text-5xl md:text-6xl font-black text-white">
      12+
    </h3>

    <p className="mt-4 text-white/40 uppercase tracking-[0.25em] text-sm">
      Categories
    </p>
  </div>

</div>
      </div>
    </section>
  );
}