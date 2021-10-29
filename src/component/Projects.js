import React from "react";
import "./Projects.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import projectJson from "./Initiatives.json";

const resolveImagepath = (imgName) => {
  return require(`../images/${imgName}`).default;
};

function Projects(props) {
  return (
    <div id="work" className="about container">
      <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
        <span>
          <em>{props.num}</em>&nbsp;Things We've Built
        </span>
        <div className="line-horizontal" />
      </div>
      <div className="workdiv">
        {projectJson.projects.map((project, index) => {
          return (
            <div
              key={index}
              className={
                index % 2 === 0
                  ? "projectdiv projectheight"
                  : "projectdiv projectheight reverse"
              }
            >
              <div data-aos="fade-left" data-aos-duration={500}>
                <img
                  className="projectheight"
                  src={resolveImagepath(project.image_pathname)}
                  alt={project.title}
                />
                <div className="projectheight" />
              </div>
              <div
                className="projectheight"
                data-aos="fade-right"
                data-aos-duration={500}
              >
                <span>{project.type}</span>
                <span>{project.title}</span>
                <span>{project.description}</span>
                <span>{project.technologies}</span>
                <span>
                  {project.github_repo_link !== "" ? (
                    <>
                      <a target="_blank" href={project.github_repo_link}>
                        <i className="fa fa-github" />
                      </a>
                      &nbsp;&nbsp;
                    </>
                  ) : null}

                  {project.external_link !== "" ? (
                    <>
                      <a target="_blank" href={project.external_link}>
                        <i className="fa fa-external-link-alt" />
                      </a>
                      &nbsp;&nbsp;
                    </>
                  ) : null}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {props.removeViewMore ? (
        ""
      ) : (
        <center>
          <Link
            to="/showcase"
            className="button"
            data-aos="fade-up"
            data-aos-duration={500}
          >
            View More
          </Link>
        </center>
      )}
    </div>
  );
}

export default Projects;
