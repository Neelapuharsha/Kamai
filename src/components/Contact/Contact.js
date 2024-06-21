import React, { useState } from 'react';
import CardContact from './CardContact';
import Input from './Input';
import TextArea from './TextArea';
import Button from '../Buttons/Button';
import image from "../Contact/location1.png";
import image1 from "../Contact/phone1.png";
import image2 from "../Contact/email1.png";
import Blink from '../Blinking/Blink';

const Contact = () => {
    const [name, setName,] = useState('');
    const [title, setTitle,] = useState('');
    const [message, setMessage,] = useState('');
    return (
        <div className='main_div'>
            <div className='Contact_info'>
                <div className='information'>
                    {/* <span className="custom-bullet-contact"></span>Contact Us</h2> */}
                    <h5><Blink text="contact us" textColor="black" blinkColor="black" /></h5>
                    <p>Feel Free to contact us any time. We will get back to you as soon as we can!.</p> 
                </div>
                <CardContact
                    imageSrc={image}
                    title="Company"
                    subContent="2nd Floor, #6-3-666/A MAIN ROAD P.O, Somajiguda, Hyderabad, Telangana 500082"
                />

                <CardContact
                    imageSrc={image1}
                    title="Phone number"
                    subContent="+91 8019525165
                         +91 7993911678"
                />

                <CardContact
                    imageSrc={image2}
                    title="Email us"
                    subContent="info@admissionexample.com/n
                                     admin@admissionexample.com"
                />
            </div>

            {/* <div className="vertical-line"></div> */}
            <div className='Form_div'>
            
                <div className="card">
                <h2>Send message</h2>
                    <form>
                        <Input
                            label="Name"
                            name="name"

                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            placeholder="Name"
                        />
                        <Input
                            label="Email"
                            name="Email"
                            onChange={(e) => {
                                setTitle(e.target.value)

                            }}
                            placeholder="email"
                        />
                        <TextArea
                            label="Message"
                            placeholder='Message'
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                        />

                        <Button className="contact-btn" text="Send"

                        />
                    </form>

                </div>
            </div>

        </div>


    )
}



export default Contact;