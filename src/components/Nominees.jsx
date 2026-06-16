import s1 from "../assets/logo.PNG";
import s3 from "../assets/mkheyan.jpeg";
import s4 from "../assets/vivaldi.PNG";

export default function Hero() {
  const sponsors = [s1, s3, s4];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] py-24 text-white">

      {/* Background Glows (Մոնոքրոմ փափուկ լույսեր) */}
      <div className="absolute w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full top-[-100px] left-[-100px] pointer-events-none"></div>
      <div className="absolute w-[500px] h-[500px] bg-white/[0.02] blur-[150px] rounded-full bottom-[-100px] right-[-100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center animate-fadeUp">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-white/50 text-xs uppercase tracking-[0.2em] mb-10 select-none">
          Premium Website Development
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none text-white select-none">
          MKHEYAN
          <span className="block text-shine font-light mt-2 opacity-90">AGENCY</span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed font-light">
          Ժամանակակից, արագ և պրոֆեսիոնալ կայքերի պատրաստում
          բիզնեսների, բլոգերների, կազմակերպությունների և օնլայն խանութների համար։
        </p>

        {/* Contacts Grid (Clickable UX-ով հեռախոսահամարներ) */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center font-mono text-sm tracking-wider text-white/40">
          <a 
            href="tel:+37477430886" 
            className="px-5 py-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/20 hover:text-white transition-all duration-300 active:scale-[0.98]"
          >
            077 430 886
          </a>
          <div className="w-1 h-1 bg-white/20 rounded-full hidden sm:block"></div>
          <a 
            href="tel:+37499430886" 
            className="px-5 py-2.5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/20 hover:text-white transition-all duration-300 active:scale-[0.98]"
          >
            099 430 886
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="tel:+37477430886"
            className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white text-black text-sm font-semibold hover:bg-neutral-200 active:scale-[0.98] transition-all duration-300 text-center shadow-[0_8px_30px_rgb(255,255,255,0.05)]"
          >
            Contact Us
          </a>

       
        </div>


  

      </div>
    </section>
  );
}