import React from "react";
import {Container,Row,Col} from 'react-bootstrap';
import WorksBG from '../../assets/images/works-bg.jpg'
import {WorkList} from './WorkList'
import Icofont from 'react-icofont';


export const Works = () => {   
    
    return (
        
        <>
        
           <div className="ic-footer-wraper ic-background-top-repetx ic-pt-80 ic-pb-80" style={{backgroundImage: 'url(' +WorksBG+ ')'}}>
                <Container className="ic-container">
                    <div className="ic-section-heading text-center ic-mb-60">
                        <h1 className="color-blue ic-mb-40">How It <span className="color-yellow">WORKS</span></h1>
                        <p className="color-blue">THE ME.ME SPECIALIZES IN <strong>MULTI-MEDIA ADVERTISING AND COMMUNICATION</strong></p>
                    </div>
                    <div className="ic-works-body-content"> 
                        <Row>   
                            <Col lg={3} md={12}>
                                <div className="ic-work-body-content-left">
                                    {WorkList.map((val, index) => {
                                        if((index % 2) == 0){
                                            return(
                                                <div className="works-content-list" key = {val.id}>
                                                    <h4>{val.title}</h4>
                                                    <p>{val.para}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </Col>
                            <Col lg={6} md={12}>
                                <div className="ic-work-body-fonts-wrap">
                                    <div className="ic-work-fonts-mid-circle">
                                        <h4>08 STEPS WORKING PROGRESS</h4>
                                    </div>

                                    <div className="ic-works-all-icon">

                                        <ul>
                                            <li className="ic-works-icon"><Icofont icon="location-arrow" className="ic-arrow-icon"/><span><Icofont icon="handshake-deal" /></span></li>
                                            <li className="ic-works-icon"><Icofont icon="location-arrow" className="ic-arrow-icon"/><span><Icofont icon="ui-copy" /></span></li>
                                            <li className="ic-works-icon"><Icofont icon="location-arrow" className="ic-arrow-icon"/><span><Icofont icon="data" /></span></li>
                                            <li className="ic-works-icon"><Icofont icon="location-arrow" className="ic-arrow-icon"/><span><Icofont icon="light-bulb" /></span></li>
                                            <li className="ic-works-icon"><Icofont icon="location-arrow" className="ic-arrow-icon"/><span><Icofont icon="ruler-pencil-alt-2" /></span></li>
                                            <li className="ic-works-icon"><Icofont icon="location-arrow" className="ic-arrow-icon"/><span><Icofont icon="code" /></span></li>
                                            <li className="ic-works-icon"><Icofont icon="location-arrow" className="ic-arrow-icon"/><span><Icofont icon="responsive" /></span></li>
                                            <li className="ic-works-icon"><Icofont icon="location-arrow" className="ic-arrow-icon"/><span><Icofont icon="rocket" /></span></li>                                            
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={12}>
                                <div className="ic-work-body-content-right">
                                    {WorkList.map((val, index) => {
                                        if((index % 2) !== 0){
                                            return(
                                                <div className="works-content-list" key = {val.id}>
                                                    <h4>{val.title}</h4>
                                                    <p>{val.para}</p>
                                                </div>
                                            )
                                        }
                                    })}
                                    
                                </div>
                            </Col>
                        </Row>                       
                    </div>
                    
                    <div className="ic-mobile-works-body-content">
                        {WorkList.map((val) => {
                            return(
                                <div className="works-content-list" key = {val.id}>
                                    <h4>{val.title}</h4>
                                    <p>{val.para}</p>
                                </div>
                            )                      
                        })}
                    </div>


                    
                </Container>
           </div> 
        </>
    )
}
