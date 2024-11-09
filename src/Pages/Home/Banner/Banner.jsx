import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import profile from "../../../assets/profile.png";
import pdf from "../../../assets/django-mlcv.pdf";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="hero"
      style={{
        backgroundColor: "black"
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-neutral-content text-center lg:flex items-center justify-between">
        <div className="max-w-md">
          <h1 className="mb-5 md:text-3xl text-2xl lg:text-4xl font-bold text-[#EA580C]">
            {" "}
            <Typewriter
              words={["Hey, I'm NUR HOSSEN."]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
          <h1 className="mb-5 md:text-2xl text-xl lg:text-2xl font-bold text-[#EA580C]">
            {" "}
            <Typewriter
              words={[
                "I am a python Django Developer ",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>

          <p className="mb-5 font-bold lg:text-xl text-xs">
          Experienced Python Django Developer Specializing in Backend Development, API Integrations, and Database Management
          </p>
          <div className="flex gap-2 items-center ">
            <a
              href={pdf}
              className="btn text-black bg-[#EA580C] flex items-center   hover:bg-[#bf4503]"
              download={"resume"}
            >
              <FaCloudDownloadAlt></FaCloudDownloadAlt> Download CV
            </a>
            <Link
              to={"/contact"}
              className="btn text-black bg-[#e85d11] hover:bg-[#bf4503] flex items-center"
            >
              <IoCallSharp></IoCallSharp> Contact
            </Link>
          </div>

        </div>

        <div className=" flex" data-aos="fade-up" data-aos-duration="2000">
          <img
            src={profile}
            alt=""
            className="lg:h-[500px] h-[300px] md:h-[400px]"
          />
        </div>
      </div>

    </div>
  );
};

export default Banner;
