import Landing from "../component/Landing";
import Map from "../component/Map";
import ContactForm from "../component/ContactForm";
import MainLayout from "../layouts/MainLayout";

export default function Contact() {
  return (
    <>
      <MainLayout title="Contact Us | SemiKolan">
        <Landing
          lottiename="contact"
          redirect="#contact"
          p1="Now You Would like to"
          p2="Contact Us"
          p3="Send your Query"
          buttontext="Send Query"
        />
        <Map />
        <ContactForm />
      </MainLayout>
    </>
  );
}
