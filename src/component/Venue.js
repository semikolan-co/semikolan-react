import Lottie from "react-lottie";
import map from "../assets/lottie/map";
import { BrowserRouter as Link } from "react-router-dom";
function Venue(props) {
    const maplottie = {
        loop: true,
        autoplay: true,
        animationData: map,
    };
    const style = {
        width: "100%",
    };
    return (
        <div id="work" className="container">
            <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
                <span>
                    <em>{props.num}</em>&nbsp;Meetup Venue
                </span>
                <div className="line-horizontal" />
            </div>
            <div className="gitdiv row">
                <div
                    className="col-lg-6 col-md-6 col-sm-12"
                    data-aos="fade-right"
                    data-aos-duration={500}
                >
                    <div className="contactlottie">
                        <Lottie options={maplottie} style={style} />
                    </div>
                </div>
                <div
                    className="col-lg-6 col-md-6 col-sm-12"
                    data-aos="fade-left"
                    data-aos-duration={500}
                >
                    <span>RGPV Conference Hall</span>
                    <span>Rajiv Gandhi Proudyogiki Vishwavidyalaya<br />Airport Rd, Abbas Nagar, Gandhi Nagar<br />Bhopal, Madhya Pradesh 462033</span>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default Venue;
