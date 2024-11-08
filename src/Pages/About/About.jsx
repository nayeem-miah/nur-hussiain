import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";

const About = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="my-10 lg:mx-0 mx-3">
          <Helmet>
            <title>NUR HOSSEN | About Page</title>
          </Helmet>
          <h3 className="text-center font-bold text-3xl lg:mt-16 mt-5 mb-5">
            About Me
          </h3>
          <p className=" lg:text-xl text-xs">
          Hello, I'm Nur Housin, a dedicated Backend Developer specializing in Python and Django, with foundational knowledge in HTML, CSS, and JavaScript. I am currently studying Diploma Engineering in Computer Science and Technology at Moulvibazar Polytechnic Institute, after completing my SSC exams in 2021. My skill set includes PostgreSQL and basic machine learning, which I’m actively developing alongside my core backend expertise. I'm focused on building efficient, secure, and scalable applications while continuously expanding my knowledge in both backend and full-stack technologies
          </p>
          <p className="py-4">
            <span className="font-bold text-2xl underline uppercase">
              education :
            </span>
            . I completed my Diploma in Computer Science and Technology from Moulvibazar Polytechnic Institute.
          </p>
          <div>
            <div className="flex justify-center items-center py-5"></div>

            <div className=" lg:flex md:flex justify-between ">
              <div className="">
                <h4 className="font-bold">Name:</h4>
                <p className="">Nur Hussain </p>
              </div>
              <div className="">
                <h4 className="font-bold">Email:</h4>
                <p className="">nur@gmail.com</p>
              </div>
              <div className="">
                <h4 className="font-bold">Date of birth:</h4>
                <p className=""> 1 December 2004</p>
              </div>
              <div className="">
                <h4 className="font-bold">From:</h4>
                <p className=""> Mymensingh, Bangladesh</p>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default About;
