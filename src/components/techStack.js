import {React, useEffect} from 'react';
import Zoom from 'react-reveal/Zoom'

export default function TechStack() {
    document.body.style.backgroundImage = "linear-gradient(to right, var(--color-accent), var(--color-tertiary)";
    useEffect(() => {
        console.log("loaded")
    }, [])
    return (
        <div style={{height: "auto", paddingBottom: "100px"}}>
            <Zoom>
            <div className='resume-section'>
                <div style={{display: "flex"}}>
                    <div className='proficiencies'>
                    <h2>Proficiencies</h2>
                        <ul>
                            <li>React</li>

                            <li>Python</li>

                            <li>JavaScript</li>

                            <li>Express.js</li>

                            <li>MongoDB</li>

                            <li>Node.js</li>  

                            <li>SQL</li>
                        </ul>
                    </div>

                    
                    <div className='proficiencies'>
                        <h2>Additional Frameworks</h2>

                        <ul>
                            <li>HTML</li>

                            <li>CSS</li>

                            <li>Git</li>

                            <li>Bootstrap</li>

                            <li>Mongoose ORM</li>

                            <li>Sequelize ORM</li>

                            <li>MySQL</li>

                            <li>jQUery</li>                        
                        </ul>
                    </div>
                </div>
                </div>
                </Zoom>
        </div>
    )
}