import React from "react";
import {Container} from 'react-bootstrap';
import WedoBG from '../assets/images/wedo-bg.jpg'
import Icofont from 'react-icofont';


export const Wedo = () => {   
    
    return (
        
        <>
        
           <div className="ic-footer-wraper ic-background-top-repetx ic-pt-80 ic-pb-80" style={{backgroundImage: 'url(' +WedoBG+ ')'}}>
                <Container>
                    <div className="ic-section-heading text-center ic-mb-60">
                        <h1 className="color-blue ic-mb-40">What <span className="color-white">We do</span></h1>
                        <p className="color-blue">THE ME.ME SPECIALIZES IN <strong>MULTI-MEDIA ADVERTISING AND COMMUNICATION</strong></p>
                    </div>                     
                    <div className="ic-wedo-body-content">

                        <div className="wedo-content-list-wrap">
                            <div className="wedo-content-list">
                                <div className="ic-wedo-body-text ic-wedo-first-content-text">
                                    <h4>Origination of unique Ideas</h4>
                                    <p>Digital, audiovisual and print production <br />
                                        Creation and editorial integration <br />
                                        Event management</p>
                                </div>
                                <Icofont icon="unique-idea" />
                            </div>
                        </div>

                        <div className="wedo-content-list-wrap">
                            <div className="wedo-content-list">
                                <div className="ic-wedo-body-text">
                                    <h4>creation & media production</h4>
                                    <p>Digital, audiovisual and print production <br />
                                        Creation and animation DOOH <br />
                                        Creation and editorial integration <br />
                                        Event management</p>
                                </div>
                                <Icofont icon="video-clapper" />
                            </div>
                        </div>

                        <div className="wedo-content-list-wrap">
                            <div className="wedo-content-list">
                                <div className="ic-wedo-body-text ic-wedo-left-content-text">
                                    <h4>Insights & communication strategies</h4>
                                    <p>Digital, audiovisual and print production <br />
                                        Creation and editorial integration<br /> 
                                        Event managementt</p>
                                </div>
                                <Icofont icon="cycling-alt" />
                            </div>
                        </div>

                        <div className="wedo-content-list-wrap">
                            <div className="wedo-content-list">
                                <div className="ic-wedo-body-text">
                                    <h4>programing & development</h4>
                                    <p>Digital, audiovisual and print production <br /> 
                                    Creation and editorial integration </p>
                                </div>
                                <Icofont icon="code" />
                            </div>
                        </div>

                        
                    </div>
                </Container>
           </div> 
        </>
    )
}
