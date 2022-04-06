const Numbers = ({ number, text }) => {
    return (
        <div style={{ width: '100px' }}>
            <p style={{ fontSize: '30px', margin: 0}}>{number}</p>
            <p>{text}</p>
        </div>
    );
}

export default Numbers;