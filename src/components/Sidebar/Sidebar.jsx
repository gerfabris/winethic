import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaEnvelope, FaFacebook, FaHome, FaLinkedin, FaSuitcase, FaUser, FaWhatsapp } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { useState } from 'react';
import { ButtonTranslations } from '../ButtonTranslation/ButtonTranslations';
import { useTranslation } from 'react-i18next'
import logo from '../../assets/logos/WinEthic - W.png'
/* import logo from '../../assets/logo/Logo W.png' */
import logoSubtitle from '../../assets/logos/Winethic.png'
/* import logoSubtitle from '../../assets/logo/Logo WinEthic text.png' */
import './Sidebar.css'

export const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)
    /* -- translations -- */
    const {t} = useTranslation('global');
    /* ---- */
    return(
        <div className='nav-bar'>
            <Link className='logo' to={'/'}>
                <img src={logo} alt='logo' className='logo-img'/>
                <img src={logoSubtitle} alt='slobodan' className='logo-sublogo'/>
            </Link>
            <nav 
                className={showNav ? 'nav-icons mobile-show' : 'nav-icons' }
            >
                <NavLink 
                    exact='true'
                    activeclassname='active'  
                    className='container-link home-link' 
                    to={'/'} 
                    onClick={ () => setShowNav(false)}
                >
                    <FaHome className='navbar-icon'/>
                </NavLink>
                <NavLink 
                    exact='true' 
                    activeclassname='active'  
                    className='container-link services-link' 
                    to={'/services'} 
                    onClick={ () => setShowNav(false)}
                >
                    <FaSuitcase className='navbar-icon'/>
                </NavLink>
                <NavLink 
                    exact='true' 
                    activeclassname='active'
                    className='container-link about-link' 
                    to={'/about'} 
                    onClick={ () => setShowNav(false)}
                >
                    <FaUser className='navbar-icon'/>
                </NavLink>
                <NavLink 
                    exact='true' 
                    activeclassname='active' 
                    to={'/contact'} 
                    className='container-link contact-link' 
                    onClick={ () => setShowNav(false)}
                >
                    <FaEnvelope 
                        className='navbar-icon'
                    />
                </NavLink>
            </nav>
            <ul className='container-socialMedia'>
                <li className='socialMedia-li'>
                    <a 
                        href="" 
                        className='socialMedia-a' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <FaLinkedin className='socialMedia-svg'/>
                    </a>
                </li>
                <li className='socialMedia-li'>
                    <a 
                        href="" 
                        className='socialMedia-a' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <FaFacebook className='socialMedia-svg'/>
                    </a>
                </li>
                <li className='socialMedia-li'>
                    <a 
                        href="" 
                        className='socialMedia-a' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <FaWhatsapp className='socialMedia-svg'/>
                    </a>
                </li>
            </ul>
            <ButtonTranslations 
                styleButton={showNav ? 'container-buttonTranslation buttonMobile-show' : 'container-buttonTranslation'}  
            />
            <FaBars 
                className={showNav ? 'nav-hamburger-none' : 'nav-hamburger' }
                onClick={ () => setShowNav(true)}
            />
            <CgClose 
                className={showNav ? 'nav-hamburger-close' : 'nav-hamburger-close-none' }
                onClick={ () => setShowNav(false)}
            />
        </div>
    )
}