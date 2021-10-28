import React from 'react'
import Header from '../component/Header'
import Landing from '../component/Landing'
import Footer from '../component/Footer'
import { Helmet } from "react-helmet"
import semikolan from '../json/semikolan.json'
import Links from '../component/Links'

export default function LinksPage() {
    return (
        <>
            <Header />
            <Landing
              lottiename="links"
              redirect="#links"
              p1=""
              p2="Links"
              p3="All in one Place"
              buttontext=""
            />
            <Links />
            <Footer social={semikolan.social} />
            <Helmet>
              <title>Links | SemiKolan | Never Stop Building</title>
            </Helmet>
        </>
    )
}
