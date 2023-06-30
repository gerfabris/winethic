import { Link } from 'react-router-dom'
import logo from '../../assets/logo/Logo W.png'
import { FaFacebook,  FaLinkedin, FaWhatsapp } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
    return(
        <footer className='footer'>
            <div className='container-footer-logo'>
                <Link className='footer-logo'>
                    <img src={logo} alt='logo' className='footer-logo-img'/>
                </Link>
            </div>
            <div className='container-footer-sections'>
                <div className='footer-sections-container'>
                    <div className="footer-sections-content">
                        About
                    </div>
                    <div className="footer-sections-content">
                        Information
                    </div>
                    <div className="footer-sections-content">
                        News
                    </div>
                </div>
                <div className='footer-sections-copyright'>
                    <hr className='copyright-hr'/>
                    <div className='copyright-content'>
                        <div className='copyright-content-text'>
                            Copyright
                        </div>
                        <div className='copyright-socialMedia'>
                            <h3 className='copyright-socialMedia-title'>
                                Follow Us
                            </h3>
                            <ul className='footer-container-socialMedia'>
                                <li className='footer-socialMedia-li'>
                                    <a 
                                        href="" 
                                        className='footer-socialMedia-a' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <FaLinkedin className='footer-socialMedia-svg'/>
                                    </a>
                                </li>
                                <li className='socialMedia-li'>
                                    <a 
                                        href="" 
                                        className='footer-socialMedia-a' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <FaFacebook className='footer-socialMedia-svg'/>
                                    </a>
                                </li>
                                <li className='socialMedia-li'>
                                    <a 
                                        href="" 
                                        className='footer-socialMedia-a' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <FaWhatsapp className='footer-socialMedia-svg'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}