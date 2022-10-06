import React, { useEffect, useState } from "react";
import "../assets/css/Hacktober.css";
import register from "../assets/images/events/register.png";
import Hacktober_Heading from "../assets/images/events/HacktoberHeading.png";
import Hacktober_Year from "../assets/images/events/HacktoberYear.png";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { padding } from "@mui/system";

const Hacktober = () => {
  useEffect(() => {
    return () => { };
  }, []);

  // project card data
  const project_card = [
    {
      id: 1,
      icon: '',
      link: 'https://github.com/semikolan-co/keep-document',
      title: 'Keep Document',
      detail: 'Details about the project.Details about the project.Details about the project.',
    },
    {
      id: 2,
      icon: '',
      link: 'https://github.com/gdscrgpv/quizbanao',
      title: 'Quizbanao',
      detail: 'Details about the project.Details about the project.Details about the project.',
    }, {
      id: 3,
      icon: '',
      link: 'https://github.com/gdscrgpv/quizbanao-admin',
      title: 'Quizbanao admin panel',
      detail: 'Details about the project.Details about the project.Details about the project.',
    }, {
      id: 4,
      icon: '',
      link: 'https://github.com/semikolan-co/Certificate-Generator',
      title: 'Certificate generator',
      detail: 'Details about the project.Details about the project.Details about the project.',
    },
    {
      id: 5,
      icon: '',
      link: 'https://github.com/semikolan-co/YouTube-Thumbnail-Downloader',
      title: 'Youtube Thumbnail Downloader',
      detail: 'Details about the project.Details about the project.Details about the project.',
    }, {
      id: 6,
      icon: '',
      link: 'https://github.com/semikolan-co/MovingCursor',
      title: 'Moving cursor (React package hosted on npm.js)',
      detail: 'Details about the project.Details about the project.Details about the project.',
    },
  ]

  const Benefits = [
    {
      id: 1,
      title: 'T-shirts',
    },
    {
      id: 2,
      title: 'T-shirts',
    }, {
      id: 3,
      title: 'T-shirts',
    },
  ]

  const [ShowModal, setShowModal] = useState(false);

  // project
  const [ShowProject, setShowProject] = useState(true);
  const [ShowSwags, setShowSwags] = useState(true);

  return (
    <div style={{ marginBottom: "5vh" }}>
      {/* landing */}
      <div>
        <Header />
        <div class="landing-box">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_bacf0pmj.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
          ></lottie-player>

          <div class="landing-image-box" style={{ marginTop: "3%" }}>
            <img class="Hacktober_Heading" src={Hacktober_Heading} />

            <img class="Hacktober_Year" src={Hacktober_Year} />

            <button
              class="register-btn"
              onClick={() => {
                window.open('https://hacktoberfest.com/', '_blank').focus();
              }}
            >
              <div
                class="button"
                style={{
                  marginTop: "26%",
                  zIndex: 6,
                }}
              >
                <a href="">
                  Register Now!
                  <span class="shift">›</span>
                </a>
                <div class="mask"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* about section */}
      <section class="about-section">
        <div
          class="container"
          style={{
            marginTop: "0%",
            paddingBottom: "0%",
          }}
        >
          <div class="row">
            <div
              class="content-column col-lg-6 col-md-12 col-sm-12 order-2"
              style={{ justifyContent: "center" }}
            >
              <div class="inner-column">
                <div class="sec-title">
                  <h2 style={{ color: "#ffffff" }}>What is Hacktoberfest?</h2>
                </div>
                <div class="text">
                  Hacktoberfest under Digital Ocean is back again with their one
                  of the most awaited and splendid event for this forthcoming
                  autumn! ‘Hacktoberfest’, a synonym for ‘Open Source’,
                  ‘Contributions’, ‘Projects’ and much more, all on your
                  fingertips.
                </div>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div class="image-column col-lg-6 col-md-12 col-sm-12">
              <div class="about-image-box">
                <img
                  class="about-image"
                  style={{ borderRadius: "10px" }}
                  src="https://raw.githubusercontent.com/github/explore/f47aef15a1c8f22b6fc5c7abf615a918f1322cd6/topics/hacktoberfest/hacktoberfest.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* project section */}
      <section
        class="section-services"
        style={{ backgroundColor: "#0B1B3300" }}
      >
        <div
          class="container"
          style={{
            marginTop: "0%",
            paddingBottom: "0%",
            paddingTop: "0%",
          }}
        >
          <div class="row justify-content-center text-center">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title">
                  Projects <span>Repository</span>
                </h2>
                <p class="description">
                  There are many variations of passages of Lorem Ipsum
                  available but the majority have suffered alteration in some
                  injected humour
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            {ShowProject ? (
              <>

                {/* the project card */}
                {project_card.map((project, index) => (
                  <div class="col-md-6 col-lg-4">
                    <div
                      class="single-service"
                      style={{ background: "#233554" }}
                    >
                      <div class="part-1">
                        {/* <i class="fab fa-500px"></i> */}
                        <h3 class="title" style={{ letterSpacing: '1px' }}>
                          {project.title}
                        </h3>
                      </div>
                      <div class="part-2">
                        <p class="description">
                          {project.detail}
                        </p>
                        <a href={project.link}>
                          <i class="fas fa-arrow-circle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

              </>
            ) : (
              <>
                <div>
                  <p class="mid-text">To be released soon !</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* time-line section */}
      <section
        class="section-timeline"
        style={{ backgroundColor: "#0B1B3300" }}
      >
        <div class="row justify-content-center text-center">
          <div class="col-md-10 col-lg-8">
            <div class="header-section">
              <h2 class="title">
                Events <span>Timeline</span>
              </h2>
              <p class="description">
                Here is the complete timeline of the Hacktoberfest 2022!
              </p>
            </div>
          </div>
        </div>
        <section id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <div className="cd-timeline-content">
              <h2>Introduction to Git & GitHub</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-calendar" aria-hidden="true" />3 October
                  2022
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-clock" aria-hidden="true" />7 PM
                </span>
              </div>
              <p>
                Gear up your Open Source journey and become a keen contributor
                in this Hacktoberfest with GDSC- UIT RGPV.
              </p>
              <ul className="content-skills">
                <li>EXPLORE</li>
              </ul>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <div className="cd-timeline-content">
              <h2>Introduction to Git & GitHub</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-calendar" aria-hidden="true" />3 October
                  2022
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-clock" aria-hidden="true" />7 PM
                </span>
              </div>
              <p>
                Gear up your Open Source journey and become a keen contributor
                in this Hacktoberfest with GDSC- UIT RGPV.
              </p>
              <ul className="content-skills">
                <li>EXPLORE</li>
              </ul>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <div className="cd-timeline-content">
              <h2>Introduction to Git & GitHub</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-calendar" aria-hidden="true" />3 October
                  2022
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-clock" aria-hidden="true" />7 PM
                </span>
              </div>
              <p>
                Gear up your Open Source journey and become a keen contributor
                in this Hacktoberfest with GDSC- UIT RGPV.
              </p>
              <ul className="content-skills">
                <li>EXPLORE</li>
              </ul>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <div className="cd-timeline-content">
              <h2>Introduction to Git & GitHub</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-calendar" aria-hidden="true" />3 October
                  2022
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-clock" aria-hidden="true" />7 PM
                </span>
              </div>
              <p>
                Gear up your Open Source journey and become a keen contributor
                in this Hacktoberfest with GDSC- UIT RGPV.
              </p>
              <ul className="content-skills">
                <li>EXPLORE</li>
              </ul>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
        </section>{" "}
        {/* cd-timeline */}
      </section>

      {/* benefits */}
      <div class="benefits">
        <div class="sec-title">
          <h2 style={{ color: "#ffffff" }}>Perks Of Participating</h2>
        </div>
        {ShowSwags ? (
          <div class="benefits-wrapper">
            {Benefits.map((item, index) => (
              <>
                <div class="benefits-card">

                  <div class="benefits-box-image">
                    {/* <img src="https://i.imgur.com/2DhmtJ4.jpg" class="benefits-image" /> */}
                  </div>

                  <div class="benefits-box-bottom">
                    <h4>
                      {item.title}
                    </h4>
                  </div>
                </div>
              </>
            ))}
          </div>
        ) : (
          <>
            <div class="center" style={{ margin: 40 }}>
              <p class="mid-text">Revealing soon !</p>
            </div>
          </>
        )}
      </div>

      {/* register section */}
      <div class="register-wrapper">
        <div class="register-box">
          <h2 class="register-text">
            What are you waiting for? Register Now !
          </h2>

          <button
            class="register-btn"
            onClick={() => {
              window.open('https://hacktoberfest.com/', '_blank').focus();
            }}
          >
            <div class="button" style={{ marginTop: "-20%" }}>
              <a href="#">
                Register Now!
                <span class="shift">›</span>
              </a>
              <div class="mask"></div>
            </div>
          </button>
        </div>

        <img class="register-img" src={register} />
      </div>

      {/* footer section */}
      <div>
        <footer className="footer01" id="footer">
          <span>
            <div>
              Designed with <Link to="#">&hearts;</Link> by
              <a href="https://github.com/semikolan-co"> Semikolan</a>
            </div>
          </span>
        </footer>
      </div>
    </div>
  );
};
export default Hacktober;
