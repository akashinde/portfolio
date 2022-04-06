import { useState } from "react";

import { RiArrowDropDownLine } from 'react-icons/ri'
import FadeIn from 'react-fade-in';

const Bar = ({title, period, languages}) => {
    
    const [drop, setDrop] = useState(false)

    const handleClick = () => {
        setDrop(!drop)
    }

    return (
        <div>
            <div className="bar-head">
                <div>
                    <p style={{ marginBottom:'10px', fontSize: '25px'}}>{title}</p>
                    <p style={{ opacity: '70%', margin: 0}}>{period}</p>
                </div>
                <button onClick={handleClick}>
                    <span>
                        <RiArrowDropDownLine size={'50px'} style={{position:'absolute'}} />
                    </span>
                </button>
            </div>
            {
            drop && 
            <div className="bar-content">
                <FadeIn>
                {
                    languages.map(i => <Language name={i.name} percentage={i.percent} />)
                }
                </FadeIn>
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