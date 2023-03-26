import React, {useEffect, useState} from 'react';
import ProfNoBack from '../images/ProfNoBack.png';
import Bounce  from 'react-reveal/Bounce'


export default function AboutMe() {
    //I am using the 'useEffect' hook to change the background color of each page when the user visits the page

    document.body.style.backgroundImage = "linear-gradient(to right, var(--color-accent), var(--color-tertiary)";
    useEffect(() => {
        console.log("loaded")
    }, [])
    
    return (
        <div className='about-me'>

            <div className='about-me-section'>
                <Bounce right>
                    <h2 style={{fontFamily: "'Edu NSW ACT Foundation', cursive", fontSize: "2.5rem"}}>Hi, I'm Kedgard Cordero</h2>

                    <p style={{marginTop: "2rem", fontFamily: "'Space Grotesk', sans-serif"}}>Self-taught Software Developer with a passion for creativity! I enjoy helping others achieve their dreams by creating the best possible content!  <br /><br />
                    I absolutely love collaborating with others towards an end goal, while watching a seemingly impossible project come to fruition.</p> 

                    <h2 style={{textAlign: "center", fontFamily: "'Alkatra', cursive"}}>Let's create something</h2>
                </Bounce>
            </div>

            <div>
                <figure>
                    <Bounce left>
                        <img src={ProfNoBack} className="profile-pic" alt="A fairly decent man, Ked"/>
                    </Bounce>
                </figure>
            </div>
        </div>
    )
};
