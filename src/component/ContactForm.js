import Lottie from "react-lottie";
import git from "../lottie/git";
function Contact(props) {
  const gitlottie = {
    loop: true,
    autoplay: true,
    animationData: git,
  };
  const style = {
    width:"100%",
  };
  return (
    <div id="contact" className="container">
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>02.</em>&nbsp;Get in Touch with Us</span>
    <div className="line-horizontal" />
  </div>
  <div className="gitdiv row">
    <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration={500}>
            <Lottie options={gitlottie} style={style} />
      
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 form-group" data-aos="fade-left" data-aos-duration={500}>
      <span>Contact Us</span>
      <input type="text" className="form-control mt-3" placeholder="Your Name" />
      <input type="text" className="form-control mt-3" placeholder="Your Name" />
      <textarea className="form-control mt-3" rows={3} placeholder="Your Message" defaultValue={""} />
      <a href="#" className="mt-3">Send Query</a>
    </div>
  </div>
</div>
  );
}

export default Contact;
