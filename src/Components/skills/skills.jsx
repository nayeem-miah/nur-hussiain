import { useEffect, useState } from "react";

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
  console.log(skills);
  return <div>

  </div>;
};

export default SkillsAll;
