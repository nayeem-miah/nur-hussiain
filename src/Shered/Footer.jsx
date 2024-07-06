import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-xs rounded p-10">
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
          to={"/skills"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-purple-800  link link-hover" : "link link-hover"
          }
        >
          contact
        </NavLink>
      </nav>
      <h4 className="text-xl flex items-center">
        Let's connect on social networks <BiSolidDownArrow></BiSolidDownArrow>
      </h4>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            to={"https://github.com/nayeem-miah"}
            target="_blank"
          >
            <FaGithub className="text-4xl"></FaGithub>
          </Link>

          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQGonzb4vjmpzwAAAZCGNetYaTBkmPmP3jwbyu15qSZsZVSa01c5lbIg6a22QjHL8Mf9sDcVq7rvWtCOZsF0One3ecf7WwC9NYgSj07FJv4AXXmn3LI444T7zHLq47D4Huetwe4=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmd-nayeem-miah-734719307"
            target="blank"
          >
            <FaLinkedin className="text-4xl text-blue-600"></FaLinkedin>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100042968569904"
            target="blank"
          >
            <FaFacebook className="text-4xl text-blue-600"></FaFacebook>
          </a>
        </div>
      </nav>

      <div className="text-[14px]">
        <div>
          Copyright © ${new Date().getFullYear()} - All right reserved by
          Portfolio
        </div>
      </div>
    </footer>
  );
};

export default Footer;
