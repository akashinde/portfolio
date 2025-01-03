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
            I am a Full-Stack Engineer with over three years of experience in 
            enhancing user experiences and building secure, scalable backend systems. 
            I specialize in applying SOLID principles to create effective insurance 
            and financial applications and am passionate about test-driven development 
            and automating tasks. I enjoy learning new technologies, driving innovative 
            projects, and contributing to open-source communities.
          </p>
          <div className="count-container">
            <Numbers number={"3+"} text={"Years of Experience"} />
            <Numbers number={"10+"} text={"Projects Completed"} />
            <Numbers number={"03"} text={"Companies Worked"} />
          </div>
        </div>
        <a
          className="cv-button"
          href={require("../../files/resume.pdf")}
          download="01_Resume_Shinde"
          target="_blank"
        >
          <span>Download Resume</span>
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
