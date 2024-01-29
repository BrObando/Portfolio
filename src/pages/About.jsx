import '../components/Footer.css'
import './About.css';
import { useState, useEffect } from "react";

function About() {
  
  const [about, setAbout] = useState(null);

  
  const getAboutData = async () => {

		
    const response = await fetch("./about.json");

		
    const data = await response.json();

		
    setAbout(data);
  };

  
  useEffect(() => { getAboutData() } , []);


  const loaded = () => (
    <div className="about-container">
      <div className="about-text">
        <h2>{about.name}</h2>
        <hr />
        {about.bio.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="headshot">
      </div>
    </div>
  );
  
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;