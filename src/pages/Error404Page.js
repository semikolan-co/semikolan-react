import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import { Helmet } from "react-helmet"
import semikolan from '../json/semikolan.json'

export default function Error404Page() {
    return (
        <>
            <Header />
            <Error404 />
            <Footer social={semikolan.social} />
            <Helmet>
                <title>404 | SemiKolan | Never Stop Building</title>
            </Helmet>
        </>
    )
}
