import Bar from "./Bar";
import UpDownButton from "../UpDownButton";

const Skills = () => {
  const langauges = [
    {
      name: "Python",
      percent: "80%",
    },
    {
      name: "JavaScript",
      percent: "80%",
    },
    {
      name: "Typescript",
      percent: "70%",
    },
    {
      name: "HTML",
      percent: "90%",
    },
    {
      name: "CSS",
      percent: "90%",
    },
  ];

  const frameworks = [
    {
      name: "Vue.js",
      percent: "80%",
    },
    {
      name: "FlaskAPI",
      percent: "70%",
    },
    {
      name: "React.js",
      percent: "70%",
    },
    {
      name: "Node.js",
      percent: "80%",
    },
    {
      name: "Express.js",
      percent: "70%",
    },
  ];

  const databases = [
    {
      name: "SQL",
      percent: "70%",
    },
    {
      name: "MongoDB",
      percent: "70%",
    },
  ];

  const tools = [
    {
      name: "Pydantic",
      percent: "60%",
    },
    {
      name: "Pytest",
      percent: "60%",
    },
    {
      name: "Docker",
      percent: "60%",
    },
    {
      name: "Git",
      percent: "80%",
    },
    {
      name: "Jira",
      percent: "70%",
    },
    {
      name: "Blockchain",
      percent: "60%",
    },
  ];

  return (
    <div id="skills" className="main">
      <div className="skills-container">
        <UpDownButton isUpButton={true} to={"about"}></UpDownButton>

        <div className="skills-title">
          <span>My Technical Skills</span>
        </div>
        <div className="bar-container">
          <Bar title={"Languages"} languages={langauges} />
          <Bar title={"Frameworks"} languages={frameworks} />
          <Bar title={"Databases"} languages={databases} />
          <Bar title={"Tools"} languages={tools} />
        </div>
        <UpDownButton to={"projects"}></UpDownButton>
      </div>
    </div>
  );
};

export default Skills;
