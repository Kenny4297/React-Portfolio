import { useState, useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(to left, var(--color-accent), var(--color-tertiary)";
    }, [])

    //We want to keep track of the state in regards to our form fields.
    //Again for review: 'userData' is the variable we use to keep track of the state
    // 'setUserData' is the function we use to change the state
    //  The 'useState' here is setting the default. We obviously want the default to be an empty form field
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    })

    //We need to use another hook to keep track of the "onMouseLeave" event handler. This is also available in Vanilla JS as well.
    const [nameMessageError, setNameMessageError] = useState(false);
    const [emailMessageError, setEmailMessageError] = useState(false);
    const [messageMessageError, setMessageMessageError] = useState(false);


    const formSubmit = (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            alert('Email sent!');
            //We need to call this function to clear the form and get it ready for the next submission. In other words, we are resetting the form.
            setUserData({
                name: '',
                email: '',
                message: ''
            })
        } else {
            // The ".checkValidity" method will alert the user if they entered in an invalid email address.  
            alert('Sorry, please enter a correct email address!')
        }
    };
    // The function that is responsible for any change in the form field
    const inputChange = (event) => {
        setUserData({
            ...userData,
            //Notice that "even.target.name" is updated to the 'name' field below, and the .value is what ever the user typed into that filed. This keeps this flexible, in case we had 10 form fields.
            [event.target.name]: event.target.value
        })
    };

    //We create a function that will handle the notification to the user when their cursor moves away from the input field
    const handleMouseLeaveName = (event) => {
        if (event.target.value === '') {
            setNameMessageError(true)
        } else {
            setNameMessageError(false)
        }
    }

    const handleMouseLeaveEmail = (event) => {
        if (event.target.value === '') {
            setEmailMessageError(true)
        } else {
            setEmailMessageError(false)
        }
    }

    const handleMouseLeaveMessage = (event) => {
        if (event.target.value === '') {
            setMessageMessageError(true)
        } else {
            setMessageMessageError(false)
        }
    }

    return (
        //Remember: the 'name' here specifies the name of the input field. This is used as a key when storing the input data in the state object

        //The "value" is used to set the initial value of the input field. This value is also updated when the user types into the field.

        //The 'onChange' specifies a function that is called whenever the user types into the input field. 
        <>
        <h2 className='contact-h2'>Contact me!</h2>
            <form className="contact-section" onSubmit={formSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={userData.name} onChange={inputChange} required onMouseLeave={handleMouseLeaveName} />
                {/* This checks the state of the 'onMouseLeave' and presents a message to the user if nothing is entered in the field and they move their mouse!  */}
                {nameMessageError && <span className="error-message">This field is required!</span>}

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={userData.email} onChange={inputChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onMouseLeave={handleMouseLeaveEmail} />
                {emailMessageError && <span className="error-message">This field is required!</span>}

                <label htmlFor="message">Message:</label>
                <textarea type='text' name="message" value={userData.message} onChange={inputChange} required onMouseLeave={handleMouseLeaveMessage}></textarea>
                {messageMessageError && <span className="error-message">This field is required!</span>}

                <button type="submit">Submit</button>
            </form>
        </>
    )
}