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
        <div>
          <Helmet>
            <title>NAYEEM | skills Page</title>
          </Helmet>
          <h3 className="text-center text-3xl font-semibold my-10 text-black">
            My Skills
          </h3>
          <p className=" text-xs lg:text-xl my-9">
            As a dedicated and enthusiastic Junior Frontend Developer, I possess
            a robust skill set and a keen eye for design. My expertise includes
            crafting well-structured HTML for accessible and SEO-friendly web
            pages, styling responsive layouts with CSS, and implementing dynamic
            features with JavaScript. I excel in using Tailwind CSS for rapid
            design, developing scalable applications with React.js, and building
            efficient server-side applications with Node.js and Express.js.
            Additionally, I have experience in integrating real-time databases
            and authentication with Firebase, managing data with MongoDB, and
            enhancing UI development with DaisyUI components. Continuously
            expanding my knowledge, I am committed to delivering seamless and
            engaging user experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills?.map(skill => (
              <SkillsCard key={skill.id} skill={skill}></SkillsCard>
            ))}
          </div>
          <div class="flex justify-center items-center py-5 gap-3 my-10">
            <Link
              to={"/projects"}
              className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded text-xl"
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
