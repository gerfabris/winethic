/* import LogoHome from '../../assets/logos/WinEthic - W.png' */
import LogoHome from '../../assets/logos/WinEthic_logoOK_BlancoLila-w.png'
/* import LogoHome from '../../assets/logos/WinEthic_logoOK_BlancoLila-w.png' */
/* import LogoHomeMobile from '../../assets/logotipes/WinEthic_logoOK_Color_Transparente.png' */
import LogoHomeMobile from '../../assets/logos/WinEthic - W-2.png'
/* import LogoHome from '../../assets/logo/Logo W.png' */
import Loader from 'react-loaders'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { Logo } from './Logo/Logo'
import { useTranslation } from 'react-i18next'
import { useImageSwitch } from '../../hooks/useImageSwitch'
import './Home.css'

export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    /* -- useImage Switch -- */
    const imageLogo = useImageSwitch(LogoHome , LogoHomeMobile)
    /* -- translation -- */
    const {t} = useTranslation('global');
    const getHiArray = () => {
        let hi = t('home.title.hi')    
        return hi.split('')
    } 
    const getWeareArray = () => {
        let weare = t('home.title.weare')    
        return weare.split('')
    } 
    const getNameArray = () => {
        let name = t('home.title.name')    
        return name.split('')
    } 
    const getJobArray = () => {
        let job = t('home.title.slogan')    
        return job.split('')
    } 
    const hiArray = getHiArray()
    const weareArray = getWeareArray()
    const nameArray = getNameArray()
    const jobArray = getJobArray()
    /* -- -- */
    return(
        <>
            <div className='container home-page'>
                <section className='text-zone'>
                    <h1 className='home-h1'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={hiArray}
                            idx={15}
                            className={`${letterClass}`}
                        />
                        <img src={imageLogo} alt="WinEtic" className='home-img'/>
                        <br/>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={weareArray}
                            idx={15}
                            className={`${letterClass}`}
                        />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                            className={`${letterClass}`}
                        />
                        <br />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={12}
                            className={`${letterClass}`}
                        />
                    </h1>
                    <article className='home-container-services'>
                        <Link to={'/services'}>
                            {t('home.services.cripto')}
                        </Link>
                        <span className='home-services-span'>
                            /
                        </span>
                        <Link to={'/services'}>
                            {t('home.services.blockchain')}
                        </Link>
                        <span className='home-services-span'>
                            /
                        </span>
                        <Link to={'/services'}>
                            {t('home.services.esports')}
                        </Link>
                    </article>
                    <article className='home-container-services'>                    
                        <Link to={'/services'}>
                            {t('home.services.business-law')}
                        </Link>
                        <span className='home-services-span'>
                            /
                        </span>
                        <Link to={'/services'}>
                            {t('home.services.others')}
                        </Link>
                    </article>
                    <div className='container-flat-button'>
                        <Link to='/contact' className='flat-button'>
                            {t('home.button.contactUs')}
                        </Link>
                        <Link to='/services' className='flat-button'>
                            {t('home.button.seeMore')}
                        </Link>
                    </div>
                    <Logo />
                </section>
            </div>
            <Loader type='ball-zig-zag-deflect' />
        </>
    )
}