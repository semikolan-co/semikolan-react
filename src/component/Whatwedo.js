import "../assets/css/404.css";
import React, { useEffect } from "react";

export default function Error404(props) {
  useEffect(() => {
    /*
	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
*/

    const elts = {
      text1: document.getElementById("text1"),
      text2: document.getElementById("text2"),
    };

    // The strings to morph between. You can change these to anything you want!
    const texts = ["Eat", "Build", "Sleep", "Repeat"];

    // Controls the speed of morphing.
    const morphTime = 1;
    const cooldownTime = 0.25;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    // A lot of the magic happens here, this is what applies the blur filter to the text.
    function setMorph(fraction) {
      // fraction = Math.cos(fraction * Math.PI) / -2 + .5;

      elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.text1.textContent = texts[textIndex % texts.length];
      elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
      morph = 0;

      elts.text2.style.filter = "";
      elts.text2.style.opacity = "100%";

      elts.text1.style.filter = "";
      elts.text1.style.opacity = "0%";
    }

    // Animation loop, which is called every frame.
    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    // Start the animation.
    animate();
  });
  return (
    <>
      {/* Explanation in JS tab */}
      {/* The two texts */}

      <div id="about" className="about container" style={{marginTop:"100px"}}>
        <div
          className="titleline"
          data-aos="fade-right"
          data-aos-duration={500}
        >
          <span>
            <em>{props.num}</em>&nbsp;{props.titleline}
          </span>
          <div className="line-horizontal" />
        </div>
        <div id="container">
          <span id="text1" />
          <span id="text2" />
        </div>
        {/* The SVG filter used to create the merging effect */}
        <svg id="filters">
          <defs>
            <filter id="threshold">
              {/* Basically just a threshold effect - pixels with a high enough opacity are set to full opacity, and all other pixels are set to completely transparent. */}
              <feColorMatrix
                in="SourceGraphic"
                type="matrix"
                values="1 0 0 0 0
									0 1 0 0 0
									0 0 1 0 0
									0 0 0 255 -140"
              />
            </filter>
          </defs>
        </svg>
        <p
          style={{
            fontSize: "1.5em",
            maxWidth: 600,
            textAlign: "center",
            margin: "auto",
            color: "var(--LightSlate)",
            fontWeight: 500,
            wordSpacing: "8px",
          }}
        >
          Tell us a rhyme
          <br />
          More bitter and sweet
          <br />
          We're developers
          <br />
          We only Eat, Build, Sleep and Repeat
        </p>
      </div>
    </>
  );
}
