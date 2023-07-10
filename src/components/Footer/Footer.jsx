import logo from '../../assets/logos/WinEthic - Completo.png'
import { Link, NavLink } from 'react-router-dom'
import { FaFacebook,  FaLinkedin, FaWhatsapp } from "react-icons/fa";
/* import logo from '../../assets/logo/Logo W.png' */
import { useTranslation } from 'react-i18next'
import './Footer.css'
import { ImpulsarDev } from '../ImpulsarDev/ImpulsarDev';

export const Footer = () => {
    /* -- translations -- */
    const {t} = useTranslation('global');
    /* ---- ---- */
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
                        <h2 className='footer-sections-content-title'>
                            {t('footer.specialties.title') }
                        </h2>
                        <p className='footer-sections-content-link'>
                            {t('footer.specialties.compliance') }
                        </p>
                        <p className='footer-sections-content-link'>
                            {t('footer.specialties.cripto') }
                        </p>
                    </div>
                    <div className="footer-sections-content">
                        <h2 className='footer-sections-content-title'>
                            {t('footer.information.title') }
                        </h2>
                        <p className='footer-sections-content-link'>
                            {t('footer.information.location') }
                        </p>
                        <a href="mailto:winethic@gmail.com" className='footer-sections-content-link'>
                            winethic@gmail.com
                        </a>
                    </div>
                    <div className="footer-sections-content">
                        <h2 className='footer-sections-content-title'>
                            {t('footer.navigation.title') }
                        </h2>
                        <NavLink to={'/'} className='footer-sections-content-link'>
                            {t('footer.navigation.home') }
                        </NavLink>
                        <NavLink to={'/services'} className='footer-sections-content-link'>
                            {t('footer.navigation.services') }
                        </NavLink>
                        <NavLink to={'/about'} className='footer-sections-content-link'>
                            {t('footer.navigation.about') }
                        </NavLink>
                        <NavLink to={'/contact'} className='footer-sections-content-link'>
                            {t('footer.navigation.contact') }
                        </NavLink>
                    </div>
                </div>
                <div className='footer-sections-copyright'>
                    <hr className='copyright-hr'/>
                    <div className='copyright-content'>
                        <div className='copyright-content-text'>
                            Copyright ® WinEthic - 2023
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
                    <div className='copyright-impulsar'>
                            <ImpulsarDev/>
                        </div>
                </div>
            </div>
        </footer>
    )
}