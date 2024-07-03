import AboutMe from "../../Components/AboutMe/AboutMe";
import SkillsAll from "../../Components/skills/skills";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-10">
        <AboutMe></AboutMe>
        <SkillsAll></SkillsAll>
      </div>
    </div>
  );
};

export default Home;
