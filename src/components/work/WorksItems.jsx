import React from "react";

const WorksItems = ({ item }) => {
  return (
    <div className="project-card" key={item.id}>
      <img src={item.image} alt="project" className="work_img" />
      <h3 className="project-title">{item.title}</h3>
      <p className="project-description">{item.description}</p>
      <p className="project-tech-stack">
        <b>Tech Stack</b> - <br /> {item.tech}
      </p>
      <div className="work_button-div">
        <a href={item.demo} target="_blank" rel="noreferrer" className="project-deployed-link">
          Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>

        <a href={item.code} target="_blank" rel="noreferrer" className="project-github-link">
          gitHub <i className="bx bx-right-arrow-alt work_button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorksItems;