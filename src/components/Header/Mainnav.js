import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuBackgroundImage from '../../assets/images/menu-background.jpg';

const Navigationpage = (props) => {


    return (
        <div className="offcanvas_menu d-block ic_mobile_nav_head" style={{backgroundImage: 'url(' +MenuBackgroundImage+ ')'}}>
      
            <Container className="ic-container">
                <div className="ic-mobile-menu-wrapper">
                    <div className="mobile-menu">
                        <ul className="ic-mobile-menu">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Services</Link></li>
                            <li><Link to="/">Works</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Navigationpage;