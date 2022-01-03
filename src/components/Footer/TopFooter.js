import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import TopFooterBG from '../../assets/images/top-footer-bg.jpg'
import {Form} from '../../components/Contact/Form'


export const TopFooter = () => {
    return (
        <>
            <div className="ic-top-footer-wrap ic-background-top-repetx ic-pt-120 ic-pb-120" style={{backgroundImage: 'url(' +TopFooterBG+ ')'}}>
               <Container className="ic-container">
                    <Row>
                        <Col md={6}>
                            <div className="ic-footer-contact">
                                <h2 className="ic-footer-heading ic-mb-60 color-yellow">CONTACT US</h2>

                                <p className="ic-address color-white">
                                    <strong>Address</strong>
                                    274, Shah Kabir Mazar Road, Chalabon, Dokkhin Khan
                                    <br />Dhaka-1230, Bangladesh
                                </p>
                                <p className="ic-address color-white">
                                    <strong>Phone</strong>
                                    +880 1779 379 503 / +880 1770 823 204
                                </p>
                                <p className="ic-address color-white">
                                    <strong>Email</strong>
                                    support@itclanbd.com / Info@itclan.com
                                </p>
                            </div>

                        </Col>

                        <Col md={6}>
                            <div className="ic-footer-contact">
                                <h2 className="ic-footer-heading ic-mb-60 color-yellow">GET IN TOUCH</h2>
                            </div>

                            <Form/>
                        </Col>
                    </Row>
               </Container>
            </div>

        </>
    )
};