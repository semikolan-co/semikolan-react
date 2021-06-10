
import '../css/404.css'
import $ from 'jquery'
import React, { useState, useEffect } from "react";
import { TweenMax, Power2 } from "gsap";


export default function Error404(props){
useEffect(() => {
  /*
	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
*/


var TextSlider = function () {
  this.container = $("#home-animation-wrapper");
  this.currentSlide = 1;
  this.slidesLength = this.container.find(".slide").length - 1; // To start at 0
  this.content = { text1: ""};

  this.allowChange = true;

  this.init();
};

TextSlider.prototype = {
  init: function () {
    console.log("init");

    this.bind();

    this.initSvg();
  },

  bind: function () {
    console.log("bind");

    var self = this;

    // Bind interval
    var timerDuration = 5000,
      timer = setInterval(function () {
        self.resetSlide();
      }, timerDuration);

    // Bind restart on click with next slide
    this.container.on("click", function () {
      // Do not allow to change slide until last transition is complete
      if (!self.allowChange) {
        return;
      }
      self.allowChange = false;
      setTimeout(function () {
        self.allowChange = true;
      }, 2000);

      self.resetSlide();

      clearInterval(timer);
      timer = setInterval(function () {
        self.resetSlide();
      }, timerDuration);
    });
  },

  initSvg: function () {
    console.log("initSvg");

    this.bubblesRandomColors();
    this.setTexts();
    this.bubblesMovement();

    // Trigger First slide
    this.triggerSlide();
  },

  setTexts: function () {
    console.log("setTexts");

    var texts = this.container.find("#svg-texts");

    // Get texts
    this.content.text1 = this.container
      .find('.slide[count="' + this.currentSlide + '"]')
      .attr("data-1");
    // this.content.text2 = this.container
    //   .find('.slide[count="' + this.currentSlide + '"]')
    //   .attr("data-2");
    // this.content.text3 = this.container
    //   .find('.slide[count="' + this.currentSlide + '"]')
    //   .attr("data-3");

    // UpperCase Texts
    this.content.text1 = this.content.text1.toUpperCase();
    // this.content.text2 = this.content.text2.toUpperCase();
    // this.content.text3 = this.content.text3.toUpperCase();

    // Append Texts
    texts.find("text:nth-child(1)").html(this.content.text1);
    // texts.find("text:nth-child(2)").html(this.content.text2);
    // texts.find("text:nth-child(3)").html(this.content.text3);
  },

  bubblesRandomColors: function () {
    console.log("bubblesRandomColors");

    var bubblesGroup = this.container.find("#bubbles"),
      // colors = ['#03ee93','#ff0700','#ffe700','#5306de'];
      colors = ["#f5a147", "#51cad8", "#eee"];

    bubblesGroup.find("path").each(function () {
      var rand = getRand(0, colors.length);
      TweenMax.set(this, {
        fill: colors[rand],
        scale: 0,
        transformOrigin: "center",
      });
    });
  },

  triggerSlide: function () {
    console.log("triggerSlide");

    // Container loads invisible, needs this to be shown on the first iteration
    TweenMax.set(this.container, { autoAlpha: 1 });

    var bubbles = this.container.find("#bubbles path");
    bubbles.each(function () {
      var rotateRand = getRand(-30, 30);
      TweenMax.to(this, 1.5, {
        scale: 1.2,
        rotation: rotateRand,
        ease: Power2.easeInOut,
      });
    });
  },

  resetSlide: function () {
    console.log("hideSlide");

    var self = this;

    this.currentSlide++;
    if (this.currentSlide > this.slidesLength) {
      this.currentSlide = 0;
    }

    var bubbles = this.container.find("#bubbles path");
    TweenMax.to(bubbles, 1.5, {
      scale: 0,
      ease: Power2.easeInOut,
      onComplete: triggerContinue,
    });

    // Workaround gsap onComplete
    function triggerContinue() {
      self.initSvg();
    }
  },

  // non used function (performance) (remove the 'return' to enable)
  bubblesMovement: function () {
    return; // Yup, this one

    var bubbles = this.container.find("#bubbles path"),
      count = 500;

    bubbles.each(function (index) {
      if (index > count) {
        return;
      }
      $(this).attr("data-rand", getRand(15, 25));
    });

    this.container.on("mousemove", function (e) {
      bubbles.each(function () {
        if (!$(this).attr("data-rand")) {
          return;
        }

        var rand = $(this).attr("data-rand"),
          cy = e.pageY,
          cx = e.pageX,
          py = Math.round($(this).offset().top),
          px = Math.round($(this).offset().left),
          x = Math.round(-(cx + px) / rand),
          y = Math.round(-(cy + py) / rand);

        TweenMax.to($(this), 0.2, { x: x, y: y, transformOrigin: "center" });
      });
    });
  },
};

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

window.LLOS = window.LLOS || {};
if ($("#home-animation-wrapper").length) {
  window.LLOS.TextSlider = new TextSlider();
}

 });
    return (
      <>
        {/* Explanation in JS tab */}
        {/* The two texts */}

        <div id="about" className="about container">
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

          <div
            id="home-animation-wrapper"
            style={{ opacity: 0, fontFamily: 'Source Sans Pro' }}
          >
            <div className="slides">
              <div
                className="slide"
                count={0}
                data-1="EAT"
                
                
              />
              <div
                className="slide"
                count={1}
                data-1="BUILD"
                
                
              />
              <div
                className="slide"
                count={2}
                data-1="CODE"
                
                
              />
            </div>
            <svg
              version="1.1"
              id="home-animation"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="2371.2px"
              height="841.1px"
              viewBox="0 0 2371.2 841.1"
              xmlSpace="preserve"
            >
              {/* <defs>
		<filter id="text-filter" filterUnits="userSpaceOnUse" x="-273" y="-353.2" width="3011.9" height="1453">
			<feColorMatrix  type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
		</filter>
	</defs>*/}
              {/* TEXTS */}
              <mask
                maskUnits="userSpaceOnUse"
                x={-273}
                y="-353.2"
                width="3011.9"
                height={1453}
                id="bubbles-1"
              >
                <g id="svg-texts">
                  <text
                    transform="matrix(1 0 0 1 62.9893 251.1275)"
                    style={{
                      
                      height:"100%",
                      fill: "#FFFFFF",
                      fontFamily: 'Source Sans Pro',
                      fontWeight: 900,
                      fontSize: "379.144px",
                    }}
                  >
                    WE ARE
                  </text>
                  {/* <text
                    transform="matrix(1 0 0 1 62.9893 544.8433)"
                    style={{
                      fill: "#FFFFFF",
                      fontFamily: '"Source Sans Pro"',
                      fontWeight: 900,
                      fontSize: "379.144px",
                    }}
                  >
                    WE ARE
                  </text>
                  <text
                    transform="matrix(1 0 0 1 62.9893 838.5591)"
                    style={{
                      fill: "#FFFFFF",
                      fontFamily: '"Source Sans Pro"',
                      fontWeight: 900,
                      fontSize: "379.144px",
                    }}
                  >
                    WE ARE
                  </text> */}
                </g>
              </mask>
              {/* BUBBLES */}
              <g id="bubbles" style={{ mask: "url(#bubbles-1)" }}>
                <path
                  d="M1915.1-195.3c-87.9,90.4-16.3,268,122.9,331.9S2339,73.2,2365.6,15.3
			c26.6-57.8-59-269.3-108-291.9C2208.5-299.1,2068.2-352.9,1915.1-195.3z"
                />
                <path
                  d="M1933.8,671.4c90.4,87.9,268,16.3,331.9-122.9s-63.4-301.1-121.3-327.6
			c-57.8-26.6-15.9,174-91.5,266.5C1982.4,573.6,1776.2,518.2,1933.8,671.4z"
                />
                <path
                  d="M1258.7-42c70.5-34.1-46.1-157.7-140.5-170.6
			C1024-225.4,918.9-146,884.9-93.2C836.2-17.5,895.4,45,928.6,49.5S1167.6,2,1258.7-42z"
                />
                <path
                  d="M-189.2-4.9c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0
			s38.1-273.1,0-311.2S9.1-99.5-189.2-4.9z"
                />
                <path
                  d="M1503.8,882.5c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247
			s166.1,220.1,220.1,220.1C1280.5,1099.3,1430.4,1089.6,1503.8,882.5z"
                />
                <path
                  d="M1124.8,102.8C1006,60.8,874.5,199.9,874.5,353.1s183.4,247,247,247
			c63.6,0-58.2-164.8-28.2-280.3C1121.4,212,1331.9,176.2,1124.8,102.8z"
                />
                <path
                  d="M1695.5,1061.4c101.8,74.3,189.1-184.9,135.9-328.6
			c-53.2-143.7-245.5-232.8-346.2-241.1c-144.5-11.9-188.4,119.6-169.7,170.2C1334.3,712.5,1564,965.3,1695.5,1061.4z"
                />
                <path
                  d="M1570.8,113.5c-78.3,1.5-24,162.6,56.4,213.6s209,22.8,261.9-11
			c75.9-48.5,48.2-130,19.9-148C1880.7,150.2,1672,111.6,1570.8,113.5z"
                />
                <path
                  d="M1751.5,747c-78.3,1.5-24,162.6,56.4,213.6c80.3,51.1,209,22.8,261.9-11
			c75.9-48.5,48.2-130,19.9-148C2061.4,783.7,1852.8,745.1,1751.5,747z"
                />
                <path
                  d="M410.4,530.7c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0
			c45-45,38.1-273.1,0-311.2C721.6,535.3,608.7,436.1,410.4,530.7z"
                />
                <path
                  d="M518-226.9c-113.8,54.3-108.3,245.6,0,353.9s304.4,45,349.4,0
			c45-45,38.1-273.1,0-311.2C829.2-222.3,716.3-321.5,518-226.9z"
                />
                <path
                  d="M234.7,592.4c54.3,113.8,245.6,108.3,353.9,0s45-304.4,0-349.4
			s-75.3,157.7-178.3,218.1C314.2,517.6,140.1,394.1,234.7,592.4z"
                />
                <path
                  d="M510.5,282.4c15.7,125,224.6,72.7,332.9-35.6s78.8-147.2,33.8-192.3
			s-109.1,0.6-212.1,61C569,172.1,493.7,148.7,510.5,282.4z"
                />
                <path
                  d="M150.3,414.5c-125,15.7-72.7,224.6,35.6,332.9s147.2,78.8,192.3,33.8
			s-0.6-109.1-61-212.1C260.6,472.9,284,397.7,150.3,414.5z"
                />
                <path
                  d="M531.6,326.2c105-69.6-94-116.5-247.2-116.5s-317.3,24.4-360,115.9
			C-136.9,457-28.8,543.8,25.1,543.8S395.8,416.2,531.6,326.2z"
                />
                <path
                  d="M685,456.6c105-69.6-94-116.5-247.2-116.5c-153.2,0-317.3,24.4-360,115.9
			c-61.3,131.4,46.8,218.2,100.7,218.2S549.2,546.6,685,456.6z"
                />
                <path
                  d="M1142.7,463.6c105-69.6-94-116.5-247.2-116.5s-317.3,24.4-360,115.9
			c-61.3,131.4,46.8,218.2,100.7,218.2C690.1,681.3,1006.9,553.6,1142.7,463.6z"
                />
                <path
                  d="M374.8,360.6c69.6,105,241.5-107.8,241.5-261s-149.4-303.5-241-346.3
			c-131.4-61.3-218.2,46.8-218.2,100.7S284.8,224.8,374.8,360.6z"
                />
                <path
                  d="M-17.6,985.6c69.6,105,241.5-107.8,241.5-261S74.5,421.1-17,378.4
			c-131.4-61.3-218.2,46.8-218.2,100.7S-107.6,849.8-17.6,985.6z"
                />
                <path
                  d="M87.9-56.7C13.9-82.5,9,87.4,66.6,163.2s188.1,93.9,249.4,80.6
			c88-19.1,90.3-105.2,70-131.9C365.7,85.3,183.5-23.4,87.9-56.7z"
                />
                <path
                  d="M130.4,627.6c-74-25.8-78.9,144.1-21.3,219.9s188.1,93.9,249.4,80.6
			c88-19.1,90.3-105.2,70-131.9C408.2,769.6,225.9,660.9,130.4,627.6z"
                />
                <path
                  d="M1846.9,225.4c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247
			s166.1,220.1,220.1,220.1C1623.6,442.3,1773.5,432.6,1846.9,225.4z"
                />
                <path
                  d="M1044.2,270.7c42.1-118.8-97.1-250.3-250.3-250.3s-247,183.4-247,247
			S713,487.6,766.9,487.6C820.9,487.6,970.8,477.9,1044.2,270.7z"
                />
                <path
                  d="M1148.9,517c-99.5-77.3-210.2,107.4-210.2,260.5s48.4,159.8,112.1,159.8
			s76.8-77.5,106.8-193.1C1185.6,636.4,1255.4,599.8,1148.9,517z"
                />
                <path
                  d="M1310.3,169c77.3-99.5-107.4-210.2-260.5-210.2S889.9,7.2,889.9,70.8
			s77.5,76.8,193.1,106.8C1190.9,205.7,1227.6,275.4,1310.3,169z"
                />
                <path
                  d="M1103.1,501.1c-25,123.5,148.8,15.9,257.1-92.4S1567.3,167,1532.8,72.1
			C1483.3-64.2,1345.5-49.1,1307.4-11S1135.4,341.4,1103.1,501.1z"
                />
                <path
                  d="M902.4,517.3c-25,123.5,148.8,15.9,257.1-92.4s207.1-241.6,172.6-336.6
			C1282.6-48,1144.8-32.9,1106.7,5.2C1068.5,43.3,934.8,357.6,902.4,517.3z"
                />
                <path
                  d="M675.4,977.7c-25,123.5,148.8,15.9,257.1-92.4
			c108.3-108.3,207.1-241.6,172.6-336.6c-49.5-136.2-187.3-121.2-225.5-83.1C841.6,503.8,707.8,818,675.4,977.7z"
                />
                <path
                  d="M1189.6,365.8c-123.5-25-94.6,247,13.8,355.3s320.3,109,415.2,74.4
			c136.2-49.5,121.2-187.3,83.1-225.5C1663.6,531.9,1349.3,398.2,1189.6,365.8z"
                />
                <path
                  d="M1178.3-351.1c-123.5-25-94.6,247,13.8,355.3s320.3,109,415.2,74.4
			c136.2-49.5,121.2-187.3,83.1-225.5S1338-318.8,1178.3-351.1z"
                />
                <path
                  d="M1687.6,458c70.5-34.1-46.1-157.7-140.5-170.6
			c-94.3-12.8-199.4,66.6-233.4,119.4c-48.7,75.7,10.5,138.2,43.7,142.8C1390.7,554.1,1596.5,502.1,1687.6,458z"
                />
                <path
                  d="M1328.9,258.3c-87.9,90.4-16.3,268,122.9,331.9s301.1-63.4,327.6-121.3
			c26.6-57.8-59-269.3-108-291.9S1482.1,100.8,1328.9,258.3z"
                />
                <path
                  d="M2077.1,552.5c-87.9,90.4-16.3,268,122.9,331.9
			c139.2,64,301.1-63.4,327.6-121.3c26.6-57.8-59-269.3-108-291.9C2370.6,448.7,2230.3,394.9,2077.1,552.5z"
                />
                <path
                  d="M2084.8,284.9c58.1,111.8,235.9-9.7,299.8-148.9
			c64-139.2,22.8-165.4-35.1-192c-57.8-26.6-102.1,38.4-177.7,130.8C2101.4,161.1,2022.7,165.3,2084.8,284.9z"
                />
                <path
                  d="M1792.8,533.8c-111.8,58.1,9.7,235.9,148.9,299.8s165.4,22.8,192-35.1
			s-38.4-102.1-130.8-177.7C1916.6,550.3,1912.5,471.6,1792.8,533.8z"
                />
                <path
                  d="M2119.8,318.6c74.3-101.8-128.6-76.6-272.2-23.5s-289.1,133-297.4,233.7
			c-11.9,144.5,119.6,188.4,170.2,169.7C1770.9,679.8,2023.7,450.1,2119.8,318.6z"
                />
                <path
                  d="M2308.9,387.7c74.3-101.8-128.6-76.6-272.2-23.5s-289.1,133-297.4,233.7
			c-11.9,144.5,119.6,188.4,170.2,169.7C1960,748.9,2212.8,519.3,2308.9,387.7z"
                />
                <path
                  d="M2722.5,146.8c74.3-101.8-128.6-76.6-272.2-23.5
			c-143.7,53.2-289.1,133-297.4,233.7c-11.9,144.5,119.6,188.4,170.2,169.7C2373.6,508,2626.4,278.3,2722.5,146.8z"
                />
                <path
                  d="M1984.7,405.3c101.8,74.3,189.1-184.9,135.9-328.6S1875.1-156,1774.4-164.3
			C1630-176.2,1586.1-44.8,1604.8,5.8C1623.5,56.4,1853.1,309.2,1984.7,405.3z"
                />
              </g>
            </svg>
          </div>

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