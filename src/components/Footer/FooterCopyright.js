import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { FaFacebookF , FaTwitter , FaInstagram, FaPinterestP, FaGooglePlusG } from 'react-icons/fa';
import FooterBG from '../../assets/images/footer-bg.png';

export const FooterCopyright = () => {
    return (
        <div className="ic-footer-wraper ic-background-top-repetx ic-pt-60 ic-pb-60" style={{backgroundImage: 'url(' +FooterBG+ ')'}}>
            
            <Container className="text-center ic-container">
                <ul className="ic-footer-social ic-mb-60">
                    <li>
                        <Link to="/"><FaFacebookF /></Link>
                    </li>
                    <li>
                        <Link to="/"><FaTwitter /></Link>
                    </li>
                    <li>
                        <Link to="/"><FaInstagram /></Link>
                    </li>
                    <li>
                        <Link to="/"><FaPinterestP /></Link>
                    </li>
                    <li>
                        <Link to="/"><FaGooglePlusG /></Link>
                    </li>
                </ul>
                <p className="ic-footer-text text-uppercase">© 2018 me.me. All Rights Reserved. design with love with heart
Design & Developed By Itclanbd.</p>
            </Container>
            

            
        </div>
    )
}
