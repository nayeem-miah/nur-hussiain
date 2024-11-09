import AboutMe from "../../Components/AboutMe/AboutMe";
import HomeProjects from "../../Components/skills/HomeProjects";
import SkillsAll from "../../Components/skills/skills";

import Banner from "./Banner/Banner";
import pdf from "../../../src/assets/django-mlcv.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCallSharp } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import ContactForm from "../Contact/ContactForm";

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
            <title>NUR HOSSEN | Home Page</title>
          </Helmet>
          <Banner></Banner>
          <div className="my-10">
            <AboutMe></AboutMe>
            <SkillsAll></SkillsAll>
            <HomeProjects></HomeProjects>
            <ContactForm/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
