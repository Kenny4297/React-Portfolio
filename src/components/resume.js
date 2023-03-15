import {React, useEffect} from 'react';

export default function Resume() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(to top, var(--color-tertiary), var(--color-accent)";
    }, [])
    return (
        <>
        <div className='resume-section'>
            <div style={{display: "block"}}>
                {/* Notice how the public folder is the current directory when importing from other files! */}
                <h3><a href="/assets/ResumePDF.pdf" download>Download my resume!</a></h3>
                <br />
            
            </div>
            <div style={{display: "flex"}}>
                <div className='proficiencies'>
                <h2>Proficiencies</h2>
                    <ul>
                        <li>MongoDB</li>

                        <li>Express.js</li>

                        <li>SQL</li>

                        <li>React</li>

                        <li>Node.js</li>  
                    </ul>
                </div>

                
                <div className='proficiencies'>
                    <h2>Additional Frameworks</h2>

                    <ul>
                        <li>TensorFlow.js</li>

                        <li>Bootstrap</li>

                        <li>Mongoose </li>

                        <li>Sequelize ORM</li>

                        <li>MySQL</li>

                        <li>Express Handlebars</li>                                   
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}