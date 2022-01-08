import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../component/Footer'
import Header from '../component/Header'
import BongoCat from "../component/BongoCat";
import semikolan from "../json/semikolan.json";
import Landing from '../component/Landing';


export default function UnderConstruction() {
    return (
    <>
        <Header />
        <BongoCat 
            bongoTopMessage='Oops! This page is under construction🙁'
            bongoBottomMessage='Our Bongo Cat is working hard to make it as awesome as possible.'
        />
        <Footer social={semikolan.social} />
        <Helmet>
          <title>SemiKolan | Never Stop Building</title>
        </Helmet>
      </>
    )
}
