import Lottie from "react-lottie";
import git from "../lottie/git";
import API from "./API";

function Contact(props) {
  const gitlottie = {
    loop: true,
    autoplay: true,
    animationData: git,
  };
  const style = {
    width:"100%",
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = document.querySelector('input[name=name]').value
    const email = document.querySelector('input[name=email]').value
    const message = document.querySelector('textarea[name=message]').value
    API.post(`contact`,
    {name,email,message}
    )
      .then((res) => {
        alert("Your Query has been registered success. Our Team will contact you soon")
      })
      .catch(function (error) {
        console.log(error);
        alert(`We're Sorry, Your query has not been Registered \n
        It is happened due to -- `+error)
      })
      .then(function () {
        // always executed
      });
  };
  return (
    <div id="contact" className="container">
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>02.</em>&nbsp;Get in Touch with Us</span>
    <div className="line-horizontal" />
  </div>
      <form onSubmit={handleSubmit}>
  <div className="gitdiv row">
    <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration={500}>
            <Lottie options={gitlottie} style={style} />
      
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 form-group" data-aos="fade-left" data-aos-duration={500}>
      <span>Contact Us</span>
      <input type="text" name="name" className="form-control mt-3" placeholder="Your Name" required />
      <input type="text" name="email" className="form-control mt-3" placeholder="Your Name" required />
      <textarea name="message" className="form-control mt-3" rows={3} placeholder="Your Message" defaultValue={""} required />
      <button href="#" type="submit" className="mt-3">Send Query</button>
    </div>
  </div>
      </form>
</div>
  );
}

export default Contact;
