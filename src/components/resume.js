import {React, useEffect} from 'react';
import ResumePDF from '../assets/Resume.pdf'
import Zoom from 'react-reveal/Zoom'

export default function Resume() {
    document.body.style.backgroundImage = "linear-gradient(to right, var(--color-accent), var(--color-tertiary)";
    useEffect(() => {
        console.log("loaded")
    }, [])
    return (
        <div style={{height: "auto", paddingBottom: "100px"}}>
            <Zoom>
            <div className='resume-section'>
                <div style={{display: "block"}}>
                    {/* Notice how the public folder is the current directory when importing from other files! */}
                    <h3><a href={ResumePDF} download>Download my resume!</a></h3>
                    <br />
                
                </div>
                <div style={{display: "flex"}}>
                    <div className='proficiencies'>
                    <h2>Proficiencies</h2>
                        <ul>
                            <li>React</li>

                            <li>Express.js</li>

                            <li>MongoDB</li>

                            <li>Node.js</li>  

                            <li>SQL</li>
                        </ul>
                    </div>

                    
                    <div className='proficiencies'>
                        <h2>Additional Frameworks</h2>

                        <ul>
                            <li>TensorFlow.js</li>

                            <li>Bootstrap</li>

                            <li>Mongoose</li>

                            <li>Sequelize ORM</li>

                            <li>MySQL</li>

                            <li>Trello</li>                        
                        </ul>
                    </div>
                </div>
                </div>
                </Zoom>
        </div>
    )
}