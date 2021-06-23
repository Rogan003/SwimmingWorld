import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <span>Contact:</span>
            <div>
                <FaEnvelope />
                Email: 
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqWggGZXMDHhMrhdXsPQHLtvSNGXWlgPKmwKfFQQcXCzPLlhGHRgQjdKsCvVTGcgWxwXFg" rel = "noreferrer" target = "_blank">
                    roganovic.veselin@jjzmaj.edu.rs
                </a>
            </div>
            <div>
                <FaPhoneAlt />
                Phone number: +381 65 57 30 724
            </div>
            <div>
                <FaFacebookSquare />
                Facebook: 
                <a href = "https://www.facebook.com/veselin.roganovic" rel = "noreferrer" target = "_blank">
                    Veselin Roganovic
                </a>
            </div>
            <div>
                <FaInstagramSquare />
                Instagram: 
                <a href="https://www.instagram.com/veselin_roganovic/" rel = "noreferrer" target = "_blank">
                    veselin_roganovic
                </a>
            </div>
            <div>
                Made by Rogan003
            </div>
        </footer>
    )
}

export default Footer
