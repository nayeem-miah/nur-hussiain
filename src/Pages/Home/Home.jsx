import AboutMe from "../../Components/AboutMe/AboutMe";
import HomeProjects from "../../Components/skills/HomeProjects";
import SkillsAll from "../../Components/skills/skills";
import Contact from "../Contact/Contact";
import Banner from "./Banner/Banner";
import pdf from "../../../src/assets/08096278-85a0-43ca-af1c-a9e8ef9ebd8e.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import ContactHome from "./ContactHome";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Helmet>
            <title>my Personal Portfolio | Home Page</title>
          </Helmet>
          <Banner></Banner>
          <div className="my-10">
            <AboutMe></AboutMe>
            <SkillsAll></SkillsAll>
            <HomeProjects></HomeProjects>
            <ContactHome></ContactHome>
            <div className="flex gap-2 items-center justify-center my-8 ">
              <a
                href={pdf}
                className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded flex  items-center gap-1"
                download={"resume"}
              >
                <FaCloudDownloadAlt></FaCloudDownloadAlt> Download CV
              </a>
              <Link
                to={"/contact"}
                className="bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded flex  items-center gap-1"
              >
                <IoCallSharp></IoCallSharp> contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
