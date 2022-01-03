import React, {useState} from 'react';
import logo from '../../assets/images/main-logo.png';
import blackLogo from '../../assets/images/black-logo.png';
import {AiOutlineClose} from 'react-icons/ai'
import NavigationPage from './Mainnav';
import {HashLink} from 'react-router-hash-link';
import HeaderSlider from './HeaderSlider';


let icHeaderTopArea = {
    display: 'block',
    padding: '36px 0',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    position: 'relative',
    zIndex: '2000',
}



const Header = () => {
    const [mobileMenuOverlay, setMobileMenuOverlay] = useState(
      "ic-mobile-menu-overlay"
    );
    const [mobileOpenFlag, setMobileOpenFlag] = useState(false);
  
    const openNavMenuHandler = () => {
      if (!mobileOpenFlag) {
        // document.body.style.overflow = "hidden";
        setMobileMenuOverlay("ic-mobile-menu-overlay active");
      } else {
        // document.body.style.overflow = "auto";
        setMobileMenuOverlay("ic-mobile-menu-overlay");
      }
      setMobileOpenFlag(!mobileOpenFlag);
    };
  
    return (
      <div>
        <header>
          <div className="ic-header-with-slider">
            <div className="ic-sticky-header">
            {/* <div> */}
              
              <div className={mobileMenuOverlay}>
                <NavigationPage openNavMenuHandler={openNavMenuHandler} />
              </div>
              
              <div className="ic-header-top-area" style={icHeaderTopArea}>
                <div className="ic-container">
                  <div className="ic-header-top">
                    <div className="ic-main-logo">
                      <HashLink smooth to="/#home">
                      {mobileOpenFlag ?
                        <img
                          src={blackLogo}
                          className="img-fluid"
                          alt="logo"
                        /> : <img
                          src={logo}
                          className="img-fluid"
                          alt="logo"
                        />}
                      </HashLink>
                    </div>
  
                    <div
                      className="ic-mobile-menu-open"
                      onClick={openNavMenuHandler}
                    >
                        
                      <div>
                        {mobileOpenFlag ? (
                          <AiOutlineClose />
                        ) : (
                            <div className="ic-menu-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <i className="icofont-close"></i>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <HeaderSlider/>
            
          </div>
        </header>
      </div>
    );
  };
  
export default Header;



