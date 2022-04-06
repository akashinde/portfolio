import { Fragment } from "react";

import Fade from 'react-reveal/Fade'

import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

import useWindowDimensions from '../useWindowDimensions'

const Home = () => {

    const { height, width } = useWindowDimensions()

    return (
        <Fragment>
            <div id="home" className="main">
                <div className="container">
                    <div className="intro">
                        <Fade>
                            <p className="title">Hey, I'm Akash</p>
                            <p className="sub-title">Web Developer</p>
                            <p className="description">A developer building delightfully awesome things. You can find out more about me, have a look at some things I've built.</p>
                            
                            <Mailto email={process.env.REACT_APP_EMAIL_ID} subject="Pinging" body="Hey Akash, ...">
                                <button className="ping-me-button">
                                    Ping me
                                </button>
                            </Mailto>
                        </Fade>
                    </div>

                    <Fade>
                        {
                            width < 1024 ? (
                                <>
                                <div className="profile-photo">
                                    <img src={require("../../files/profile_photo.jpeg")} alt="profile photo" />
                                </div>
                                <div className="navbar-footer2">
                                    <span>
                                        <a href={process.env.REACT_APP_LINKED_IN} target="_blank" >
                                            <AiOutlineLinkedin size={'30px'} />
                                        </a>
                                    </span>
                                    <span>
                                        <a href={process.env.REACT_APP_GITHUB} target="_blank" >
                                            <AiOutlineGithub size={'30px'} />   
                                        </a>
                                    </span>
                                </div>
                                </>
                            ) : (
                                <div className="profile-photo">
                                    <img src={require("../../files/profile_photo.jpeg")} alt="profile photo" />
                                </div>
                            )
                        }
                    </Fade>
                </div>
            </div>
        </Fragment>
    );
}

const Mailto = ({ email, subject, body, children }) => {
    return (
      <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
    );
};

export default Home;