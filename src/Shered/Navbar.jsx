import { Link, NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const nabLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-800 font-bold" : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-800 font-bold" : "font-bold"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-purple-800 font-bold" : "font-bold"
          }
        >
        
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-purple-800 font-bold" : "font-bold"
          }
        >
        
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-purple-800 font-bold" : "font-bold"
          }
        >
          {" "}
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-300 shadow-2xl   fixed z-10    w-full border-b-2 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn  btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-300 absolute z-50 font-bold rounded-box w-52"
          >
            {nabLinks}
          </ul>
        </div>
        <Link to={"/"} className="text-xl lg:text-2xl text-green-600 flex">
          {/* <img src={News} className="h-9 w-10 rounded opacity-60" /> */}
          <Typewriter
            words={["WelCome to My Portfolio"]}
            loop={Infinity}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  font-bold px-1">{nabLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="relative  flex items-center  justify-end w-full md:w-auto">
          <div className="  ">
            <Link className="btn btn-outline btn-accent">Hire ME</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
