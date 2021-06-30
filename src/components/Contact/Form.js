import React from 'react'
import image from '../../Images/undraw-contact.svg'
import './Form.css'

const Form = () => {
    return (
        <div className="contact">
            <div className="row">
                <div className="col-1">
                    <h3>Let's talk about everything!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?Lorem ipsum dolor sit amet, consectetur ad</p>
                    <p><img src={image} alt="Image" className="img" /></p>
                </div>
                <div className="col-2">
                    <form id="contactForm" name="contactForm">
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" name="name" id="name" placeholder="Your name" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" name="email" id="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <textarea className="form-control" name="message" id="message" cols={30} rows={7} placeholder="Write your message" defaultValue={""} style={{height:'auto'}} />
                            </div>
                        </div>
                        <div className="btn">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
