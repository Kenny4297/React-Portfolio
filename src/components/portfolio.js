import { React, useEffect } from 'react';

export default function Portfolio() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(to bottom, var(--lightBlue2), var(--lightBlue1)";
    }, [])

    const workProps = [
        { projectName: "Be Tethical", projectTechnologies: "Sequelize, JavaScript", link: "https://github.com/Kenny4297/Be-Tethical" },
    
        { projectName: "Note Taker App", projectTechnologies: "JavaScript, Express.js", link: "https://zealous-wound-production.up.railway.app/" },
    
        { projectName: "E-Commerce", projectTechnologies: "Node.js, JavaScript, SQL", link: "https://github.com/Kenny4297/Electronic-Commerse-DB"},
    
        { projectName: "Employee Tracker", projectTechnologies: "Node.js, JavaScript, SQL", link: "https://github.com/Kenny4297/Track-that-Employee"},
    
        { projectName: "Weather Dashboard", projectTechnologies: "Open Weather API, JavaScript, Bootstrap", link: "https://kenny4297.github.io/Keds-Wicked-Weather-WApp/"}
    ];

    return (
        <>
            <h2 id="work">My Work</h2>
            <section className="work">
                {/* Here we loop through the props located below this function.  */}
                {workProps.map((individualWork, index) => (
                    // We include the index as a second parameter to know what specific project we are on for CSS purposes
                    
                        <div key={index} className={`grid-item work-example-${index + 1}`}>
                            <a href={individualWork.link} target="_blank" rel="noreferrer">
                                <h3>{individualWork.projectName}</h3>
                                <p>{individualWork.projectTechnologies}</p>
                            </a>  
                        </div>
                ))}
                {/* Notice how this section closing tag is outside the map! We are only mapping through the specific work section, not the entire section itself */}
            </section>
        </>
    )
};


