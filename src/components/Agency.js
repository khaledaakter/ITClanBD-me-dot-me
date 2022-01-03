import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import WorksBG from '../assets/images/works-bg.jpg'
import agencyImage from '../assets/images/agency.png'


export const Agency = () => {   
    
    return (
        
        <>
        
           <div className="ic-footer-wraper ic-background-top-repetx ic-pt-80 ic-pb-80" style={{backgroundImage: 'url(' +WorksBG+ ')'}}>
                <Container className="ic-container">
                    <div className="ic-section-heading text-center ic-mb-60">
                        <h1 className="color-blue ic-mb-40">The Best <span className="color-yellow">AGENCY</span></h1>
                        <p className="color-blue">THE ME.ME SPECIALIZES IN <strong>MULTI-MEDIA ADVERTISING AND COMMUNICATION</strong></p>
                    </div>                     
                    <Row className="ic-agency-body-content">

                        <Col md={6} className="ic-agency-image">
                            <img src={agencyImage} alt="agency" />
                        </Col>

                        <Col md={6} className="agency-content-list-wrap">
                            <div className="agency-content-list">
                                <div className="ic-agency-body-text">
                                    <h4 className="font-light">For each <strong className="font-medium color-yellow"> project, we create,</strong> a team of <strong className="font-medium color-yellow">talents and experts </strong>
                                    passionate about their job.<br /><br />

                                    <strong className="font-regular">We provide effective solutions to all your business issues.</strong></h4>
                                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ulgravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ulgravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>

                                    <p className="font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse </p>
                                </div>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
           </div> 
        </>
    )
}
