import LogoHome from '../../assets/logos/WinEthic - W.png'
/* import LogoHome from '../../assets/logo/Logo W.png' */
import Loader from 'react-loaders'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { Logo } from './Logo/Logo'
import { useTranslation } from 'react-i18next'
import './Home.css'

export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

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
                <div className='text-zone'>
                    <h1 className='home-h1'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={hiArray}
                            idx={15}
                            className={`${letterClass} _13`}
                        />
                        <img src={LogoHome} alt="WinEtic" className='home-img'/>
                        <br/>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={weareArray}
                            idx={15}
                            className={`${letterClass} _14`}
                        />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={12}
                        />
                    </h1>
                    <h2 className='home-h2'>
                        Compliance / Cripto / Blabla
                    </h2>
                    <div className='container-flat-button'>
                        <Link to='/contact' className='flat-button'>
                                CONTACT US
                        </Link>
                    </div>
                    <Logo />
                </div>
            </div>
            <Loader type='ball-zig-zag-deflect' />
        </>
    )
}