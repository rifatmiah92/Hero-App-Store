import "./Navbar.css";
import { Link, NavLink } from "react-router";
import { FaAppStore, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import { TiHomeOutline } from "react-icons/ti";
import { MdInstallDesktop } from "react-icons/md";

const Navbar = () => {
  return (
    <>
     <nav className="shadow-md bg-white/80 backdrop-blur-md sticky top-0 z-50">
  <div className="max-w-7xl mx-auto navbar px-4">
    {/* Navbar Start */}
    <div className="navbar-start">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost lg:hidden text-violet-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="apps">Apps</NavLink></li>
          <li><NavLink to="installation">Installation</NavLink></li>
        </ul>
      </div>

      {/* Logo + Text */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Hero Logo" className="w-10" />
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-500 hidden sm:block">
          HERO.IO
        </span>
      </Link>
    </div>

    {/* Navbar Center */}
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 text-lg font-medium">
        <li className="mr-5 hover:text-violet-500 transition-colors">
          <NavLink to="/" className="flex items-center gap-1">
            <TiHomeOutline className="text-xl" /> Home
          </NavLink>
        </li>
        <li className="mr-5 hover:text-violet-500 transition-colors">
          <NavLink to="apps" className="flex items-center gap-1">
            <FaAppStore className="text-xl" /> Apps
          </NavLink>
        </li>
        <li className="hover:text-violet-500 transition-colors">
          <NavLink to="installation" className="flex items-center gap-1">
            <MdInstallDesktop className="text-xl" /> My Installation
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Navbar End */}
    <div className="navbar-end">
      <NavLink
        to="https://github.com/rifatmiah92"
        target="_blank"
        className="btn text-white font-semibold bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 border-none shadow-md"
      >
        <FaGithub className="text-lg" />
        Contribute
      </NavLink>
    </div>
  </div>
</nav>

    </>
  );
};

export default Navbar;
