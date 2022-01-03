import React from 'react';
import{Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Form = () => {
    return (
        <>
            <div className="ic-footer-form">
                <form action="#">
                    <Row>
                        <Col md={6}>
                            <input type="text" placeholder="Name"/>
                        </Col>
                        <Col md={6}>
                            <input type="text" placeholder="Email Address"/>
                        </Col>

                        <Col md={12}>
                            <input type="text" placeholder="Subject"/>
                        </Col>

                        <Col md={12}>
                            <textarea type="text" placeholder="Message Here" />
                        </Col>
                    </Row>

                    <Link to="{void(0)}" className="ic-btn text-uppercase ic-mt-30">Message Send</Link>
                </form>
            </div>
        </>
    )
};


// import React from 'react';
// // import { Link } from 'react-router-dom';

// const ContacForm = () => {
//   return (
//     <>

//     <div className="ic-footer-area-inner">
//       <div className="ic-footer-top ic-footer-background ic-pb-160 ic-pt-20">
//         <div className="container">
//           <div className="ic-footer-warper">
//             <div className="row">
//               <div className="col-lg-6">
//                 <div className="ic-footer-contact-info">
//                   <h4 className="contact-us color-p">Contact Us</h4>
//                   <h1 className="ic-get-in-touch color-w">Get In Touch</h1>

//                   <p className="ic-address color-s">
//                     PO Box 398147
//                     <br />
//                     Miami Beach FL 33239
//                   </p>

//                   <Link
//                     className="ic-email color-w"
//                     to="mailto:photography@gmail.com"
//                   >
//                     <span className="color-p">Email:</span>
//                     photography@gmail.com
//                   </Link>
//                   <h2 className="ic-call-for color-w">
//                     Call For Work With Me
//                   </h2>
//                   <h2 className="ic-phone-no color-p">1-844-386-7463</h2>

//                   <div className="ic-footer-social">
//                     <ul>
//                       <li>
//                         <Link to="#">
//                           <i className="flaticon-facebook"></i>facebook
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/">
//                           <i className="flaticon-twitter"></i>twitter
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/">
//                           <i className="flaticon-instagram"></i>instagram
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div className="ic-footer-form">
//                   <Form />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//     </>
//   )
// }

// export default ContacForm;
