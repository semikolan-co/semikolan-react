import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

export default function MainLayout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />

        </>
    )
}
