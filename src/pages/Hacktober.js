import React, { useEffect, useState } from "react";
import "../assets/css/Hacktober.css";
import register from "../assets/images/events/register.png";
import Hacktober_Heading from "../assets/images/events/HacktoberHeading.png";
import Hacktober_Year from "../assets/images/events/HacktoberYear.png";
import Header from "../component/Header";
// import ReactModal from "react-modal";
import { Modal } from "reactstrap";

const Hacktober = () => {

    useEffect(() => {

        return () => {
        }
    }, [])


    // project card data
    const project_card = [
        {
            id: 1,
            icon: '',
            title: 'Express delivery innovative Design service',
            detail: 'Express delivery inno service effective logistics solution for delivery of small cargo delivery service.',
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
    const [ShowProject, setShowProject] = useState(false);
    const [ShowSwags, setShowSwags] = useState(false);

    return (
      <div style={{ marginBottom: "10vh" }}>
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
                  // alert("Registration will be open soon!")
                  setShowModal(true);
                }}
              >
                <Modal
                  isOpen={ShowModal}
                  style={{
                    marginTop: "10%",
                    backgroundColor: "#1d1e2300",
                    border: 0,
                  }}
                >
                  <div class="register-modal">
                    <p class="modal-text">Registration will be open soon!</p>
                    <button
                      onClick={() => {
                        setShowModal(!ShowModal);
                      }}
                      class="modal-button"
                    >
                      Ok
                    </button>
                  </div>
                </Modal>

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
              <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div class="inner-column">
                  <div class="sec-title">
                    <h2 style={{ color: "#ffffff" }}>What is Hacktoberfest?</h2>
                  </div>
                  <div class="text">
                    Hacktoberfest under Digital Ocean is back again with their
                    one of the most awaited and splendid event for this
                    forthcoming autumn! ‘Hacktoberfest’, a synonym for ‘Open
                    Source’, ‘Contributions’, ‘Projects’ and much more, all on
                    your fingertips.
                  </div>
                </div>
              </div>

              {/* <!-- Image Column --> */}
              <div class="image-column col-lg-6 col-md-12 col-sm-12">
                <div class="about-image-box">
                  <img
                    class="about-image"
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
                  {/* <!-- Start Single Service --> */}
                  <div class="col-md-6 col-lg-4">
                    <div
                      class="single-service"
                      style={{ background: "#233554" }}
                    >
                      <div class="part-1">
                        <i class="fab fa-500px"></i>
                        <h3 class="title">
                          Express delivery innovative Design service
                        </h3>
                      </div>
                      <div class="part-2">
                        <p class="description">
                          Express delivery inno service effective logistics
                          solution for delivery of small cargo delivery service.
                        </p>
                        <a href="#">
                          <i class="fas fa-arrow-circle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- / End Single Service --> */}
                  {/* <!-- Start Single Service --> */}
                  <div class="col-md-6 col-lg-4">
                    <div class="single-service">
                      <div class="part-1">
                        <i class="fab fa-angellist"></i>
                        <h3 class="title">
                          Online chat may refer to any kind communication
                        </h3>
                      </div>
                      <div class="part-2">
                        <p class="description">
                          Express delivery inno service effective logistics
                          solution for delivery of small cargo delivery service.
                        </p>
                        <a href="#">
                          <i class="fas fa-arrow-circle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- / End Single Service --> */}
                  {/* <!-- Start Single Service --> */}
                  <div class="col-md-6 col-lg-4">
                    <div class="single-service">
                      <div class="part-1">
                        <i class="fas fa-award"></i>
                        <h3 class="title">
                          Service provider provide organizations consulting
                        </h3>
                      </div>
                      <div class="part-2">
                        <p class="description">
                          Express delivery inno service effective logistics
                          solution for delivery of small cargo delivery service.
                        </p>
                        <a href="#">
                          <i class="fas fa-arrow-circle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- / End Single Service --> */}
                  {/* <!-- Start Single Service --> */}
                  <div class="col-md-6 col-lg-4">
                    <div class="single-service">
                      <div class="part-1">
                        <i class="fab fa-asymmetrik"></i>
                        <h3 class="title">
                          Express delivery innovative Design service
                        </h3>
                      </div>
                      <div class="part-2">
                        <p class="description">
                          Express delivery inno service effective logistics
                          solution for delivery of small cargo delivery service.
                        </p>
                        <a href="#">
                          <i class="fas fa-arrow-circle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- / End Single Service --> */}
                  {/* <!-- Start Single Service --> */}
                  <div class="col-md-6 col-lg-4">
                    <div class="single-service">
                      <div class="part-1">
                        <i class="fas fa-broadcast-tower"></i>
                        <h3 class="title">
                          Provide solutions and services to end users
                        </h3>
                      </div>
                      <div class="part-2">
                        <p class="description">
                          Express delivery inno service effective logistics
                          solution for delivery of small cargo delivery service.
                        </p>
                        <a href="#">
                          <i class="fas fa-arrow-circle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- / End Single Service --> */}
                  {/* <!-- Start Single Service --> */}
                  <div class="col-md-6 col-lg-4">
                    <div class="single-service">
                      <div class="part-1">
                        <i class="fab fa-canadian-maple-leaf"></i>
                        <h3 class="title">
                          This broad term incorporates all IT businesses
                        </h3>
                      </div>
                      <div class="part-2">
                        <p class="description">
                          Express delivery inno service effective logistics
                          solution for delivery of small cargo delivery service.
                        </p>
                        <a href="#">
                          <i class="fas fa-arrow-circle-right"></i>Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* <!-- / End Single Service --> */}
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

        {/* benefits */}
        <div class="benefits">
          <div class="sec-title">
            <h2 style={{ color: "#ffffff" }}>Perks Of Participating</h2>
          </div>
          {ShowSwags ? (
            <div class="benefits-wrapper">
              {Benefits.map((item, index) => (
                <article class="profile">
                  <div class="profile-image">
                    <img src="https://imgs.search.brave.com/yg4HSuKFXmosvSE8fIWiXNAXZfhrzM0jM57u7iGX4_g/rs:fit:467:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/cmIzdHlpajNfSXU1/Mm1IRVhWa0hBSGFI/aCZwaWQ9QXBp" />
                  </div>
                  <h2 class="profile-username">{item.title}</h2>
                  <small class="profile-user-handle">Hacktober fest</small>
                </article>
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
                setShowModal(true);
              }}
            >
              <div
                style={{ border: 0 }}
                class="button"
                style={{ marginTop: "-20%" }}
              >
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
      </div>
    );
}
export default Hacktober;