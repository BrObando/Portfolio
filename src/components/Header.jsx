import { Link } from "react-router-dom";

function Header() {


const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "19%",
    margin: "auto",
    position: "fixed",
    top: 0,
    right: 0,
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>  
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
        <Link to="/contact">
          <div>CONTACT</div>
        </Link>
        <a href="/resume/Brianna_Obando_resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-nav">
      RESUME
    </a>
      </nav>
    </header>
  );
}

export default Header;