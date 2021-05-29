import harsh from '../images/harsh.jpg';
function About(props) {
  return (
        <div id="about" className="about container">
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>01.</em>&nbsp;Where you can Find us</span>
    <div className="line-horizontal" />
  </div>
  <div className="aboutdiv">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5849582236356!2d77.4800777142544!3d23.22179151468185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c419fc6811533%3A0x538a9d921f4071ae!2sHarsh%20Vishwakarma!5e0!3m2!1sen!2sin!4v1617978278256!5m2!1sen!2sin" style={{border: 0, width: '100%', aspectRatio: '4/3'}} allowFullScreen loading="lazy" />
  </div>
</div>

  );
}

export default About;
