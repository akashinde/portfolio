import { Fragment, useState } from "react";

import { Link } from "react-scroll"
import Fade from 'react-reveal/Fade'


import { RiHome3Fill, RiInformationFill, RiBarChartHorizontalLine, RiCodeSSlashFill, RiContactsFill } from 'react-icons/ri'

import { RiApps2Line } from 'react-icons/ri'


const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <Fragment>
            {
                click ? (
                        <div className="navbar-container2">
                            <div className="status2">
                                <h3>Open To Work</h3>
                            </div>
                            <ul className="navbar-list2">
                                <Item to={"home"} itemName={"Home"} component={<RiHome3Fill onClick={handleClick} className="navbar-items" size={'35px'}  />} />
                                <Item to={"about"} itemName={"About Me"} component={<RiInformationFill onClick={handleClick} className="navbar-items" size={'35px'} />} />
                                <Item to={"skills"} itemName={"Skills"} component={<RiBarChartHorizontalLine onClick={handleClick} className="navbar-items" size={'35px'} />} />
                                <Item to={"services"} itemName={"Services"} component={<RiCodeSSlashFill onClick={handleClick} className="navbar-items" size={'35px'} />} />
                                <Item to={"contact"} itemName={"Contact Me"} component={<RiContactsFill onClick={handleClick} className="navbar-items" size={'35px'} />} />
                            </ul>
                        </div>
                ) : (
                    <Fade right>
                        <div className="hamburger-container">
                            <RiApps2Line onClick={handleClick} className="hamburger-button" size={'35px'} />
                        </div>
                    </Fade>
                )
            }
        </Fragment>
    );
}

const Item = ({to, itemName, component}) => {
    return <>
        <li>  
            <Fade bottom>
                <Link to={to} spy={true} smooth={true} >{component}</Link>
            </Fade>
        </li>
    </>
}

export default Navbar;