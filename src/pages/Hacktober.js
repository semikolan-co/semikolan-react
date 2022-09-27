import React, { useEffect } from "react";
import "../assets/css/Hacktober.css";
import register from "../assets/images/events/register.png";
import Hacktober_Heading from "../assets/images/events/HacktoberHeading.png";
import Hacktober_Year from "../assets/images/events/HacktoberYear.png";
import Header from "../component/Header";
import { padding } from "@mui/system";

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

    // project
    const showProject = false;
    const showSwags = false;

    return (
        <div style={{ marginBottom: '10vh' }}>

            {/* landing */}
            <div>
                <Header />
                <div class='landing-box'>
                    <lottie-player
                        src="https://assets3.lottiefiles.com/packages/lf20_bacf0pmj.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '100%', height: "100%" }}
                        loop
                        autoplay
                    >
                    </lottie-player>

                    <div class='landing-image-box' style={{ marginTop: "3%" }}>

                        <img class="Hacktober_Heading" src={Hacktober_Heading} />

                        <img class="Hacktober_Year" src={Hacktober_Year} />

                        <button class="register-btn" onClick={() => {
                            alert("Registration will be open soon!")
                        }} >
                            <div class="button" style={{
                                marginTop: '26%',
                                zIndex: 6,
                            }}>
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
                <div class="container" style={{
                    marginTop: "0%",
                    paddingBottom: "0%"
                }}>
                    <div class="row">
                        <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                            <div class="inner-column">
                                <div class="sec-title">
                                    <h2 style={{ color: '#ffffff' }}>What is Hacktoberfest?</h2>
                                </div>
                                <div class="text">
                                    Hacktoberfest under Digital Ocean is back again with their one of the most awaited and splendid event for this forthcoming autumn!
                                    ‘Hacktoberfest’, a synonym for ‘Open Source’, ‘Contributions’, ‘Projects’ and much more, all on your fingertips.

                                </div>
                            </div>
                        </div>

                        {/* <!-- Image Column --> */}
                        <div class="image-column col-lg-6 col-md-12 col-sm-12">

                            <div class="globe_wrapper">
                                <div id="bug" class="logo__StyledDiv-sc-slw2b8-0 logo__BadgeWrapper-sc-slw2b8-1 bigdC gcBapg">
                                    <div class="h-mark_wrapper">
                                        <svg width="47" height="51" viewBox="0 0 47 51" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-mark" >
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.5556 2.73456e-06L31.3333 0V5.1H26.1111L26.1111 10.2L20.8889 10.2V15.3H26.1111L26.1111 10.2L31.3333 10.2L31.3333 25.5L20.8889 25.5V30.6L15.6667 30.6V5.1L10.4444 5.1V10.2L5.22222 10.2V15.3L1.30258e-06 15.3L0 20.4H5.22222V15.3H10.4444L10.4444 35.7L5.22222 35.7L5.22222 40.8H10.4444L10.4444 51L15.6667 51L15.6667 35.7L20.8889 35.7L20.8889 30.6L31.3333 30.6L31.3333 45.9L36.5556 45.9L36.5556 40.8H41.7778V35.7L47 35.7V30.6L41.7778 30.6L41.7778 35.7H36.5556L36.5556 2.73456e-06Z" fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div id="globe" class="logo__StyledDiv-sc-slw2b8-0 logo__GlobeWrapper-sc-slw2b8-2 bigdC huSARU">
                                        <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M103.494 59.28C103.828 56.9012 104 54.4707 104 52C104 44.4439 102.388 37.2642 99.4901 30.786C99.0711 29.8494 98.6253 28.9275 98.1535 28.0212C89.485 11.3705 72.0703 0 52 0C23.2812 0 0 23.2812 0 52C0 80.7188 23.2812 104 52 104C75.3774 104 95.1517 88.5737 101.699 67.3453C102.441 64.9397 103.013 62.4596 103.401 59.9191C103.433 59.7065 103.465 59.4935 103.494 59.28ZM99.0506 65.7291C100.32 61.3728 101 56.7659 101 52C101 45.0711 99.5618 38.4781 96.9677 32.5032C94.7544 33.8552 92.1735 35.0836 89.3025 36.1746C79.6824 39.8302 66.4937 42.06 52.0001 42.06C37.5065 42.06 24.3177 39.8302 14.6977 36.1746C11.8266 35.0836 9.2457 33.8552 7.03232 32.5031C4.43818 38.478 3 45.0711 3 52C3 56.7659 3.68039 61.3728 4.94935 65.729C4.99539 65.7712 5.04192 65.8135 5.08893 65.8557C7.53451 68.0529 11.1579 70.1002 15.7633 71.8503C24.9636 75.3464 37.7748 77.54 52 77.54C66.2253 77.54 79.0365 75.3464 88.2368 71.8503C92.8422 70.1002 96.4656 68.0529 98.9111 65.8557C98.9581 65.8135 99.0046 65.7713 99.0506 65.7291ZM97.2637 70.8002C94.9856 72.2246 92.3025 73.5146 89.3024 74.6546C79.6824 78.3102 66.4936 80.54 52 80.54C37.5065 80.54 24.3177 78.3102 14.6977 74.6546C11.6975 73.5146 9.01438 72.2245 6.73623 70.8002C14.1095 88.5321 31.5987 101 52 101C72.4012 101 89.8905 88.5321 97.2637 70.8002ZM88.2368 33.3703C91.1183 32.2753 93.6154 31.0639 95.6801 29.7723C87.5779 13.8822 71.0598 3 52 3C32.9402 3 16.4221 13.8821 8.31992 29.7722C10.3846 31.0639 12.8818 32.2753 15.7634 33.3703C24.9636 36.8664 37.7749 39.06 52.0001 39.06C66.2253 39.06 79.0365 36.8664 88.2368 33.3703Z" fill="currentColor"></path>
                                        </svg>
                                        <div class="logo__StyledDiv-sc-slw2b8-0 logo__Spinner-sc-slw2b8-3 bigdC lkVEuf">
                                            <div class="spinner"></div>
                                        </div>
                                        <div class="logo__StyledDiv-sc-slw2b8-0 logo__Spinner-sc-slw2b8-3 bigdC fblQoO">
                                            <div class="spinner"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* project section */}

            <section class="section-services" style={{ backgroundColor: '#0B1B3300' }}>
                <div class="container" style={{
                    marginTop: "0%",
                    paddingBottom: "0%",
                    paddingTop: "0%",
                }}>
                    <div class="row justify-content-center text-center">
                        <div class="col-md-10 col-lg-8">
                            <div class="header-section">
                                <h2 class="title">Projects <span>Repository</span></h2>
                                <p class="description">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected humour</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {showProject
                            ?
                            <>
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
                            </>
                            :
                            <>
                                <div>
                                    <p class="mid-text">
                                        To be released soon !
                                    </p>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </section>

            {/* benefits */}
            <div class='benefits' >
                <div>
                    <h2 class="benefits-heading">
                        BENEFITS
                    </h2>
                </div>
                {showSwags
                    ?
                    <div class='benefits-wrapper'>
                        {Benefits.map((item, index) => (


                            <article class="profile" >

                                <div class="profile-image">
                                    <img src="https://imgs.search.brave.com/yg4HSuKFXmosvSE8fIWiXNAXZfhrzM0jM57u7iGX4_g/rs:fit:467:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5N/cmIzdHlpajNfSXU1/Mm1IRVhWa0hBSGFI/aCZwaWQ9QXBp" />
                                </div>
                                <h2 class="profile-username">{item.title}</h2>
                                <small class="profile-user-handle">Hacktober fest</small>

                            </article>

                        ))}

                    </div>
                    :
                    <>
                        <div class="center" style={{ margin: 40 }}>
                            <p class="mid-text">
                                Revealing soon !
                            </p>
                        </div>
                    </>
                }
            </div>

            {/* register section */}
            <div class="register-wrapper">
                <div class="register-box">

                    <h2 class="register-text">
                        What are you waiting for? Register Now !
                    </h2>

                    <button class="register-btn" onClick={() => {
                        alert("Registration will be open soon!")
                    }} >
                        <div class="button" style={{ marginTop: '-20%' }}>
                            <a href="#">
                                Register Now!
                                <span class="shift">›</span>
                            </a>
                            <div class="mask"></div>
                        </div>
                    </button>

                </div>

                <img class='register-img' src={register} />
            </div>

        </div >
    )
}
export default Hacktober;