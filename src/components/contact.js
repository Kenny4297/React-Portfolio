import { useState, useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(to left, var(--lightBlue2), var(--lightBlue1)";
    }, [])

    //We want to keep track of the state in regards to our form fields.
    //Again for reviews: 'userData' is the variable we use to keep track of the state
    // 'setUserData' is the function we use to change the state
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const formSubmit = (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            alert('Email sent!');
            //We need to call this function to clear the form and get it ready for the next submission. In other words, ee are resetting the form.
            setUserData({
                name: '',
                email: '',
                message: ''
            })
        } else {
            alert('Sorry, please enter a correct email address!')
        }
    };

    const inputChange = (event) => {
        setUserData({
            ...userData,
            //Notice that "even.target.name" is updated to the 'name' field below, and the .value is what ever the user typed into that filed. This keeps this flexible, in case we had 10 form fields
            [event.target.name]: event.target.value
        })
    }

    return (
        //Remember: the 'name' here specifies the name of the input field. This is used as a key when storing the input data in the state object

        //The "value" is used to set the initial value of the input field. This value is also updated when the user types into the field.

        //The 'onChange' specifies a function that is called whenever the user types into the input field. 
        <>
        <h2>Contact me!</h2>
            <form className="contact-section" onSubmit={formSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={userData.name} onChange={inputChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={userData.email} onChange={inputChange} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />

                <label htmlFor="message">Message:</label>
                <textarea type='text' name="message" value={userData.message} onChange={inputChange} required></textarea>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}