import { useEffect, useState } from "react";
import HomeSkillCard from "../HomeSkillsCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const SkillsAll = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/skills.json")
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setSkills(data);
      });
  }, []);
  // console.log(skills);
  return (
    <div>

      <h2 className="text-center font-bold text-3xl my-7"> My Skills</h2>
      <p className="text-xs lg:text-xl lg:my-9 my-5 lg:mx-0 mx-3"> am a Python Django Developer skilled in building scalable and secure web applications. With a strong foundation in Python, I focus on backend development, data analysis, and scripting, always prioritizing code readability and efficiency. My expertise in the Django framework enables me to create robust applications with RESTful APIs and manage complex database operations seamlessly. Additionally, I am proficient in HTML5, CSS3, and JavaScript (ES6+), allowing me to implement dynamic, responsive, and user-friendly interfaces. I also have experience with PostgreSQL for relational database management and data modeling, ensuring optimal backend support for high-performance applications</p>

      <div>

        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-8">
          {skills?.map(skill => (
            <HomeSkillCard key={skill.id} skill={skill}></HomeSkillCard>
          ))}
        </div>

        <div className="flex justify-center items-center lg:py-5 py-3">
          <Link
            to={"/skills"}
            className="text-black bg-[#EA580C] flex items-center   hover:bg-[#bf4503] font-bold py-2 px-4 rounded"
          >
            skills Details  <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default SkillsAll;
