import { useState } from "react";

import { RiArrowDropDownLine } from 'react-icons/ri'
import Fade from 'react-fade-in';

const Bar = ({title, languages}) => {
    
    const [drop, setDrop] = useState(false)

    const handleClick = () => {
        setDrop(!drop)
    }

    return (
        <div>
            <div className="bar-head" onClick={handleClick}>
                <div>
                    <p style={{ fontSize: '25px'}}>{title}</p>
                </div>
                <RiArrowDropDownLine size={'50px'} />
            </div>
            {
            drop && 
            <div className="bar-content">
                <Fade>
                {
                    languages.map(i => <Language name={i.name} percentage={i.percent} />)
                }
                </Fade>
            </div>
            }
        </div>
    );
}

const Language = ({name, percentage}) => {
    return (
        <div>
            <div className="language-head">
                <p>{name}</p>
                <p>{percentage}</p>
            </div>
            <div className="progress-bar">
                <div style={{width: percentage}} className="progress-fill"></div>
            </div>
        </div>
    );
}

export default Bar;