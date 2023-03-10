import { React, useEffect } from 'react';

export default function Portfolio() {
    useEffect(() => {
        document.body.style.backgroundImage = "linear-gradient(to bottom, var(--color-accent), var(--color-tertiary)";
    }, [])

    const workProps = [
        { projectName: "Be Tethical (GitHub)", githubLink: 'https://github.com/Kenny4297/Be-Tethical', deploymentLink: "https://be-tethical-production.up.railway.app/" },
    
        { projectName: "Note Taker App (GitHub)", githubLink: 'https://github.com/Kenny4297/Note-Taker', deploymentLink: "https://zealous-wound-production.up.railway.app/" },
    
        { projectName: "E-Commerce (GitHub)", githubLink: "https://github.com/Kenny4297/Electronic-Commerse-DB"},
    
        { projectName: "Employee Tracker (GitHub)", githubLink: "https://github.com/Kenny4297/Employee-Tracker"},
    
        { projectName: "Weather Dashboard (GitHub)", githubLink: "https://github.com/Kenny4297/Weather-App-API", deploymentLink: "https://kenny4297.github.io/Weather-App-API/"}
    ];

    return (
        <>
            <h2>Favorite Projects</h2>
            <section className="work">
                {/* Here we loop through the props located below this function.  */}
                {workProps.map((individualWork, index) => (
                    // We include the index (above) as a second parameter to know what specific project we are on for CSS purposes

                        //We need to have the "key-{index}" here. It's a React thing, and it needs to keep track of multiple components when you render them out. 
                        <div key={index} className={`grid-item work-example-${index + 1}`}>
                            
                            <h3 className='project-technologies'><a href={individualWork.githubLink} target="_blank" rel="noreferrer">{individualWork.projectName}</a></h3>
                            <p className='project-technologies'>{individualWork.projectTechnologies}</p>

                            {/* A cool "if then" in React. IF the left hand side before the '&&' is correct, the right part will render */}
                            {individualWork.deploymentLink && <p className='project-technologies'><a href={individualWork.deploymentLink} target="_blank" rel="noreferrer">Deployment</a></p>}
                        </div>
                ))}
                {/* Notice how this section closing tag is outside the map! We are only mapping through the specific work section, not the entire section itself */}
            </section>
        </>
    )
};


