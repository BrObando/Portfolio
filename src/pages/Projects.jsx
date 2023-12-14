import './projects.css';



  
const Projects = (props) => {
    const projects = [
      { id: 1, title: 'MASTERMIND', description: 'Mastermind is a classic board game of logic and deduction. In the game, one player creates a secret code consisting of a sequence of colored pegs, and the other player (or players) attempt to guess the code within a limited number of turns. In this version of the game Mastermind after each guess, the code-maker provides feedback to the code-breaker, indicating how many pegs are the correct color and in the correct position (marked with orange and purple) and how many pegs are the correct color but in the wrong position. The code-breaker continues making guesses and refining their deductions until they either solve the code or run out of attempts.' },
      { id: 2, title: 'JOYSTICKJURY', description: 'Description of Project 2' },
    ];
  
    return (
      <div className="projects-container">
        <ul className="projects-list">
          {projects.map((project) => (
            <ul key={project.id} className="project-item">
              <h2>{project.title}</h2>
              <img src={project.image}/>
              <p>{project.description}</p>
            </ul>
          ))}
        </ul>
        <h1>PROJECTS</h1>
      </div>
    );
  };
  
  export default Projects;