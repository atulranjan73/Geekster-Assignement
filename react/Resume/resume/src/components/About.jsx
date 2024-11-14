import React from "react";
import img1 from "../assets/asset 1.svg";
import img2 from "../assets/asset 2.svg";
import "../App.css";

function About() {
  return (
    <>
      <div className="About">
        <div className="home-down-left">
          <h1>
            Know who <span>I'M</span>
          </h1>
          <div className="content">
            <p>
              Hi Everyone, I am <span>Atul Ranjan</span> from Bihar, India
            </p>
            <p>I am a Student of the final year</p>
            <p>Apart from coding, some other activities that I love to do!</p>
            <ul>
              <li>Playing Games</li>
              <li>Writing Tech Blogs</li>
              <li>Travelling</li>
            </ul>
          </div>
        </div>
        <div className="home-down-right">
          <img src={img2} alt="Profile" />
        </div>
      </div>

      <div className="container">
        <section className="skillset">
          <h2>
            Professional <span className="highlight">Skillset</span>
          </h2>
          <div className="skill-grid">
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
            <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
     
          </div>
        </section>

        <section className="tools">
          <h2>
            <span className="highlight">Tools</span> I use
          </h2>
          <div className="tool-grid">
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          <div className="skill"><img src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="C++" /></div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
