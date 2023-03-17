import { React, useEffect } from 'react';
import pawPrints from '../images/pawPrints.png';
import beThethical from '../images/BeTethicalUpdated.png';
import weatherApp from '../images/weatherAppUpdated.png';

export default function Portfolio() {
    document.body.style.backgroundImage = "linear-gradient(to left, var(--color-accent), var(--color-tertiary)";
    useEffect(() => {
        console.log("loaded")
    }, [])

    const workProps = [
        { projectImage: pawPrints, projectName: "Paw Prints", githubLink: 'https://github.com/4therealm/pet-finder-app', deploymentLink: "https://pet-finder-application.herokuapp.com/", projectDescription: "A 'find your lost pet' application that uses machine learning image recognition, SMS services, and geolocation to provide the most accurate information to nervous owners of lost pets.", projectResponsibilities: "Responsible for uploading images and machine learning image recognition." },
        
        { projectImage: beThethical, projectName: "Be Tethical", githubLink: 'https://github.com/Kenny4297/Be-Tethical', deploymentLink: "https://be-tethical-production.up.railway.app/", projectDescription: "A fun CMS that allows users to post their thoughts on anything video game related, and comment on others posts." },
    
        { projectImage: weatherApp, projectName: "Weather Dashboard", githubLink: "https://github.com/Kenny4297/Weather-App-API", deploymentLink: "https://kenny4297.github.io/Weather-App-API/", projectDescription: "A fun weather dashboard that allows the user to check the five day forecast in any city around the world."}
    ];

    return (
        <>
            <h2>Favorite Projects</h2>
            <section  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{textAlign: 'center', border: '2ps solid red'}}>
                    {/* Here we loop through the props located below this function.  */}
                    {workProps.map((individualWork, index) => (
                        // We include the index (above) as a second parameter to know what specific project we are on for CSS purposes

                        //We need to have the "key-{index}" here. It's a React thing, and it needs to keep track of multiple components when you render them out. 
                        <div className="box-shadow" style={{border: "6px dashed #4d4d4d", padding: '0px 20px',marginBottom: "30px"}} key={index}>
                            <div>
                                <h3 style={{textAlign: 'center', color:'white'}}>{individualWork.projectName}</h3>
                                <img style={{width: '40vw'}} src={individualWork.projectImage} alt={individualWork.projectDescription}/>
                            </div>

                            <div>
                                <p style={{width: '50vw'}}>{individualWork.projectDescription}</p>

                                {individualWork.projectResponsibilities && <p>{individualWork.projectResponsibilities}</p>}

                                <p><a style={{color: 'black', fontWeight: 'bold'}} href={individualWork.githubLink} target='_blank' rel="noreferrer">Github</a></p>

                                <p><a style={{color: 'black', fontWeight: 'bold'}} href={individualWork.deploymentLink} target='_blank' rel="noreferrer">Live Site</a></p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
};


