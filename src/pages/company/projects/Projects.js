import React from "react";
import { References } from "../../../Data";
import "./projects.css";

const Projects = () => {
  return (
    <section className="projects_wrapper">
      <div className="tab">
        <span>Project Portfolio</span>
        <span>We ensure top notch services where ever we go...</span>
      </div>

      <div className="reference_container">
        {References.map((reference) => (
          <div className="reference">
            <span>{reference.client}</span>
            <div className="details">
              <span className="date">{reference.year}</span>
              <span className="completion"> {reference.status} </span>
              <p className="description">{reference.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
