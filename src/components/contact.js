import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    //We need state to keep track of the state of the disabled button
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisable = () => {
        //Here we check to see if the state of the button is disabled. If it is, then we disable it for 5 minuetes
        if (isDisabled) {
            console.log("Button is disabled")
        } else {
            setIsDisabled(true)
            setTimeout(() => {
                setIsDisabled(false);
            }, 5 * 60 * 1000);
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
            //Stops the page from refreshing

        console.log("test for the button")

        //Handling the disabled logic
        handleDisable();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
            console.log(result.text);
            form.current.reset()
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
        <h2 style={{color: "white"}}>Contact me! (This really works!)</h2>
        <form className="contact-section" ref={form}>
            <label style={{color: "white"}}>Name</label>
            <input type="text" name="user_name" style={{textAlign: 'center', color: 'white', fontSize: "1.2rem"}} />

            <label style={{color: "white"}}>Email</label>
            <input type="email" name="user_email" style={{textAlign: 'center', color: 'white', fontSize: "1.2rem"}} />

            <label style={{color: "white"}}>Message</label>
            <textarea name="message" style={{color: 'white'}} rows="10" cols="20" />

            {/* Notice that the input field has a built in attribute. This is why it works */}
            <input className="contact-section" style={{cursor: 'pointer'}}type="submit" value="Send" onClick={(e) => {sendEmail(e); handleDisable()}} disabled={isDisabled} />
        </form>
        </>
    );
};
