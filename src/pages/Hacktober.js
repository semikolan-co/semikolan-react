import React, { useEffect, useState } from "react";
import "../assets/css/hacktober.css";
import register from "../assets/images/events/register.png";
import Hacktober_Heading from "../assets/images/events/HacktoberHeading.png";
import Hacktober_Year from "../assets/images/events/HacktoberYear.png";
import Header from "../component/Header";
import { Link } from "react-router-dom";
import { padding } from "@mui/system";
import COMMUNITY from '../json/githubrepo.json'

const Hacktober = () => {
  useEffect(() => {
    return () => {};
   
  }, []);
  

  // project card data
  const leaderboard = [
    {
      name:'rajatbhaskare7',
      commits:'4',
    },
    {
      name:'meinhoonharsh',
      commits:'40',
    },



  ]

  const Benefits = [
    {
      id: 1,
      title: "T-shirts",
    },
    {
      id: 2,
      title: "T-shirts",
    },
    {
      id: 3,
      title: "T-shirts",
    },
  ];

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
                window.open("https://hacktoberfest.com/", "_blank").focus();
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
        <div class="container" style={{ paddingTop: "0" }}>
          <div class="row hacktober-content">
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
                  src="https://raw.githubusercontent.com/github/Explore/f47aef15a1c8f22b6fc5c7abf615a918f1322cd6/topics/hacktoberfest/hacktoberfest.png"
                />
              </div>
            </div>
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
                  <i className="fa fa-clock" aria-hidden="true" />7 PM Onwards
                </span>
              </div>
              <p>
                Gear up your Open Source journey and become a keen contributor
                in this Hacktoberfest with GDSC- UIT RGPV.
              </p>
              <ul className="content-skills">
                <li>Recording will be released soon.</li>
              </ul>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <div className="cd-timeline-content">
              <h2> Demystifying Open Source</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-calendar" aria-hidden="true" />
                  16 October 2022
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-clock" aria-hidden="true" />5 PM Onwards
                </span>
              </div>
              <p>
                Let's demystify the myths behind open-source with our speaker.{" "}
                <br /> Vraj Desai (GSOC Contributor @Oppia Foundation).
              </p>
              <a href="https://semiurl.tech/demystify">
                <ul className="content-skills">
                  <li>Register Now</li>
                </ul>
              </a>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
          {/* cd-timeline-block */}
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-picture"></div>
            <div className="cd-timeline-content">
              <h2>Hacktoberfest Hack Party</h2>
              <div className="timeline-content-info">
                <span className="timeline-content-info-title">
                  <i className="fa fa-calendar" aria-hidden="true" />
                  31 October 2022
                </span>
                <span className="timeline-content-info-date">
                  <i className="fa fa-clock" aria-hidden="true" />
                  11 AM Onwards
                </span>
              </div>
              <p>
                Venue: EC Conference Hall, RGPV Bhopal <br />
                <br />
                Let's wrap up this year's Hacktoberfest by talking about How you
                can continue your journey in Open source and rewarding this
                year's top contributors.
              </p>
              <ul className="content-skills">
                <li>Registration will be announnced soon.</li>
              </ul>
            </div>{" "}
            {/* cd-timeline-content */}
          </div>{" "}
        </section>{" "}
        {/* cd-timeline */}
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
                  Here are the some projects under which you can make your
                  Hacktoberfest contributions:
                </p>
              </div>
            </div>
          </div>
          <div class="row project-cards">
            {ShowProject ? (
              <>
                {/* the project card */}
                {/*show only 6 repo cards and show more   */}
                {COMMUNITY.map((project, index) => (
                  <div class="col-md-6 col-lg-4">
                    <div
                      class="single-service"
                      style={{ background: "#233554" }}
                    >
                      <div class="part-1">
                   
                        <h3 class="title" style={{ letterSpacing: "1px" }}>
                          {project.title}
                          
                        </h3>
                      </div>
                      <div class="part-2">
                        <p class="description">{project.detail}</p>
                        <a href={project.link} target = "_blank" className="content-skills">
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
                  <p class="mid-text">To be released soon!</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* support section */}
      <section
        className="support-section"
        style={{ backgroundColor: "#0B1B3300" }}
      >
        <div class="row justify-content-center text-center">
          <div class="col-md-10 col-lg-8">
            <div class="header-section">
              <h2 class="title">
                Supported <span>By</span>
              </h2>
              {/* <p class="description">
                Here is the complete timeline of the Hacktoberfest 2022!
              </p> */}
            </div>
          </div>
        </div>

        <div class="support-wrapper">
          <lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_cwqf5i6h.json"
            background="transparent"
            speed="1"
            style={{ width: "100%", height: "100%" }}
            loop
            autoplay
          ></lottie-player>
        </div>
      </section>
      {/* leaderboard */}
      
	{/* <section id="leaderboard">
		<nav class="ladder-nav">
			<div class="ladder-title">
			<h1>leaderboard</h1>
			</div>
			<div class="ladder-search">
				<input type="text" id="search-leaderboard" class="live-search-box" placeholder="Search Team, Player..." />
			</div>
		</nav>
		<table id="rankings" class="leaderboard-results" width="100%">
			<thead>
				<tr>
					<th>Rank</th>
					<th>github </th>
					<th>Commits</th>
				
	
				</tr>
			</thead>
			<tbody>
        {
          leaderboard.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name  }</td>
                <td>{item.commits}</td>
             
              </tr>
            )
          })
        }
       
		
			</tbody>
		</table>
	</section> */}
      {/* register section */}
      <div class="register-wrapper">
        <div class="register-box">
          <h2 class="register-text">What are you waiting for? Register Now!</h2>

          <button
            class="register-btn"
            onClick={() => {
              window.open("https://hacktoberfest.com/", "_blank").focus();
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
