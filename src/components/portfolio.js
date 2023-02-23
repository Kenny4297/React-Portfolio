const Portfolio = props => {
    const { workProps } = props;
    return (
        <>
            <h2 id="work">My Work</h2>
            <section className="work">
                {/* Here we loop through the props located below this function.  */}
                {workProps.map((individualWork, index) => (
                    // We include the index as a second parameter to know what specific project we are on for CSS purposes
                    <a href={individualWork.link} target="_blank" rel="noreferrer">
                        <div className={`grid-item work-example-${index + 1}`}>
                                <h3>{individualWork.projectName}</h3>
                                <p>{individualWork.projectTechnologies}</p>
                        </div>
                    </a>
                ))}
                {/* Notice how this section closing tag is outside the map! We are only mapping through the specific work section, not the entire section itself */}
            </section>
        </>
    )
};

const workProps = [
    { projectName: "Be Tethical", projectTechnologies: "Sequelize, JavaScript", link: "https://github.com/Kenny4297/Be-Tethical" },
    { projectName: "Nile (Amazon Spoof)", projectTechnologies: "React, Express.js" },
    { projectName: "Calculate This!", projectTechnologies: "Node.js, JavaScript"},
    { projectName: "Video Game Finder", projectTechnologies: "Bootstrap, JavaScript"},
    { projectName: "Virtual Reality Browser", projectTechnologies: "Unreal Engine"}
];

export { workProps, Portfolio };
