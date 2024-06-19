import { useTranslation } from 'react-i18next'
import { FaFacebook,  FaLinkedin, FaWhatsapp } from "react-icons/fa";  
/* pictures */
const pictureClaudia = '../../src/assets/about/clau.jpg'
const pictureNatalia = '../../src/assets/about/nati.jpg' 
//* styles */
import './Curriculum.css'

export const Curriculum = () => {
    /* -- translations -- */
    const {t} = useTranslation('global');
    /* -- component -- */
    return (
        <div className="curriculum-container-general">
            <div className="curriculum-container-cards">
                <div className="curriculum-card">
                    <div className="curriculum-container-card-title">
                        <h3 className="curriculum-card-title">
                            Claudia Bellotti
                        </h3>
                    </div>
                    <div className="curriculum-card-content">
                        <div className="curriculum-card-container-image">
                            <img src={pictureClaudia} alt="" className="curriculum-card-image" />
                        </div>
                        <div className="curriculum-card-container-contact">
                            <ul className='curriculum-container-socialMedia'>
                                <li className='curriculum-socialMedia-li'>
                                    <a 
                                        href="" 
                                        className='curriculum-socialMedia-a' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <FaLinkedin className='curriculum-socialMedia-svg'/>
                                    </a>
                                </li>
                                <li className='curriculum-socialMedia-li'>
                                    <a 
                                        href="" 
                                        className='curriculum-socialMedia-a' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <FaFacebook className='curriculum-socialMedia-svg'/>
                                    </a>
                                </li>
                                <li className='curriculum-socialMedia-li'>
                                    <a 
                                        href="" 
                                        className='curriculum-socialMedia-a' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <FaWhatsapp className='curriculum-socialMedia-svg'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="curriculum-card">
                    <div className="curriculum-container-card-title">
                        <h3 className="curriculum-card-title">
                            Natalia Bellotti
                        </h3>
                    </div>
                    <div className="curriculum-card-content">
                        <div className="curriculum-card-container-image">
                            <img src={pictureNatalia} alt="" className="curriculum-card-image" />
                        </div>
                        <div className="curriculum-card-container-contact">
                            <ul className='curriculum-container-socialMedia'>
                                <li className='curriculum-socialMedia-li'>
                                    <a 
                                        href="" 
                                        className='curriculum-socialMedia-a' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <FaLinkedin className='curriculum-socialMedia-svg'/>
                                    </a>
                                </li>
                                <li className='curriculum-socialMedia-li'>
                                    <a 
                                        href="" 
                                        className='curriculum-socialMedia-a' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <FaFacebook className='curriculum-socialMedia-svg'/>
                                    </a>
                                </li>
                                <li className='curriculum-socialMedia-li'>
                                    <a 
                                        href="" 
                                        className='curriculum-socialMedia-a' 
                                        target='_blank' 
                                        rel='noreferrer'
                                    >
                                        <FaWhatsapp className='curriculum-socialMedia-svg'/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curriculum-container-partners">
                <div className="container-parter">
                    <div className="container-partner-title">
                        <h3 className="partner-title">
                            Claudia Bellotti
                        </h3>
                    </div>
                    <div className="container-partner-paragraph">
                        <p className="partner-paragraph">
                            {t('about.cv_claudia.first')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_claudia.second')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_claudia.third')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_claudia.fourth')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_claudia.fifth')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_claudia.sect')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_claudia.seventh')}
                        </p>
                    </div>
                </div>
                <div className="container-parter">
                    <div className="container-partner-title">
                        <h3 className="partner-title">
                            Natalia Bellotti
                        </h3>
                    </div>
                    <div className="container-partner-paragraph">
                        <p className="partner-paragraph">
                            {t('about.cv_natalia.first')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_natalia.second')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_natalia.third')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_natalia.fourth')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_natalia.fifth')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_natalia.sect')}
                        </p>
                        <p className="partner-paragraph">
                            {t('about.cv_natalia.seventh')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}