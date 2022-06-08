import { RiDownload2Fill } from 'react-icons/ri'

const About = () => {
    return (
        <div id="about" className="main">
            <div className="about-container">
                <div className="about-title">
                    <span>
                        My Introduction
                    </span>
                </div>
                <div className="desc-container">
                    <div style={{ textAlign: 'center' }}>
                        <p className="about-desc">
                            Experience with microservice architecture and designing API solutions for backend services. With a practical background, I am a highly motivated and productive developer. Detail-oriented with great multi-tasking and day-to-day task management abilities. Strong interpersonal abilities to create and maintain good professional connections with coworkers and clients.
                        </p>
                        <div className="count-container">
                            <Numbers number={"01+"} text={"Years of Experience"} />
                            <Numbers number={"02+"} text={"Projects Completed"} />
                            <Numbers number={"01"} text={"Companies Worked"} />
                        </div>
                    </div>
                </div>
                <a href={require("../../files/Resume_Akash.pdf")} download="Akash_Shinde_CV" target='_blank'>
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