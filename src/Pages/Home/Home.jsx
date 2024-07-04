import AboutMe from "../../Components/AboutMe/AboutMe";
import HomeProjects from "../../Components/skills/HomeProjects";
import SkillsAll from "../../Components/skills/skills";
import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-10">
        <AboutMe></AboutMe>
        <SkillsAll></SkillsAll>
        <HomeProjects></HomeProjects>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
