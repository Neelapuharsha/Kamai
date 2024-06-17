import React, { useState } from 'react';
import CardContact from './CardContact';
import Input from './Input';
import TextArea from './TextArea';
import Button from '../Buttons/Button';
import image from "../Contact/location1.png";
import image1 from "../Contact/phone1.png";
import image2 from "../Contact/email1.png";


const Contact = () => {
    const [name, setName,] = useState('');
    const [title, setTitle,] = useState('');
    const [message, setMessage,] = useState('');
    return (
        <div className='main_div'>
            <div className='Contact_info'>
                <div className='information'>
                    <h2>Contact Us!</h2>
                    {/* <p>Provide most popular courses that your want to join and lets start the course for the most simply courses here you can build your career very smoothly.</p> */}
                </div>
                <CardContact
                    imageSrc={image}
                    title="Company"
                    subContent="512/F, Central, Main Town/nJackson Heights.
       hhjhhjjh New York"
                />

                <CardContact
                    imageSrc={image1}
                    title="Phone number"
                    subContent="+12345 678 910/n
                         +12345 910 876"
                />

                <CardContact
                    imageSrc={image2}
                    title="Email us"
                    subContent="info@admissionexample.com/n
                                     admin@admissionexample.com"
                />
            </div>

            <div className='Form_div'>
                <div className='info_query'>
                    <h2>Drop us a line</h2>
                    <p>Please feel free to contact us if you ahve further Questions or cocerns</p>
                </div>
                <div className="card">

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

                        <Button className="contact-btn" text="Send Message"

                        />
                    </form>

                </div>
            </div>
        </div>

    )
}



export default Contact;