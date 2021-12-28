import Lottie from "react-lottie";
import git from "../assets/lottie/git";
import API from "./API";

import Recaptcha from "react-recaptcha";

import React, { useState } from "react";
function Contact(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const [showCaptcha, setShowCaptcha] = useState(false);
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  var callback = function () {
    console.log("Done!!!!");
  };
  var verifyCallback = function (response) {
    console.log(response);
    if (response) {
      // setShowCaptcha(true);
      setClick(true);
    }
  };

  const gitlottie = {
    loop: true,
    autoplay: true,
    animationData: git,
  };
  const style = {
    width: "100%",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(click);
    setOpen(true);
    if (click) {
      API.post(`contact`, { name, email, message })
        .then((res) => {
          alert(
            "Your Query has been registered success. Our Team will contact you soon"
          );
        })
        .catch(function (error) {
          console.log(error);
          alert(
            `We're Sorry, Your query has not been Registered \n
      It is happened due to -- ` + error
          );
        })
        .then(function () {
          // always executed
        });

      setEmail("");
      setName("");
      setMessage("");
      // setShowCaptcha(false);
      setOpen(false);
      setClick(false);
    }
  };

  return (
    <div id="contact" className="container">
      <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
        <span>
          <em>02.</em>&nbsp;Get in Touch with Us
        </span>
        <div className="line-horizontal" />
      </div>

      <form id="someForm">
        <div className="gitdiv row">
          <div
            className="col-lg-6 col-md-6 col-sm-12"
            data-aos="fade-right"
            data-aos-duration={500}
          >
            <Lottie options={gitlottie} style={style} />
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 form-group"
            data-aos="fade-left"
            data-aos-duration={500}
          >
            <span>Contact Us</span>
            <input
              type="text"
              name="name"
              className="form-control mt-3"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              className="form-control mt-3"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              name="message"
              className="form-control mt-3"
              rows={3}
              placeholder="Your Message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              href="#"
              type="submit"
              className="mt-3"
              onClick={handleSubmit}
              style={{ marginBottom: "90px" }}
            >
              {click ? <span>Send Query</span> : <span>Verify</span>}
            </button>
            {open && (
              <Recaptcha
                className="captcha"
                sitekey="6LcHOQwdAAAAADwtFsFMCClqn-DL2-OjViqh5ec1"
                render="explicit"
                verifyCallback={verifyCallback}
                onloadCallback={callback}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
