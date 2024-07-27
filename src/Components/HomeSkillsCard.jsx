import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HomeSkillCard = ({ skill }) => {
  //   console.log(skill);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
   

    <div
      data-aos="fade-up"
      data-aos-duration="3000"
      className="card  bg-base-300 shadow-xl  hover:scale-105 border border-purple-400 h-36 lg:h-full w-20  md:w-40 lg:w-full "
    >
      <figure>
        <img
          className="h-28  lg:w-full md:w-36 w-20 lg:h-52 lg:p-5 md:p-5 p-5 rounded-lg "
          src={skill.img}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title lg:text-2xl text-[10px] md:text-xl lg:text-center text-start ">
          {skill.name}
        </h2>
      </div>
    </div>
  );
};

export default HomeSkillCard;
