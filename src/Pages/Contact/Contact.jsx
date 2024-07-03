import { MdOutlineEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidDownArrow } from "react-icons/bi";
const Contact = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold text-center my-5">Contact ME </h3>
      <p>
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to reach out through
        any of the following methods:
      </p>
      <div>
        <p className="lg:text-2xl text-xl font-serif my-5">
          <span className="font-bold">name:</span> MD Nayeem Miah
        </p>
        <div className="font-bold text-xl">
          <p className="flex items-center gap-3  lg:text-xl text-xs">
            <MdOutlineEmail></MdOutlineEmail>email:{" "}
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRnZnPXBQlhpDrpZbSqrsmxJlXSQvsKJKlvnPDWNSHcqJtPMwhhZlPnNCsWVPFhPhLNdnLv"
              target="_blank"
              className="hover:link-hover hover:text-blue-500 "
            >
              nayeem5113a@gamil.com
            </a>
          </p>
          <p className="flex items-center my-2 lg:text-xl text-xs">
            <IoCallSharp></IoCallSharp> <span>contact Number:</span>{" "}
            +8801849317388
          </p>
        </div>
        <div>
          <h4 className=" flex items-center lg:text-xl text-xs">
            Let's connect on social networks
            <BiSolidDownArrow></BiSolidDownArrow>
          </h4>
          <nav>
            <div className="grid grid-cols-3 ">
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
                <FaLinkedin className="text-4xl text-blue-600"></FaLinkedin>
              </a>
              <a
                href="https://fb.com/https://web.facebook.com/profile.php?id=100042968569904&_rdc=1&_rdr"
                target="blank"
              >
                <FaFacebookF className="text-4xl text-blue-600"></FaFacebookF>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Contact;
