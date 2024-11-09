import { Link, useLoaderData } from "react-router-dom";
import SkillsCard from "./SkillsCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const Skills = () => {
  const skills = useLoaderData();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  // console.log(skills);
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div className="lg:mx-0 mx-3">
          <Helmet>
            <title>NUR HOSSEN | skills Page</title>
          </Helmet>
          <h3 className="text-center text-3xl font-semibold lg:my-10 my-5 ">
            My Skills
          </h3>
          <p className=" text-xs lg:text-xl my-9">
          am a Python Django Developer skilled in building scalable and secure web applications. With a strong foundation in Python, I focus on backend development, data analysis, and scripting, always prioritizing code readability and efficiency. My expertise in the Django framework enables me to create robust applications with RESTful APIs and manage complex database operations seamlessly. Additionally, I am proficient in HTML5, CSS3, and JavaScript (ES6+), allowing me to implement dynamic, responsive, and user-friendly interfaces. I also have experience with PostgreSQL for relational database management and data modeling, ensuring optimal backend support for high-performance applications
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills?.map(skill => (
              <SkillsCard key={skill.id} skill={skill}></SkillsCard>
            ))}
          </div>
          <div className="flex justify-center items-center py-5 gap-3 my-10">
            <Link
              to={"/projects"}
              className="bg-gradient-to-r flex  items-center gap-1 from-purple-500 via-pink-500 to-red-500 text-white font-bold py-2 px-4 rounded "
            >
              --Projects--
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
