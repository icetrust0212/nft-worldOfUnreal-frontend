import './footer.css';
import { Facebook, Google, Twitter } from 'react-bootstrap-icons';
import { footer_menu } from '../../static/Footer';
import { Link } from 'react-router-dom';
import React from 'react';
const socialIcons = [
    Facebook, Google, Twitter,Facebook, Google, Twitter,Facebook, Google
]

const Footer = () => {
    return (
        <div className="page-footer d-flex justify-content-around">
            <div className="col-4 left justify-content-around align-items-end">
                <img src="/assets/images/anna_bg.png" alt="background" className="background" />
                <div className="d-flex footer-menu-wrapper">
                    {
                        footer_menu.map((menu, index) => (
                            <Link to={menu.link} key={index} className="footer-menu d-block col-6">{menu.text}</Link>
                        ))
                    }
                </div>
            </div>
            <div className="col-4 middle d-flex align-items-center justify-content-center flex-column">
                <img src="/assets/images/craft-2.png" alt="banner" className="banner" />
                <label htmlFor="" className="footer-label1">
                    ©2020 World of Unreal, all rights reserved.
                </label>
                <label htmlFor="" className="footer-label2">
                    All trademarks referenced herein are the properties of their respective owners.
                </label>
            </div>
            <div className="col-4 right d-flex flex-column justify-content-center align-items-center">
                <div className="social-icon-wrapper d-flex ">
                    {
                        socialIcons.map((icon, index) => (
                            <div className="icon-layout col-3 " key={index}>
                                {
                                    React.createElement(icon, {
                                        className: " color-light social-icon"
                                    })
                                }
                            </div>
                        ))
                    }
                </div>
                <span className="footer-label3 d-flex">Terms and Conditions | Privacy Policy</span>
            </div>
        </div>
    )
}

export default Footer;