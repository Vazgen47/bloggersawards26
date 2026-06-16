import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "Categories",
      href: "/#categories",
    },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

          <div className="flex items-center justify-between h-20 px-6">

            {/* Logo */}
            <a href="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-30 h-9 rounded-xl object-cover"
              />

              <div>
                <h2 className="text-white font-semibold text-lg">
                  Blogger Awards
                </h2>
              </div>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-6 pb-6">
              <ul className="flex flex-col gap-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="block text-gray-400 hover:text-white transition"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="/vote"
                className="mt-6 w-full py-3 rounded-xl bg-white text-black font-medium flex items-center justify-center"
              >
                Vote Now
              </a>
            </div>
          </div>

        </div>
      </nav>
    </header>
  );
}