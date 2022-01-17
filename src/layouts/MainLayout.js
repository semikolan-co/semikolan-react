import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../component/Footer'
import Header from '../component/Header'
import semikolan from "../json/semikolan.json";

export default function MainLayout(props) {

    
    return (
        <>
            <Header />
            {props.children}
            <Footer
                social={props.social ?? semikolan.social}
            />
            <Helmet>
                {props.title ?? 'SemiKolan | Never Stop Building'}
            </Helmet>

        </>
    )
}
