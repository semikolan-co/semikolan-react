import React from 'react'
import { Helmet } from 'react-helmet'
import UXFooter from '../component/UXFooter'
import Header from '../component/Header'
import semikolan from "../json/semikolan.json";

export default function UXLayout(props) {

    
    return (
        <>
            <Header />
            {props.children}
            <UXFooter
                social={props.social ?? semikolan.social}
            />
            <Helmet>
                {props.title ?? 'SemiKolan | Never Stop Building'}
            </Helmet>

        </>
    )
}
