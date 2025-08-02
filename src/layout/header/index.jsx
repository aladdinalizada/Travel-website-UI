import React, { useState } from "react";
import Logo from "/public/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50 py-4">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-white font-medium">
          <ul className="flex gap-8">
            <li className="hover:text-[#DF6951] cursor-pointer">Home</li>
            <li className="hover:text-[#DF6951] cursor-pointer">About</li>
            <li className="hover:text-[#DF6951] cursor-pointer">Services</li>
            <li className="hover:text-[#DF6951] cursor-pointer">
              Upcoming Packages
            </li>
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
        <div className="md:hidden mt-4 bg-[#1a1a1a]/90 rounded-lg text-white p-4 space-y-4 max-w-[1280px] mx-auto px-4">
          <ul className="space-y-2">
            <li className="hover:text-[#DF6951] cursor-pointer">Home</li>
            <li className="hover:text-[#DF6951] cursor-pointer">About</li>
            <li className="hover:text-[#DF6951] cursor-pointer">Services</li>
            <li className="hover:text-[#DF6951] cursor-pointer">
              Upcoming Packages
            </li>
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
