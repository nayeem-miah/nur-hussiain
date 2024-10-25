import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SkillsCard = ({ skill }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  //   console.log(skill);
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="card bg-base-300  shadow-xl h-96">
        <figure className="px-10 pt-10">
          <img src={skill.img} alt="skill" className="rounded-xl h-28" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{skill.name}</h2>

          <p>
            <span className="font-bold">description:</span>
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
