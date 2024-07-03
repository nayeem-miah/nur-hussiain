import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCaed";

const Projects = () => {
  const projects = useLoaderData();
  return (
    <div>
      <h3 className="text-center font-bold text-3xl my-6">My Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
        {projects?.map(project => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

export default Projects;
