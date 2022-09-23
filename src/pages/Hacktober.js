import React, { useEffect } from "react";
import "../assets/css/Hacktober.css";
import register from "../assets/images/events/register.png"

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

    return (
        <div style={{ marginBottom: '10vh' }}>
            <p class="heading">
                Hacktober-Fest
            </p>


            {/* about section */}
            <section class="about-section">
                <div class="container">
                    <div class="row">
                        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div class="inner-column">
                                <div class="sec-title">
                                    <h2 style={{ color: '#ffffff' }}>What is Hacktoberfest?</h2>
                                </div>
                                <div class="text">
                                    Hacktoberfest under Digital Ocean is back again with their one of the most awaited and splendid event for this forthcoming autumn!
                                    ‘Hacktoberfest’, a synonym for ‘Open Source’, ‘Contributions’, ‘Projects’ and much more, all on your fingertips.

                                    It’s a wide umbrella for all those techy geeks grinding extensively round the globe, to connect and work on some amazing open source projects and generate some remarkable real world solutions.
                                    Join this ‘Extraordinary Fest’ for not so ‘ordinary’ geeks, who challenge their limits and donate their time to support open source projects for this 1 month long event.
                                    Taking under regards to set in motion this chapter of Hacktoberfest, we the Google Developer Student Club partnered with SemiKolan has taken the initiative to cultivate a sense of spark in the young minds regarding Open Source and the importance of being a part of Community.
                                    Henceforth we’ve planned a month long journey which is embedded with multiple events and sessions which is going to revolve around stuff related to new technologies, Open Source and much more!


                                </div>
                                <div class="btn-box">
                                    <a href="#" class="theme-btn btn-style-one">Contact Us</a>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div class="image-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column wow fadeInLeft">
                                <div class="author-desc">
                                    <h2>Rahul Kumar Yadav</h2>
                                    <span>Web Developer</span>
                                </div>
                                <figure class="image-1"><a href="#" class="lightbox-image" data-fancybox="images">
                                    <img title="Rahul Kumar Yadav" src="https://i.ibb.co/QP6Nmpf/image-1-about.jpg" alt="" /></a>
                                </figure>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* project section */}

            <section class="section-services" style={{ backgroundColor: '#0B1B3300' }}>
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-md-10 col-lg-8">
                            <div class="header-section">
                                <h2 class="title">Projects <span>Repository</span></h2>
                                <p class="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {/* <!-- Start Single Service --> */}
                        <div class="col-md-6 col-lg-4">
                            <div class="single-service" style={{ background: "#233554" }}>
                                <div class="part-1">
                                    <i class="fab fa-500px"></i>
                                    <h3 class="title">Express delivery innovative Design service</h3>
                                </div>
                                <div class="part-2">
                                    <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                    <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / End Single Service --> */}
                        {/* <!-- Start Single Service --> */}
                        <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                    <i class="fab fa-angellist"></i>
                                    <h3 class="title">Online chat may refer to any kind communication</h3>
                                </div>
                                <div class="part-2">
                                    <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                    <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / End Single Service --> */}
                        {/* <!-- Start Single Service --> */}
                        <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                    <i class="fas fa-award"></i>
                                    <h3 class="title">Service provider provide organizations consulting</h3>
                                </div>
                                <div class="part-2">
                                    <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                    <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / End Single Service --> */}
                        {/* <!-- Start Single Service --> */}
                        <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                    <i class="fab fa-asymmetrik"></i>
                                    <h3 class="title">Express delivery innovative Design service</h3>
                                </div>
                                <div class="part-2">
                                    <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                    <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / End Single Service --> */}
                        {/* <!-- Start Single Service --> */}
                        <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                    <i class="fas fa-broadcast-tower"></i>
                                    <h3 class="title">Provide solutions and services to end users</h3>
                                </div>
                                <div class="part-2">
                                    <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                    <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / End Single Service --> */}
                        {/* <!-- Start Single Service --> */}
                        <div class="col-md-6 col-lg-4">
                            <div class="single-service">
                                <div class="part-1">
                                    <i class="fab fa-canadian-maple-leaf"></i>
                                    <h3 class="title">This broad term incorporates all IT businesses</h3>
                                </div>
                                <div class="part-2">
                                    <p class="description">Express delivery inno service effective logistics solution for delivery of small cargo delivery service.</p>
                                    <a href="#"><i class="fas fa-arrow-circle-right"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / End Single Service --> */}
                    </div>
                </div>
            </section>

            {/* benefits */}
            <div class='benefits'>
                <div>
                    <h2 class="benefits-heading">
                        BENEFITS
                    </h2>
                </div>
                <div class='benefits-wrapper'>
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
            </div>

            {/* register section */}
            <div class="register-wrapper">
                <div class="register-box">

                    <h2 class="register-text">
                        What are you waiting for? Register Now !
                    </h2>

                    <div class="button">
                        <a href="#">
                            Register Now!
                            <span class="shift">›</span>
                        </a>
                        <div class="mask"></div>
                    </div>

                </div>

                <img class='register-img' src={register} />
            </div>


        </div>
    )
}
export default Hacktober;