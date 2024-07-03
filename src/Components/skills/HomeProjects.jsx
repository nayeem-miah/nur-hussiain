import { useEffect, useState } from "react";
import ProjectCard from "../../Pages/Projects/ProjectCaed";

const HomeProjects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("../../../public/projects.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setProject(data);
      });
  }, []);
  const pri = project.slice(0, 2);
  //   console.log(pri.length);
  return (
    <div>
      <h3 className="text-3xl text-center font-bold"> My Projects </h3>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {pri?.map(pro => (
          <ProjectCard key={pro.name} project={pro}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
