import { useState } from 'react';
import { RiPhoneLine, RiMailSendLine, RiUserLocationLine, RiSendPlaneFill } from 'react-icons/ri'

import emailjs from 'emailjs-com'

const Contact = () => {

    const [state, setState] = useState({})

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_kprh7t8', 'template_hohe93o', e.target, 'Zek2MgafFbdrveFvJ')
        .then((result) => {
            console.log(result.text)
        }, (error) => {
            console.log(error)
        });
        e.target.reset();
    }

    return (
        <div id="contact" className="main">
            <div className="contact-container">
                <div className="contact-title">
                    <span>
                        Get in touch
                    </span>
                </div>

                <div className="contact-body">
                    <div className="contact-details">
                        <div className="details-container">
                            <Details title={"Call Me"} info={"+91 86918 59293"} component={<RiPhoneLine size={'40px'} />} />
                        </div>
                        <div className="details-container">
                            <Details title={"Email"} info={"shinde10akash@outlook.com"} component={<RiMailSendLine size={'40px'} />} />
                        </div>
                        <div className="details-container">
                            <Details title={"Location"} info={"Mumbai, 400104"} component={<RiUserLocationLine size={'40px'} />} />
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <input name="fullName" className="form-component" type="text" placeholder="Name" value={state.fullName} onChange={handleChange} />
                            <input name="email" className="form-component" type="email" placeholder="Email" value={state.email} onChange={handleChange}  />
                        </div>

                        <input name="project" className="form-component" type="text" placeholder="Project" value={state.project} onChange={handleChange} />
                        <textarea name="message" className="form-component" type="text" placeholder="Message" rows="4" cols="50" value={state.message} onChange={handleChange} />
                        <button className="submit-button">
                            Send Message
                            <span style={{marginLeft: '5px'}}><RiSendPlaneFill size={'20px'} style={{position:'absolute'}} /></span>    
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

const Details = ({title, info, component}) => {
    return (
        <>
            <span style={{marginRight: '15px'}}>{component}</span>
            <div>
                <p style={{fontSize: '25px', marginBottom: '8px'}}>{title}</p>
                <p style={{margin:0, opacity:'70%'}}>{info}</p>
            </div>
        </>
    )
}

export default Contact;