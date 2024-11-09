import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCaed";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const Projects = () => {
  const projects = useLoaderData();
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
        <div>
          <Helmet>
            <title>NUR HOSSEN | projects Page</title>
          </Helmet>
          <h3 className="text-center font-bold text-3xl my-6">My Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
            {projects?.map(project => (
              <ProjectCard key={project.id} project={project}></ProjectCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
