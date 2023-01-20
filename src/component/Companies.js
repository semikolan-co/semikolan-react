import payu from '../assets/images/companies/payu.png';
import mindtree from '../assets/images/companies/mindtree.jpg';
import microsoft from '../assets/images/companies/microsoft.png';
import adplist from '../assets/images/companies/adplist.jpg';
import cisco from '../assets/images/companies/cisco.jpg';
import infosys from '../assets/images/companies/infosys.png';

import React from 'react'

export default class Companies extends React.Component {
    companies = {
        payu: payu,
        mindtree: mindtree,
        microsoft: microsoft,
        adplist: adplist,
        cisco: cisco,
        infosys: infosys
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