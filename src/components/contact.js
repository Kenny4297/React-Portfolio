import { useState, useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(to left, var(--lightBlue2), var(--lightBlue1)";
    }, [])

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const formSubmit = (event) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            alert('Email sent!');
            setUserData({
                name: '',
                email: '',
                message: ''
            })
        } else {
            alert('Sorry, please  enter a correct email address!')
        }
    };

    const inputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <>
            <form onSubmit={formSubmit}>
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