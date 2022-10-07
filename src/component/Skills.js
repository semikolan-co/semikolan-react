import React from "react";
class About extends React.Component {
  componentDidMount() {
    document.querySelectorAll(".circlechart").forEach((element) => {
      var inner_text = element.textContent;
      var percentage = element.getAttribute("data-percentage");

      element.innerHTML = makesvg(percentage, inner_text);

      function makesvg(percentage, inner_text = "") {
        var abs_percentage = Math.abs(percentage).toString();
        var percentage_str = percentage.toString();
        var classes = "";

        if (percentage < 0) {
          classes = "danger-stroke circle-chart__circle--negative";
        } else if (percentage > 0 && percentage < 30) {
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
          '<text class="circle-chart__percent" x="50%" y="15.5" font-size="0.3em" fill="#ccd6f6">' +
          inner_text +
          "</text>";

        if (inner_text) {
          svg +=
            '<text class="circle-chart__subline" x="50%" y="22" font-size="0.25em" fill="#ccd6f6">' +
            percentage_str +
            "%</text>";
        }

        svg += " </g></svg>";

        return svg;
      }
    });
  }

  render() {
    return (
      <div id="about" className="about container" style={{paddingTop:"12%"}}>
        <div
          className="titleline"
          data-aos="fade-right"
          data-aos-duration={500}
        >
          <span>
            <em>{this.props.num}</em>&nbsp;What we Actually do
          </span>
          <div className="line-horizontal" />
        </div>
        <div>
          <section className="section skills" style={{paddingBottom:"0"}}>
            <div className="skills_section text-center">
              <div className="skills-area row">
                {this.props.elements.map((elem, i) => {
                  return (
                    <div
                      data-aos="fade-up"
                      className="single-skill col-lg-4 col-md-4 col-sm-6"
                    >
                      <div className="circlechart" data-percentage={elem[1]}>
                        {elem[0]}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
