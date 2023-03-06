import { RiDownload2Fill } from 'react-icons/ri'

const About = () => {
    return (
        <div id="about" className="main">
            <div className="about-container">
                <div className="about-title">
                    <span>
                        About Me
                    </span>
                </div>
                <div className="desc-container">
                        <p className="about-desc">
                        With more than 1.5 years of experience as a software developer, and my area of expertise is developing and deploying robust and scalable product-based solutions. I have a solid background in building integration tests, Docker, REST-APIs, and Frontend. I have a strong will to succeed, a flexible and creative attitude, and an organized and independent work style. These qualities combine with my great communication and presentation abilities to allow me to work well with the team.
                        </p>
                        <div className="count-container">
                            <Numbers number={"1.5+"} text={"Years of Experience"} />
                            <Numbers number={"03+"} text={"Projects Completed"} />
                            <Numbers number={"02"} text={"Companies Worked"} />
                        </div>
                </div>
                <a href={require("../../files/resume.pdf")} download="Resume_Akash" target='_blank'>
                    <button className="cv-button">
                        Download CV
                        <span style={{ marginLeft: '10px' }}><RiDownload2Fill size={'20px'} style={{ position: 'absolute' }} /></span>
                    </button>
                </a>
            </div>
        </div>
    );
}

const Numbers = ({ number, text }) => {
    return (
        <div style={{ width: '100px' }}>
            <p style={{ fontSize: '30px', margin: 0 }}>{number}</p>
            <p>{text}</p>
        </div>
    );
}

export default About;