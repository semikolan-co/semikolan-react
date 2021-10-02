import React from 'react'
import linksjson from './../links.json'

export default function Links() {
    // Pase JSON into array
    const links = linksjson.links.map((link, index) => {
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

            {/* Create an Iframe in div for youtube video */}
            <div 
            style={{
                margin: 'auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 50
            }}>
                <iframe title="youtube"  src={'https://www.youtube.com/embed/'+linksjson.video} frameBorder="0"
                style={{
                    width: '95%',
                    maxWidth: '600px',
                    aspectRatio: '16/9',
                    margin: 'auto',
                }}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
    
            {links}
        </div>
    )
}
