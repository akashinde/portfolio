import Card from "./Card";

const Services = () => {
    return (
        <div id="services" className="main">
            <div className="services-container">
                <div className="services-title">
                    <span>
                        Service I Offer
                    </span>
                </div>
                <div className="card-container">
                    <Card title={"Static Website"} />
                    <Card title={"Backend API Setup"} />
                    <Card title={"MERN Stack Applications"} />
                </div>
            </div>
        </div>
    );
}

export default Services;