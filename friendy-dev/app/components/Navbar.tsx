import { NavLink } from "react-router";
import { FaLaptopCode } from "react-icons/fa6";
const Navbar = () => {
    return (
        <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <NavLink to="/" className='flex items-center gap-2 text-lg font-bold text-blue-300'>
                    <FaLaptopCode size={24} className="text-blue-400 text-xl"/>
                </NavLink>
            </div>
        </nav>
     );
}

export default Navbar;