import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="my-10">
      <h3 className="text-center font-bold text-3xl mt-16 mb-5">About Me</h3>
      <p className=" lg:text-xl text-xs lg:mx-0 mx-3">
      Hello, I'm Nur Housin, a dedicated Backend Developer specializing in Python and Django, with foundational knowledge in HTML, CSS, and JavaScript. I am currently studying Diploma Engineering in Computer Science and Technology at Moulvibazar Polytechnic Institute at 2024. My skill set includes PostgreSQL and basic machine learning, which I’m actively developing alongside my core backend expertise. I'm focused on building efficient, secure, and scalable applications while continuously expanding my knowledge in both backend and full-stack technologies
      </p>
      <div>
        <div className="flex justify-center items-center py-5">
          <Link
            to={"/about"}
            className="text-black bg-[#EA580C] flex items-center   hover:bg-[#bf4503] font-bold py-2 px-4 rounded"
          >
            about more  <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
