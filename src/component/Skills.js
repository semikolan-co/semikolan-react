import harsh from '../images/harsh.jpg';
import React,{Component} from 'react';
import AOS from 'aos';
class About extends React.Component {
  componentDidMount() {
   

  document.querySelectorAll(".circlechart").forEach(element => {
    var inner_text = element.textContent;
      var percentage = element.getAttribute("data-percentage");

    element.innerHTML = makesvg(percentage, inner_text);


    function makesvg(percentage, inner_text = "") {
      var abs_percentage = Math.abs(percentage).toString();
      var percentage_str = percentage.toString();
      var classes = "";

      if (percentage < 0) {
        classes = "danger-stroke circle-chart__circle--negative";
      } else if (percentage > 0 && percentage <= 30) {
        classes = "warning-stroke";
      } else {
        classes = "success-stroke";
      }

      var svg =
        '<svg class="circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg">' +
        '<circle class="circle-chart__background" cx="16.9" cy="16.9" r="15.9" />' +
        '<circle class="circle-chart__circle ' +
        classes +
        '"' +
        'stroke-dasharray="' +
        abs_percentage +
        ',100"    cx="16.9" cy="16.9" r="15.9" />' +
        '<g class="circle-chart__info">' +
        '   <text class="circle-chart__percent" x="17.9" y="15.5" fill="#ccd6f6">' +
        percentage_str +
        "%</text>";

      if (inner_text) {
        svg +=
          '<text class="circle-chart__subline" x="16.91549431" y="22" fill="#ccd6f6">' +
          inner_text +
          "</text>";
      }

      svg += " </g></svg>";

      return svg;
    }
  });

  }

 render(){
   return (
     <div id="about" className="about container">
       <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
         <span>
           <em>{this.props.num}</em>&nbsp;Skills I have
         </span>
         <div className="line-horizontal" />
       </div>
       <div className="pt-5">
         <section className="section skills">
           <div className="skills_section text-center">
             <div className="skills-area row">
               <div
                 data-aos="fade-up"
                 className="single-skill col-lg-4 col-md-4 col-sm-6"
               >
                 <div className="circlechart" data-percentage={85}>
                   <svg
                     className="circle-chart"
                     viewBox="0 0 33.83098862 33.83098862"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <circle
                       className="circle-chart__background"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <circle
                       className="circle-chart__circle success-stroke"
                       strokeDasharray="2,100"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <g className="circle-chart__info">
                       {" "}
                       <text
                         className="circle-chart__percent"
                         x="17.9"
                         y="15.5"
                       />
                       <text
                         className="circle-chart__subline"
                         x="16.91549431"
                         y={22}
                       >
                         HTML5
                       </text>{" "}
                     </g>
                   </svg>
                 </div>
               </div>
               <div
                 data-aos="fade-up"
                 className="single-skill col-lg-4 col-md-4 col-sm-6"
               >
                 <div className="circlechart" data-percentage={75}>
                   <svg
                     className="circle-chart"
                     viewBox="0 0 33.83098862 33.83098862"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <circle
                       className="circle-chart__background"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <circle
                       className="circle-chart__circle success-stroke"
                       strokeDasharray="90,100"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <g className="circle-chart__info">
                       {" "}
                       <text
                         className="circle-chart__percent"
                         x="17.9"
                         y="15.5"
                       />
                       <text
                         className="circle-chart__subline"
                         x="16.91549431"
                         y={22}
                       >
                         CSS3
                       </text>{" "}
                     </g>
                   </svg>
                 </div>
               </div>
               <div
                 data-aos="fade-up"
                 className="single-skill col-lg-4 col-md-4 col-sm-6"
               >
                 <div className="circlechart" data-percentage={45}>
                   <svg
                     className="circle-chart"
                     viewBox="0 0 33.83098862 33.83098862"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <circle
                       className="circle-chart__background"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <circle
                       className="circle-chart__circle success-stroke"
                       strokeDasharray="85,100"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <g className="circle-chart__info">
                       {" "}
                       <text
                         className="circle-chart__percent"
                         x="17.9"
                         y="15.5"
                       />
                       <text
                         className="circle-chart__subline"
                         x="16.91549431"
                         y={22}
                       >
                         PHP
                       </text>{" "}
                     </g>
                   </svg>
                 </div>
               </div>
               <div
                 data-aos="fade-up"
                 className="single-skill col-lg-4 col-md-4 col-sm-6"
               >
                 <div className="circlechart" data-percentage={60}>
                   <svg
                     className="circle-chart"
                     viewBox="0 0 33.83098862 33.83098862"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <circle
                       className="circle-chart__background"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <circle
                       className="circle-chart__circle success-stroke"
                       strokeDasharray="82,100"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <g className="circle-chart__info">
                       {" "}
                       <text
                         className="circle-chart__percent"
                         x="17.9"
                         y="15.5"
                       />
                       <text
                         className="circle-chart__subline"
                         x="16.91549431"
                         y={22}
                       >
                         JavaScript
                       </text>{" "}
                     </g>
                   </svg>
                 </div>
               </div>
               <div
                 data-aos="fade-up"
                 className="single-skill col-lg-4 col-md-4 col-sm-6"
               >
                 <div className="circlechart" data-percentage={60}>
                   <svg
                     className="circle-chart"
                     viewBox="0 0 33.83098862 33.83098862"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <circle
                       className="circle-chart__background"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <circle
                       className="circle-chart__circle success-stroke"
                       strokeDasharray="82,100"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <g className="circle-chart__info">
                       {" "}
                       <text
                         className="circle-chart__percent"
                         x="17.9"
                         y="15.5"
                       />
                       <text
                         className="circle-chart__subline"
                         x="16.91549431"
                         y={22}
                       >
                         jQuery
                       </text>{" "}
                     </g>
                   </svg>
                 </div>
               </div>
               <div
                 data-aos="fade-up"
                 className="single-skill col-lg-4 col-md-4 col-sm-6"
               >
                 <div className="circlechart" data-percentage={35}>
                   <svg
                     className="circle-chart"
                     viewBox="0 0 33.83098862 33.83098862"
                     xmlns="http://www.w3.org/2000/svg"
                   >
                     <circle
                       className="circle-chart__background"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <circle
                       className="circle-chart__circle success-stroke"
                       strokeDasharray="82,100"
                       cx="16.9"
                       cy="16.9"
                       r="15.9"
                     ></circle>
                     <g className="circle-chart__info">
                       {" "}
                       <text
                         className="circle-chart__percent"
                         x="17.9"
                         y="15.5"
                       />
                       <text
                         className="circle-chart__subline"
                         x="16.91549431"
                         y={22}
                       >
                         MySQL
                       </text>{" "}
                     </g>
                   </svg>
                 </div>
               </div>
             </div>
           </div>
         </section>
       </div>
     </div>
   );
   }
}

export default About;
