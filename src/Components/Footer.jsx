import React from "react";
import '../Styles-Components/Footer.css'
import {MdOutlineVideogameAsset} from  'react-icons/md'
import {BsInstagram , BsGithub} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import {FaTiktok, FaLinkedinIn} from 'react-icons/fa'


const Footer = () => {
    return (
        <footer className="container footer-container navbar navbar-dark bg-dark">
            <h1 className="navbar-brand text-uppercase">Made By <MdOutlineVideogameAsset className="logo" /> Benja<span>min</span> Destefa<span>nis</span></h1>

            <div className="social-container">

                <a href="https://www.instagram.com/banjyscodes/" target="_blank"><BsInstagram /></a>
                <a href="https://github.com/BenjaminDestefanis" target="_blank"><BsGithub /></a>
                <a href="https://twitter.com/DestefanisBenj" target="_blank"><FiTwitter /></a>
                <a href=""><FaTiktok /></a>
                <a href="https://www.linkedin.com/in/benjaminisraelbaigorria/" target="_blank"><FaLinkedinIn /></a>
            </div>

            <div className="mark-container">
                The pixel code
            </div>


            
        </footer>
    )
}

export default Footer;