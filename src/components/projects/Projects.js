import Card from "./Card";
import UpDownButton from "../UpDownButton";

const Projects = () => {

    const frontend = [
        {
            name: 'HTML',
            percent: '80%'
        },
        {
            name: 'CSS',
            percent: '70%'
        },
        {
            name: 'JavaScript',
            percent: '90%'
        },
        {
            name: 'React',
            percent: '70%'
        }
    ]

    return (
        <div id="projects" className="main">
            <div className="projects-container">
                <UpDownButton isUpButton={true} to={"skills"}></UpDownButton>
                <div className="projects-title">
                    <span>
                        Projects
                    </span>
                </div>
                <div className="bar-container">
                    <Card title={"Offline-first Blog App"} hrefLink={"https://github.com/akashinde/blog-wave"} />
                    <Card title={"Bug Tracker"} hrefLink={"https://github.com/akashinde/track-the-bug"} />
                    <Card title={"Identity Management System using Blockchain"} hrefLink={"https://github.com/akashinde/ManageiD"} />
                    <Card title={"Blockchain using Nodejs"} hrefLink={"https://www.linkedin.com/posts/akashinde_javascript-github-nodejs-activity-6857984781465075712-kEyd?utm_source=linkedin_share&utm_medium=member_desktop_web"} />
                    <Card title={"Automated Car Parking System"} hrefLink={"https://www.linkedin.com/posts/akashinde_automationsolutions-raspberrypi-esp8266-activity-6787409979440799744-0syy?utm_source=linkedin_share&utm_medium=member_desktop_web"} />
                </div>
                <UpDownButton to={"contact"}></UpDownButton>
            </div>
        </div>
    );
}

export default Projects;