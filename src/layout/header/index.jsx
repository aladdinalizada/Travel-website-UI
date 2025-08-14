import React, { useState, useEffect } from "react";
import Logo from "/public/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "h-14 backdrop-blur-md bg-black/50 shadow-sm"
          : "h-16 bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between h-full">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <ul className="flex gap-8">
            {["Home", "About", "Services", "Upcoming Packages"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#DF6951] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#DF6951] text-white rounded-2xl px-6 py-3">
            Get in Touch
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-black/80 rounded-lg text-white p-4 space-y-4 max-w-[1280px] mx-auto px-4">
          <ul className="space-y-2">
            {["Home", "About", "Services", "Upcoming Packages"].map((item) => (
              <li
                key={item}
                className="relative cursor-pointer after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-[#DF6951] after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-[#DF6951] text-white rounded-2xl px-6 py-3 w-full">
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
