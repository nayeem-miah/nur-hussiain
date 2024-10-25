import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ProjectCard = ({ project }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  //   console.log(project);

  return (
    <div >
      <div
        className="card bg-base-300 h-full w-full shadow-xl"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <figure>
          <img className="hover:scale-105" src={project.img}  />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl lg:text-3xl">{project.title}</h2>
          <div className="flex"> {
            project?.language?.map(lan=><div><button className="text-[10px] lg:text-xl text-blue-600 border rounded-full px-1">#{lan}</button></div>)}</div>
          <p>{project.description}</p>
          <div className="card-actions justify-end grid lg:grid-cols-3 grid-cols-1 ">
            <Link
              to={project?.liveLink}
              className="badge badge-outline flex items-center gap-1  hover:text-blue-600 hover:font-bold"
            >
              <p>Live Link</p> <FaLink></FaLink>
            </Link>
            <Link
              to={project.clientSideLink}
              className="badge badge-outline flex items-center gap-1 hover:text-blue-600 hover:font-bold"
            >
              <p>client Side</p> <FaGithub></FaGithub>
            </Link>
            <Link
              to={project.serverSideLink}
              className="badge badge-outline flex items-center gap-1 hover:text-blue-600 hover:font-bold"
            >
              <p>server Side</p> <FaGithub></FaGithub>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
