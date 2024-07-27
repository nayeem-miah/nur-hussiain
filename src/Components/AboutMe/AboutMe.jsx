import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div className="my-10">
      <h3 className="text-center font-bold text-3xl mt-16 mb-5">About Me</h3>
      <p className=" lg:text-xl text-xs lg:mx-0 mx-3">
        I'm Nayeem, a dedicated Junior Frontend Developer driven by a passion
        for creating visually stunning and user-friendly web interfaces. My
        expertise spans HTML, CSS, JavaScript, React.js, Node.js, Express.js,
        Firebase, MongoDB, and Tailwind CSS. With a strong focus on design and
        an ongoing commitment to enhancing my skills, I strive to deliver
        seamless and engaging user experiences.
      </p>
      <div>
        <div className="flex justify-center items-center py-5">
          <Link
            to={"/about"}
            className="bg-gradient-to-r flex  items-center gap-1 from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded"
          >
            about more  <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
