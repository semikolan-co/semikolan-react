import payu from '../assets/images/companies/payu.png';
import mindtree from '../assets/images/companies/mindtree.jpg';
import microsoft from '../assets/images/companies/microsoft.png';
import adplist from '../assets/images/companies/adplist.jpg';
import cisco from '../assets/images/companies/cisco.jpg';
import infosys from '../assets/images/companies/infosys.png';
import crompton from '../assets/images/companies/crompton.jpg';
import designerrs from '../assets/images/companies/designerrs.jpg';
import ey from '../assets/images/companies/ey.jpg';
import hexaware from '../assets/images/companies/hexaware.jpg';
import induce from '../assets/images/companies/induce.jpg';
import infostretch from '../assets/images/companies/infostretch.jpg';
import infosysdigital from '../assets/images/companies/infosysdigital.jpg';
import inmobi from '../assets/images/companies/inmobi.jpg';
import makemytrip from '../assets/images/companies/makemytrip.png';
import saal from '../assets/images/companies/saal.jpg';
import solative from '../assets/images/companies/solative.jpg';
import swoo from '../assets/images/companies/swoo.jpg';
import apna from "../assets/images/companies/apna.jpg";
import accenture from "../assets/images/companies/accenture.jpg";
import iitk from "../assets/images/companies/iitk.jpg";
import jwt from "../assets/images/companies/jwt.jpg";
import neuratech from "../assets/images/companies/neuratech.jpg";
import recro from "../assets/images/companies/recro.jpg";
import designed from  "../assets/images/companies/designed.jpg";
import reliance from "../assets/images/companies/reliance.jpg";
import risd from "../assets/images/companies/risd.jpg";
import softude from "../assets/images/companies/softude.jpg";
import uniliver from "../assets/images/companies/uniliver.jpg";
import wongdoody from "../assets/images/companies/wongdoody.jpg"

import React from 'react'

export default class Companies extends React.Component {
    companies = {
        payu:payu,
        microsoft:microsoft,
        iitk:iitk,
        accenture:accenture,
        reliance: reliance,
        uniliver:uniliver,
        makemytrip:makemytrip,
        mindtree:mindtree,
        softude:softude,
        cisco:cisco,
        infosys:infosys,
        apna:apna,
        jwt:jwt,
        neuratech:neuratech,
        recro:recro,
        crompton:crompton,
        risd:risd,
        adplist:adplist,
        wongdoody:wongdoody,
        designed:designed,
        designerrs:designerrs,
        ey:ey,
        hexaware:hexaware,
        induce:induce,
        infosysdigital:infosysdigital,
        infostretch:infostretch,
        inmobi:inmobi,
        saal:saal,
        solative:solative,
        swoo:swoo
    }

    render() {
        return (
            <div id="tech" className="about container" style={{ marginTop: "150px" }}>
                <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
                    <span><em>03.</em>&nbsp;Bringing Experience From</span>
                    <div className="line-horizontal" />
                </div>
                <div className="aboutdiv">
                    <div className="row w-100">
                        {this.props.companies.map((company, i) => {
                            return (<div className="col-xl-2 col-lg-2 col-md-3 col-4 text-center">
                                <img src={this.companies[company]} alt="Technology Icon" className="comicon" />
                            </div>)
                        })}
                    </div>
                </div>
            </div>


        );
    }
}