import { NavLink } from "react-router";
import { FaLaptopCode, FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur border-b border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <FaLaptopCode size={22} className="text-blue-400" />
          <span className="text-white font-semibold tracking-wide">
            Ken's Code
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {["/", "/projects", "/blog", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Projects", "Blog", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-white border-b-2 border-blue-400 pb-1"
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-400 text-xl cursor-pointer"
            title="Menu"
          >
            {isMenuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>


      </div>
      {/* Mobile Nav */}
        { isMenuOpen && (
          <div className="
            bg-gray-800
            border-t
            border-gray-700
            px-6
            py-4
            space-y-2
            space-x-4
            text-center
            md:hidden
            ">
              {["/", "/projects", "/blog", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Projects", "Blog", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => {setIsMenuOpen(false)}}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${
                    isActive
                      ? "text-white border-b-2 border-blue-400 pb-1"
                      : "text-gray-400 hover:text-white"
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}
          </div>
        )}
    </nav>
  );
};

export default Navbar;