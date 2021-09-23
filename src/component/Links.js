import React from 'react'
import linksjson from './../links.json'

export default function Links() {
    // Pase JSON into array
    const links = linksjson.map((link, index) => {
        return (
            <div key={index} className="col-md-4 p-1 p-md-3">
                <div onClick={() => window.open(link[2], '_blank').focus()} className="text-center  py-3 p-1" style={{
                    cursor: 'pointer',
                    background: 'linear-gradient(90deg,var(--LightNavy),var(--LightestNavy))',
                    color: 'var(--White)',
                    borderRadius:10,
                    fontSize: '1.1rem',
                    fontWeight: 500
                }}>
                    <i className={'fa'+(link[3] ?? '')+' fa-'+link[0]} ></i> {link[1]}
                </div>
            </div>
        )
    })


    return (
        <div className="row" style={{
            marginTop:-50,
            marginBottom: 70
        }}>
        {links}
        </div>
    )
}
