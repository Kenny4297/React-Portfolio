import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { successToast } from './customToast';
import { ToastContainer } from 'react-toastify';

export default function Contact() {
    document.body.style.backgroundImage = "linear-gradient(to right, var(--color-accent), var(--color-tertiary)";
    useEffect(() => {
        console.log("loaded")
    }, [])

    const form = useRef();

    //The toast that lets the user know that the email as been sent!
    const showSuccessToast = () => {
        successToast('Email has been sent! You must wait 1 minute before sending another email!');
      };

    //We need state to keep track of the state of the disabled button
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisable = () => {
        //Here we check to see if the state of the button is disabled. If it is, then we disable it for 5 minutes
        if (!isDisabled) {
            setIsDisabled(true)
            setTimeout(() => {
                setIsDisabled(false);
            }, 60000);
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
        .then((result) => {
            console.log(result.text);
            showSuccessToast();
            form.current.reset()
        }, (error) => {
            console.log(error.text);
        });
    
        // Clear the input fields after the email is sent
        form.current.elements.from_name.value = "";
        form.current.elements.reply_to.value = "";
        form.current.elements.message.value = "";
    };

    //! Old version
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     console.log("test for the button")

    //     emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID)
    //     .then((result) => {
    //         console.log(result.text);
    //         showSuccessToast();
    //         form.current.reset()
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // };

    return (
        <>
        <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        <h2 style={{color: "white"}}>Contact me! (This really works!)</h2>
        <form className="contact-section" ref={form}>
            <label style={{color: "white"}}>Name</label>
            <input type="text" name="from_name" style={{textAlign: 'center', color: 'white', backgroundColor: 'grey', fontSize: "1.2rem", border: 'solid white 2px'}} />

            <label style={{color: "white"}}>Email</label>
            <input type="email" name="reply_to" style={{textAlign: 'center', color: 'white', backgroundColor: 'grey', fontSize: "1.2rem", border: 'solid white 2px'}} />

            <label style={{color: "white"}}>Message</label>
            <textarea name="message" style={{color: 'white',backgroundColor: 'grey', border: 'solid white 2px'}} rows="10" cols="20" />

            {/* Notice that the input field has a built in attribute. This is why it works */}
            <input className="contact-section" style={{cursor: 'pointer'}}type="submit" value="Send" onClick={(e) => {sendEmail(e); handleDisable()}} disabled={isDisabled} />
        </form>
        </>
    );
};
