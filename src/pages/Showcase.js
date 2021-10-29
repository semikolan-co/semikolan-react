import React from 'react'
import Header from '../component/Header'
import Landing from '../component/Landing'
import Footer from '../component/Footer'
import Work from '../component/Work'
import { Helmet } from "react-helmet"
import semikolan from '../json/semikolan.json'

export default function Showcase() {
    return (
        <>
           <Header />
            <Landing
              lottiename="work"
              redirect="#work"
              p1="Ding Ding! Presenting"
              p2="Semikolan Showcase"
              p3="Collection of our projects"
              buttontext="View Projects"
            />
            <Work num="01." removeViewMore />

            <Footer social={semikolan.social} />
            <Helmet>
              <title>Showcase | SemiKolan | Never Stop Building</title>
            </Helmet>  
        </>
    )
}
