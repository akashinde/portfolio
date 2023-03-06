import { useState } from 'react';
import { RiPhoneLine, RiMailSendLine, RiUserLocationLine, RiSendPlaneFill } from 'react-icons/ri'

import emailjs from 'emailjs-com'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const initialState = {
        fullName: '', 
        email: '', 
        project: '', 
        message: ''
    }

    const [form, setForm] = useState(initialState)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = process.env.REACT_APP_SERVICE_ID
        const templateId = process.env.REACT_APP_TEMPLATE_ID
        const apiKey = process.env.REACT_APP_API_KEY

        const response = emailjs.sendForm(serviceId, templateId, e.target, apiKey)
        // .then((result) => {
        //     notify()
        //     console.log(result.text)
        // }, (error) => {
        //     console.log(error)
        // });
        toast.promise(
            response,
            {
              pending: 'Sending...',
              success: 'Message Sent',
              error: 'Something Went Wrong'
            }
        )
        setForm(initialState)
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
                            <Details title={"Call Me"} info={"+49 15510 440645"} component={<RiPhoneLine size={'40px'} />} />
                        </div>
                        <div className="details-container">
                            <Details title={"Email"} info={"shinde10akash@outlook.com"} component={<RiMailSendLine size={'40px'} />} />
                        </div>
                        <div className="details-container">
                            <Details title={"Location"} info={"Germany, 60437"} component={<RiUserLocationLine size={'40px'} />} />
                        </div>
                    </div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <input name="fullName" className="form-component" type="text" placeholder="Name" value={form.fullName} onChange={handleChange} />
                            <input name="email" className="form-component" type="email" placeholder="Email" value={form.email} onChange={handleChange}  />
                        </div>

                        <input name="project" className="form-component" type="text" placeholder="Project" value={form.project} onChange={handleChange} />
                        <textarea name="message" className="form-component" type="text" placeholder="Message" rows="4" cols="50" value={form.message} onChange={handleChange} />
                        <button className="submit-button">
                            Send Message
                            <span style={{marginLeft: '5px'}}><RiSendPlaneFill size={'20px'} style={{position:'absolute'}} /></span>    
                        </button>
                    </form>
                </div>

                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar={true}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover={false}
                    theme={'dark'}
                />

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