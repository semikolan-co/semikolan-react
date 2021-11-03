import React from "react";
import Header from "../component/Header";
import Landing from "../component/Landing";
import Footer from "../component/Footer";
import Map from "../component/Map";
import ContactForm from "../component/ContactForm";
import { Helmet } from "react-helmet";
import semikolan from "../json/semikolan.json";

export default function Contact() {
  return (
    <>
      <Header />
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

      <Footer social={semikolan.social} />
      <Helmet>
        <title>Contact | SemiKolan | Never Stop Building</title>
      </Helmet>
    </>
  );
}
