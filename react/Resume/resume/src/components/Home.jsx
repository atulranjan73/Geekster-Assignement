import React from "react";
import img1 from "../assets/asset 1.svg"; 
import img2 from "../assets/asset 2.svg"; 
import "../App.css";

function Home() {
  return (
    <div className="home">
      <div className="home-top">
        <div className="home-left">
          <div className="home-name">
            <h1>Hi There! </h1>
            <h1>I'M ATUL RANJAN</h1>
            <h1>DEVELOPER</h1>
          </div>
        </div>
        <div className="home-right">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="home-down">
        <div className="home-down-left">
          <h1>LET ME <span>INTRODUCE</span> MYSELF</h1>
         <div className="content">
         <p>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
          <p>I am fluent in classics like <span> C++, Javascript and Go</span>.</p>
          <p>My field of Interest's are building new  <span>Web Technologies </span>and Products and also in areas related to <span>Blockchain.</span></p>
          <p>Whenever possible, I also apply my passion for developing products with <span>Node.js and Modern Javascript Library and Frameworks</span>  like <span>home-down</span> and <span>Next.js</span></p>
         </div>
        </div>
        <div className="home-down-right">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
