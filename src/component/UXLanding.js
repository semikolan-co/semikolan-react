import Lottie from "react-lottie";
import uxmeetup from "../assets/lottie/uxmeetup";
import Typed from "react-typed";
import React, { useEffect } from "react";

const lotties = {
  uxmeetup: uxmeetup,
};
function UXLanding(props) {
  // const [typedController,setTypedController] = useState();
  var typedController;
  useEffect(() => {
    if (props.IndexPage) {
      console.log("jhjhjhkjkj");
      window.addEventListener(
        "scroll",
        () => {
          if (window.scrollY > 300) {
            console.log(window.scrollY);
            typedController.stop();
          } else {
            typedController.start();
            console.log("00000");
          }
        },
        true
      );
    }
  });
  const clock2 = {
    loop: true,
    autoplay: true,
    animationData: lotties[props.lottiename],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="home01">
      <div className="homebox01">
        <span data-aos="fade-right" data-aos-duration={500}>
          {props["p1"]}
        </span>

        <span data-aos="fade-right" data-aos-duration={500}>
          {props.IndexPage ? (
            <>
              <Typed
                strings={[
                  "For the Developer",
                  "By the Developer",
                  "To the Developer",
                ]}
                typeSpeed={40}
                backSpeed={50}
                typedRef={(typed) => {
                  // setTypedController(typed);
                  typedController = typed;
                }}
                loop
              />
            </>
          ) : (
            <>{props.p2}</>
          )}
        </span>

        <span data-aos="fade-right" data-aos-duration={500}>
          {props.p3}
        </span>
        {props.buttontext && (
          <a
            data-aos="fade-right"
            data-aos-duration={500}
            data-aos-anchor-placement="top-bottom"
            href={props.redirect}
          >
            {props.buttontext}
          </a>
        )}
      </div>
      <div
        className="ux-lottie"
        data-aos="fade-up"
        data-aos-duration={500}
        data-aos-anchor-placement="top-bottom"
      >
        {/* <lottie-player src="./lottie/home.json" background="transparent" speed={1} className="lottie-element" loop autoPlay>
    </lottie-player> */}
        <div className="ux-lottie-element">
          <Lottie options={clock2} />
        </div>
      </div>
    </div>
  );
}

export default UXLanding;
