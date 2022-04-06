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

export default Language;