const SkillsCard = ({ skill }) => {
  console.log(skill);
  return (
    <div>
      <div className="card bg-base-100  shadow-xl h-96">
        <figure className="px-10 pt-10">
          <img src={skill.img} alt="skill" className="rounded-xl h-28" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{skill.name}</h2>
          <p>
            <span className="font-bold">experience:</span> {skill.experience}
          </p>
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
