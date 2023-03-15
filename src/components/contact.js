

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
            //Stops the page from refreshing

        console.log("test for the button")

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <>
        <h2 style={{color: "white"}}>Contact me! (This really works!)</h2>
        <form className="contact-section" ref={form} onSubmit={(e) => sendEmail(e)}>
            <label style={{color: "white"}}>Name</label>
            <input type="text" name="user_name" />

            <label style={{color: "white"}}>Email</label>
            <input type="email" name="user_email" />

            <label style={{color: "white"}}>Message</label>
            <textarea name="message" />

            <input className="contact-section" type="submit" value="Send" />
        </form>
        </>
    );
};
