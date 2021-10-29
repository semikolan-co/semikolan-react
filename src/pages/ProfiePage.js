import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Profile from '../component/Profile'
import { Helmet } from "react-helmet"
import semikolan from '../json/semikolan.json'

export default function ProfiePage() {
    return (
        <>
          <Header />
          <Profile />
          <Footer social={semikolan.social} />
          <Helmet>
            <title>Harsh Vishwakarma | SemiKolan | Never Stop Building</title>
           </Helmet>  
        </>
    )
}
