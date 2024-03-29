import './Projects.css';


import { useState, useEffect } from "react";

function Projects() {

  const [projects, setProjects] = useState(null);


  const getProjectsData = async () => {


    const response = await fetch("./projects.json");


    const data = await response.json();


    setProjects(data);

  };

  
  useEffect(() => {
    getProjectsData() 
  }, []);


  const loaded = () => {
    return (projects.map((project) => (
      <div key={project.id} className="projects">
        <h2>{project.name}</h2>
        <hr></hr>
        <br></br>
        <img src={project.image} alt={project.name} className="projects-img"/>
        
        <p>{project.description}</p>
        
        <div className="button-container"><a href={project.git}>
          <button>Github</button>
        </a><a href={project.live}>
          <button>Live Site</button>
        </a></div>
        
      </div>
      
    
    )));
  };

  return projects ? loaded() : <h1></h1>;
}

export default Projects;