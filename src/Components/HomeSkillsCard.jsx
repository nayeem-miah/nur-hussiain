import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HomeSkillCard = ({ skill }) => {
  //   console.log(skill);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <div className="card bg-base-300  shadow-xl md:h-52 h-40">
        <figure className=" p-2">
          <img src={skill.img} alt="skill" className="rounded-xl h-20" />
        </figure>
        <div className="card-body  ">
          <h2 className="">{skill.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeSkillCard;
