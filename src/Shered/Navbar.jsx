import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  const nabLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-purple-500 font-bold" : "font-bold"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-500 font-bold" : "font-bold"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-purple-500 font-bold" : "font-bold"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-purple-500 font-bold" : "font-bold"
          }
        >
          Projects
        </NavLink>
      </li>

    </>
  );
  return (
    <div className="navbar bg-black shadow-2xl   fixed z-10    w-full  ">
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
        <Link to={"/"} className="text-xl lg:text-2xl  flex">

          <span
            className=" font-bold
"
          >
            MUHAMMED <span className="text-orange-600 font-bold">NUR</span>
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  font-bold px-1">{nabLinks}</ul>
      </div>
      <div className="navbar-end">

        <div className="relative  flex items-center  justify-end w-full md:w-auto">
          <div className="  ">
            <NavLink
              to={"/contact"}
              className="bg-gradient-to-r flex  items-center gap-1 from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded "
            >
            contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
