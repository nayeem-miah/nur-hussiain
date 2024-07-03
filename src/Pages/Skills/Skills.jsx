import { useLoaderData } from "react-router-dom";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  const skills = useLoaderData();
  console.log(skills);
  return (
    <div>
      <h3 className="text-center text-3xl font-semibold my-10 text-black">My Skills</h3>
      <p className=" text-xs lg:text-xl my-9">
        As a dedicated and enthusiastic Junior Frontend Developer, I possess a
        robust skill set and a keen eye for design. My expertise includes
        crafting well-structured HTML for accessible and SEO-friendly web pages,
        styling responsive layouts with CSS, and implementing dynamic features
        with JavaScript. I excel in using Tailwind CSS for rapid design,
        developing scalable applications with React.js, and building efficient
        server-side applications with Node.js and Express.js. Additionally, I
        have experience in integrating real-time databases and authentication
        with Firebase, managing data with MongoDB, and enhancing UI development
        with DaisyUI components. Continuously expanding my knowledge, I am
        committed to delivering seamless and engaging user experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills?.map(skill => (
          <SkillsCard key={skill.id} skill={skill}></SkillsCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
