import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import HomeSkillCard from "../HomeSkillsCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const SkillsAll = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("../../../public/skills.json")
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
      <p className="text-xs lg:text-xl lg:my-9 my-5">As a dedicated and enthusiastic Junior Frontend Developer, I possess a robust skill set and a keen eye for design. My expertise includes crafting well-structured HTML for accessible and SEO-friendly web pages, styling responsive layouts with CSS, and implementing dynamic features with JavaScript. I excel in using Tailwind CSS for rapid design, developing scalable applications with React.js, and building efficient server-side applications with Node.js and Express.js. Additionally, I have experience in integrating real-time databases and authentication with Firebase, managing data with MongoDB, and enhancing UI development with DaisyUI components. Continuously expanding my knowledge, I am committed to delivering seamless and engaging user experiences.</p>

      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-4"
        >
          <div className=" grid grid-cols-1 gap-10">
            {skills.map(skill => (
              <SwiperSlide key={skill.id}>
                <HomeSkillCard skill={skill}></HomeSkillCard>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div class="flex justify-center items-center lg:py-5 py-3">
          <Link
            to={"/skills"}
            className="bg-gradient-to-r flex  items-center gap-1 from-blue-500 via-green-500 to-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded"
          >
             shills Details  <FaArrowRight></FaArrowRight>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default SkillsAll;
