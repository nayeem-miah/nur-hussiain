import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to={"/"} className="link link-hover">
          Home
        </Link>
        <Link to={"/about"} className="link link-hover">
          About us
        </Link>
        <Link to={"/skills"} className="link link-hover">
          Skills
        </Link>
        <Link to={"/projects"} className="link link-hover">
          Projects
        </Link>
        <Link to={"/contact"} className="link link-hover">
          Contact us
        </Link>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            to={"https://github.com/nayeem-miah/nayeem-miah"}
            target="_blank"
          >
            <FaGithub className="text-4xl"></FaGithub>
          </Link>

          <a
            href="https://linkedin.com/in/https://www.linkedin.com/in/nayeem-islam-734719307"
            target="blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="https://www.linkedin.com/in/nayeem-islam-734719307"
              height="30"
              width="40"
            />
          </a>
          <a
            href="https://fb.com/https://web.facebook.com/profile.php?id=100042968569904&_rdc=1&_rdr"
            target="blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg"
              alt="https://web.facebook.com/profile.php?id=100042968569904&_rdc=1&_rdr"
              height="30"
              width="40"
            />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © ${new Date().getFullYear()} - All right reserved by
          Portfolio
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
