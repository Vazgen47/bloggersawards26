import {
  FaInstagram,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";

import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 mt-32 text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/[0.02] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        
        {/* TOP BIG LOGO */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          
          <div className="relative group">
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

            <img
              src={logo}
              alt="Blogger Awards"
              className="relative w-56 md:w-72 object-contain opacity-90 group-hover:opacity-100 transition duration-500"
            />
          </div>

          <h2 className="mt-8 text-3xl md:text-5xl font-bold tracking-tight">
            BLOGGER AWARDS
          </h2>

          <p className="mt-5 max-w-2xl text-white/40 leading-relaxed text-sm md:text-base font-light">
            Celebrating Armenia's most inspiring bloggers, creators,
            influencers and digital personalities across multiple
            award categories.
          </p>

       
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* Brand */}
          <div className="space-y-5">
            <h3 className="text-sm uppercase tracking-[0.25em] text-white/80">
              About
            </h3>

            <p className="text-sm text-white/40 leading-relaxed font-light">
              Premium Armenian blogger awards platform with modern
              voting experience, nominee showcases and category-based
              competitions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-white/80 mb-6">
              Navigation
            </h3>

            <ul className="space-y-4 text-sm text-white/45">
              <li>
                <a
                  href="/"
                  className="hover:text-white transition duration-300"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/#categories"
                  className="hover:text-white transition duration-300"
                >
                  Categories
                </a>
              </li>

              <li>
                <a
                  href="/#nominees"
                  className="hover:text-white transition duration-300"
                >
                  Nominees
                </a>
              </li>

              <li>
                <a
                  href="/#sponsors"
                  className="hover:text-white transition duration-300"
                >
                  Sponsors
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-white/80 mb-6">
              Categories
            </h3>

            <ul className="grid grid-cols-2 gap-3 text-xs text-white/40">
              <li>Beauty Blog</li>
              <li>Expert Blog</li>
              <li>Family Blog</li>
              <li>Fashion Blog</li>
              <li>Food Blog</li>
              <li>Fun Blog</li>
              <li>Health Blog</li>
              <li>Lifestyle Blog</li>
              <li>Mommy Blog</li>
              <li>Travel Blog</li>
              <li>Psychology</li>
              <li>Masters</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.25em] text-white/80 mb-6">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/50 font-light">
              <a
                href="mailto:mkheyanagency@gmail.com"
                className="block hover:text-white transition"
              >
                mkheyanagency@gmail.com
              </a>

              <a
                href="tel:+37477430886"
                className="block hover:text-white transition"
              >
                +374 77 430 886
              </a>

              <a
                href="tel:+37499430886"
                className="block hover:text-white transition"
              >
                +374 99 430 886
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-5 mt-8 text-xl text-white/40">
              <a
                href="https://www.instagram.com/mkheyan.agency/"
                target="_blank"
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/mkheyan.agency/"
                target="_blank"
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                <FaFacebook />
              </a>

              <a
                href="https://t.me/MkheyanAgency"
                target="_blank"
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/25">
          
          <p>
            © 2026 Blogger Awards — All Rights Reserved
          </p>

          <p className="mt-4 md:mt-0 tracking-wide">
            Crafted with precision by
            <span className="text-white ml-2">
              Mkheyan Agency
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}