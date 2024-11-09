/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import { FaFacebook, FaReact } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-100 text-xs rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          contact
        </NavLink>
        <NavLink
          to={"/skills"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          skills
        </NavLink>
      </nav>
      <h4 className="text-xl flex items-center">
        Let's connect on social networks <BiSolidDownArrow></BiSolidDownArrow>
      </h4>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.instagram.com/mridh1561/?igsh=MTRpaWlnbjJqMHBhcA%3D%3D"
            target="blank"
          >
            <FaInstagram className="text-4xl text-blue-600 bg-instagram-gradient"></FaInstagram>
          </a>
          <a
            href="https://www.facebook.com/people/Mri-Du-L/100081711587660/?mibextid=ZbWKwL"
            target="blank"
          >
            <FaFacebook className="text-4xl text-blue-600"></FaFacebook>
          </a>
        </div>
        <p className="my-3 flex">
          developer by
          <a
            href="https://nayeemportfolio-70.web.app/"
            target="_blank"
            className="text-blue-700 hover:underline px-1 flex items-center hover:scale-125"
          >
            <span> NAYEEM </span>
            <span className="ml-1 animate-spin">
              <FaReact size={14}> </FaReact>
            </span>
          </a>
        </p>
      </nav>

      <div className="text-[14px]">
        <div>
          Copyright © ${new Date().getFullYear()} - All right reserved by NUR HOSSEN
        </div>
      </div>
    </footer>
  );
};

export default Footer;