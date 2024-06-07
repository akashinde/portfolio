import { RiDownload2Fill } from "react-icons/ri";
import UpDownButton from "../UpDownButton";

const About = () => {
  return (
    <div id="about" className="main">
      <div className="about-container">
        <UpDownButton isUpButton={true} to={"home"}></UpDownButton>
        <div className="about-title">
          <span>About Me</span>
        </div>
        <div className="desc-container">
          <p className="about-desc">
            Pursuing Master’s in Computer Science while actively collaborating
            in agile software development of safety-critical digital solutions
            for more than 2 years. Specialized in implementing robust and
            scalable solutions with a strong foundation in the software
            development lifecycle. Driven by a growth attitude and a strong
            desire to stay ahead of the curve with a passion for learning.
          </p>
          <div className="count-container">
            <Numbers number={"2.5+"} text={"Years of Experience"} />
            <Numbers number={"10+"} text={"Projects Completed"} />
            <Numbers number={"03"} text={"Companies Worked"} />
          </div>
        </div>
        <a
          className="cv-button"
          href={require("../../files/resume.pdf")}
          download="Resume_Akash"
          target="_blank"
        >
          <span>Resume</span>
          <RiDownload2Fill size={"30px"} />
        </a>
        <UpDownButton to={"skills"}></UpDownButton>
      </div>
    </div>
  );
};

const Numbers = ({ number, text }) => {
  return (
    <div style={{ padding: "10px" }}>
      <p style={{ fontSize: "40px", margin: 0 }}>{number}</p>
      <p
        style={{
          fontSize: "20px",
          margin: 0,
          fontStyle: "italic",
          color: "#ffffff90",
        }}
      >
        {text}
      </p>
    </div>
  );
};

export default About;
