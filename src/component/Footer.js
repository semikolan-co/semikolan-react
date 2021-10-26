import API from "./API";
import harsh from "../images/harsh.jpg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from "react";
import Recaptcha from "react-recaptcha";
export default function Footer(props) {
  const [name, setName] = useState("");
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  var callback = function () {
    console.log("Done!!!!");
    //setShowCaptcha(true);
  };
  var verifyCallback = function (response) {
    console.log(response);
    if (response) {
      setShowCaptcha(true);
      setClick(true);
    }
  };

  function subscribeUser(event) {
    event.preventDefault();
    setOpen(true);

    {
      /*const email = document.querySelector("input[name=subscriberemail]").value;*/
    }
    if (click) {
      API.post(`subscribeuser`, { name })
        .then((res) => {
          alert(
            "Thank you for subscribing to the Semikolan Newsletter! We hope to see you soon!"
          );
        })
        .catch(function (error) {
          console.log(error);
          alert(
            `We're Sorry, Currently we are unable to subscribe you \n
        It is happened due to -- ` + error
          );
        })
        .then(function () {
          // always executed
        });
      setName("");
      setShowCaptcha(false);
      setOpen(false);
      setClick(false);
    }
  }
  return (
    <footer className="footer01" id="footer">
      <div className="subscribediv  container-80">
        <span>
          Subscribe to the SemiKolan's Weekly NewsLetter for Developers
        </span>

        <form id="subscriberform">
          <div className="newsletterdiv">
            <input
              name="subscriberemail"
              type="email"
              placeholder="Your Email"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="buttonn" type="submit" onClick={subscribeUser}>
              {click ? <span>Subscribe</span> : <span>Verify</span>}
            </button>
          </div>
        </form>
      </div>
      <div className="capt">
        {open && (
          <Recaptcha
            sitekey="6LcQvfQcAAAAAC3ImW3y037ZPinFREkWqX5z0Jew"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={callback}
          />
        )}
      </div>

      <div className="socialicons">
        <div className="iconsdiv">
          <a
            href={
              props.social.instagram
                ? props.social.instagram
                : "https://instagram.com/instakolan"
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-instagram"
            />
          </a>
          <a
            href={
              props.social.linkedin
                ? props.social.linkedin
                : "https://linkedin.com/company/semikolan"
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-linkedin"
            />
          </a>
          <a
            href={
              props.social.github
                ? props.social.github
                : "https://github.com/semikolan-co"
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-github"
            />
          </a>
          <a
            href={
              "mailto:" +
              (props.social.mail ? props.social.mail : "contact@semikolan.co")
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="far fa-envelope"
            />
          </a>
          <a
            href={
              props.social.youtube
                ? props.social.youtube
                : "https://youtube.com/semikolan"
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-youtube"
            />
          </a>{" "}
          <a
            href={
              props.social.discord
                ? props.social.discord
                : "https://discord.gg/4ucwSCgkse"
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fab fa-discord"
            />
          </a>{" "}
          <a
            href={
              props.social.twitter
                ? props.social.twitter
                : "https://twitter.com/semikolanco"
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-twitter"
            />
          </a>
          {/* <a href="https://twitter.com/semikolandev">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-twitter"
            />
          </a> */}
          {/* <a href="https://chat.whatsapp.com/GBks01Lpce9IPTOHIN3cIZ">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-whatsapp"
            />
          </a> */}
        </div>
        <div className="line"></div>
      </div>

      <span>
        <div>
          Designed with <Link to="#">&hearts;</Link> by
          <a href="https://github.com/semikolan-co"> Semikolan</a>
        </div>
      </span>
    </footer>
  );
}
