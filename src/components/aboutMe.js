import React, {useEffect} from 'react';
import ProfNoBack from '../images/ProfNoBack.png'

export default function AboutMe() {
    //I am using the 'useEffect' hook to change the background color of each page when the user visits the page

    document.body.style.backgroundImage = "linear-gradient(to right, var(--color-accent), var(--color-tertiary)";
    useEffect(() => {
        console.log("loaded")
    }, [])
    
    return (
        <div className='about-me'>

            <div className='about-me-section'>
                <h2>Hi, I'm Kedgard Cordero</h2>

                <p style={{marginTop: "2rem"}}>Self taught M(S)ERN stack web developer with a curiosity for Web ML and a passion for creativity! I enjoy helping others achieve their dreams by creating the best possible content for their businesses, even under pressure!  <br /><br />
                I absolutely love collaborating with others towards an end goal, while watching a seemingly impossible project come to fruition. <br /><br /> In my spare time you'll find me reading, playing chess, spending time with my two cats, and allocating a few hours a week keeping up with the newest trends and frameworks in the industry. While making a pivot from the hospitality industry, I bring along an importance toward the client and the team, understanding that nothing is possible without a positive attitude and successful communication towards both groups.</p>

                <h2 style={{textAlign: "center"}}>Let's create something</h2>
            </div>

            <div>
                <figure>
                    <img src={ProfNoBack} className="profile-pic" alt="A fairly decent man, Ked"/>
                </figure>
            </div>
        </div>
    )
};
