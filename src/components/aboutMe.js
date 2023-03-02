import React, {useEffect} from 'react';

export default function AboutMe() {
    //I am using the 'useEffect' hook to change the background color of each page when the user visits the page
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(to right, var(--color-accent), var(--color-tertiary)";
    }, [])
    
    return (
        <div className='about-me'>

            <div className='about-me-section'>
                <h2>Hi, I'm Kedgard Cordero</h2>

                <p className="about-me-introduction">Dedicated self-taught MERN stack web developer with a passion for creativity. I enjoy helping others achieve their dreams by creating the best possible content for their businesses.  <br /><br />
                I absolutely love collaborating with others towards an end goal, while watching a seemingly impossible project come to fruition. <br /><br /> In my spare time you'll find me reading, playing chess, spending time with my two cats, and allocating a few hours a week keeping up with the newest trends and frameworks in the industry. While making a pivot from the hospitality industry, I bring along an importance toward the client and the team, understanding that nothing is possible without a positive attitude and successful communication towards both groups.</p>

                <h2>Let's create something</h2>
            </div>

            <div>
                <figure>
                    <img src="/assets/Prof.jpg" className="profile-pic" alt="A fairly decent man, Ked"/>
                </figure>
            </div>
        </div>
    )
};