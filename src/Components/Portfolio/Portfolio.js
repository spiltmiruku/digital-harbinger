import React from "react";
import "./portfolio.css";

import laptop from "../../resources/laptop.png";

const Portfolio = () => {
  return (
    <div>
      <section className="client-projects-container">

        <div className="project-wrapper">
          <img id="project-img" src={laptop} alt="client project description" />
          <div className='client-info'>
          <span className="client-name">Company Name</span>
          <br/>
          <span className="client-type">tech startup</span>
          </div>
        </div>

        <div className="project-wrapper">
          <img id="project-img" src={laptop} alt="client project description" />
          <div className='client-info'>
          <span className="client-name">Company Name</span>
          <br/>
          <span className="client-type">tech startup</span>
        </div>
        </div>

        <div className="project-wrapper">
          <img id="project-img" src={laptop} alt="client project description" />
          <div className='client-info'>
          <span className="client-name">Company Name</span>
          <br/>
          <span className="client-type">tech startup</span>
        </div>
        </div>

        <div className="project-wrapper">
          <img id="project-img" src={laptop} alt="client project description" />
          <div className='client-info'>
          <span className="client-name">Company Name</span>
          <br/>
          <span className="client-type">tech startup</span>
        </div>
        </div>
        
      </section>
    </div>
  );
};

export default Portfolio;
