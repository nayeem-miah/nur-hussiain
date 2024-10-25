import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from "../../Pages/Projects/ProjectCaed";

const HomeProjects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setProject(data);
      });
  }, []);
  const pri = project.slice(0, 2);
  return (
    <div className=" py-11">
      <h3 className="text-3xl text-center font-bold"> My Projects </h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 my-7">
        {pri?.map(pro => (
          <ProjectCard key={pro.name} project={pro}></ProjectCard>
        ))}
      </div>
      <div className="flex justify-center items-center py-5">
          <Link
            to={"/projects"}
            className="bg-gradient-to-r flex  items-center gap-1 from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded "
          >
            Show All Projects <FaArrowRight></FaArrowRight>
          </Link>
          </div>
    </div>
  );
};

export default HomeProjects;
