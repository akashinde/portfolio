import { Link } from "react-scroll"
import { RiArrowRightLine } from "react-icons/ri"
import { useState } from "react";

const Card = ({ title, hrefLink }) => {
    const [isShown, setIsShown] = useState(false)

    const handleEvent = () => {
        setIsShown(!isShown)
    }

    const style = {
        transform: 'translateX(10px)'
    }

    return (
        <div className="card-body">
                <p className="card-title">{title}</p>
                <div className="card-button">
                    <span onMouseEnter={handleEvent} onMouseLeave={handleEvent}>
                        <a href={hrefLink} style={{color: 'white', textDecoration: 'none'}} target="_blank">
                        Know More
                        </a>
                        <RiArrowRightLine className="card-arrow" style={isShown && style} />
                    </span>
                </div>
        </div>
    );
}

export default Card;