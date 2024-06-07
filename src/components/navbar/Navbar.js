import { Fragment } from "react";

import { Link } from "react-scroll"
import Fade from 'react-reveal/Fade'

import { RiHome3Fill, RiInformationFill, RiBarChartHorizontalLine, RiCodeSSlashFill, RiContactsFill } from 'react-icons/ri'

import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineProject } from 'react-icons/ai'

const Navbar = () => {
    return (
        <Fragment>
            <div className="navbar-container">

                <div className="status">
                    <Link to={"about"} spy={true} smooth={true}>{<h3>Open to Work</h3>}</Link>
                </div>

                <ul className="navbar-list">
                    <Item to={"home"} cls={'active'} component={<RiHome3Fill title="Home" className="navbar-items" size={'50px'} />} />
                    <Item to={"about"} component={<RiInformationFill title="About Me" className="navbar-items" size={'50px'} />} />
                    <Item to={"skills"} component={<RiBarChartHorizontalLine title="Skills" className="navbar-items" size={'50px'} />} />
                    <Item to={"projects"} component={<AiOutlineProject title="Projects" className="navbar-items" size={'50px'} />} />
                    {/* <Item to={"services"} component={<RiCodeSSlashFill title="Services" className="navbar-items" size={'50px'} />} /> */}
                    <Item to={"contact"} component={<RiContactsFill title="Contact Me" className="navbar-items" size={'50px'} />} />
                
                </ul>

                <div className="navbar-footer">
                    <span>
                        <a href={process.env.REACT_APP_LINKED_IN} target="_blank" >
                            <AiOutlineLinkedin size={'40px'} />
                        </a>
                    </span>
                    <span>
                        <a href={process.env.REACT_APP_GITHUB} target="_blank" >
                            <AiOutlineGithub size={'40px'} />   
                        </a>
                    </span>
                </div>
            </div>
        </Fragment>
    );
}

const Item = ({to, cls, component}) => {
    return <>
        <li>  
            <Fade left>
                <Link activeClass={cls} to={to} spy={true} smooth={true} >{component}</Link>
            </Fade>
        </li>
    </>
}

export default Navbar;