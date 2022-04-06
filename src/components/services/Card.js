import { Link } from "react-scroll"
import { RiArrowRightLine } from "react-icons/ri"
import { useState } from "react";

const Card = ({title}) => {
    const [isShown, setIsShown] = useState(false)

    const handleEvent = () => {
        setIsShown(!isShown)
    }

    const style = {
        transform: 'translateX(10px)'
    }

    return (
        <div className="card-body">
            <div>
                <p className="card-title">{title}</p>
                <Link className="card-button" to="contact" spy={true} smooth={true}>
                    <span onMouseEnter={handleEvent} onMouseLeave={handleEvent}>
                        Know More 
                        <RiArrowRightLine className="card-arrow" style={isShown && style} />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default Card;