import React from 'react'
import Header from '../component/Header'
import Landing from '../component/Landing'
import Footer from '../component/Footer'
import Join from '../component/Join'
import { Helmet } from "react-helmet"
import semikolan from '../json/semikolan.json'

export default function JoinPage() {
    return (
        <>
          <Header />
            <Landing
              lottiename="join"
              redirect="#work"
              p1="Currently, We are Building"
              p2="Our Own Ecosystem"
              p3="Till then Join us through"
              buttontext="Scroll Down"
            />
            <Join num="01." />
            <Footer social={semikolan.social} />
            <Helmet>
              <title>Join | SemiKolan | Never Stop Building</title>
            </Helmet>  
        </>
    )
}
