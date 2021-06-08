import Lottie from "react-lottie";
import discord from "../lottie/discord";
import whatsapp from "../lottie/whatsapp";

function Join(props) {

  const gitdiscord = {
    loop: true,
    autoplay: true,
    animationData: discord,
  };
  const gitwhatsapp = {
    loop: true,
    autoplay: true,
    animationData: whatsapp,
  };
  const style = {
    width:"80%",
  };
    return (
      <>
        <div id="work" className="container">
          <div className="gitdiv row">
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-right"
              data-aos-duration={500}
            >
              <div className="contactlottie">
                <Lottie options={gitdiscord} speed={0.5} style={style} />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12"
              data-aos="fade-left"
              data-aos-duration={500}
            >
              <span>Discord Server</span>
              <span>
                We're building a Developer's Ecosystem currently through Discord where we can Discuss, Code, Collaborate and have fun.
                <br />
              </span>
              <a href="https://discord.gg/4ucwSCgkse">Join Server</a>
            </div>
          </div>
        </div>
        {/* --------------------------------------- */}
        {/* --------------------------------------- */}
        {/* --------------------------------------- */}
        {/* --------------------------------------- */}
        <div id="work" className="container">
          <div className="gitdiv row">
            <div
              className="col-lg-6 col-md-6 col-sm-12 order-2"
              data-aos="fade-right"
              data-aos-duration={500}
            >
              <div className="contactlottie">
                <Lottie options={gitwhatsapp} speed={1} style={style} />
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-12 order-1"
              data-aos="fade-left"
              data-aos-duration={500}
            >
              <span className="text-align-end">WhatsApp Group</span>
              <span className="text-align-end">
                Be a part of SemiKolan, Get Connected with us Personally.
                Join our Developers Group on Whatsapp.  
                <br />
              </span>
              <a href="https://chat.whatsapp.com/GBks01Lpce9IPTOHIN3cIZ">
                Join Group
              </a>
            </div>
          </div>
        </div>
      </>
    );
  
}

export default Join;
