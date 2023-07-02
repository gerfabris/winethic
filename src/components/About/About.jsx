import Loader from 'react-loaders'
import { useState , useEffect } from 'react'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { FaHive } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import './About.css'

export const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    /* -- translations -- */
    const {t} = useTranslation('global');
    const getTitleArray = () => {
        let title = t('about.title')    
        return title.split('')
    }
    const titleArray = getTitleArray()
    /* ------ */
    return (
        <>
            <div className='container about-page'>
                <div className='about-text-zone'>
                    <h1 className='about-title'>
                        <AnimatedLetters
                            strArray={titleArray}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p className='about-p'>
                        {t('about.paragraphFirst')}
                    </p>
                    <p className='about-p'>
                        {t('about.paragraphSecond')}
                    </p>
                    <p className='about-p'>
                        {t('about.paragraphThird')}
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>
                        <div className='cube-face face1'>
                            <FaHive className='about-icon' fill='#DD0031'/>
                        </div>
                        <div className='cube-face face2'>
                            <FaHive className='about-icon' fill='#F06529'/>
                        </div>
                        <div className='cube-face face3'>
                            <FaHive className='about-icon' fill='#28A4D9'/>
                        </div>
                        <div className='cube-face face4'>
                            <FaHive className='about-icon' fill='#5ED4F4'/>
                        </div>
                        <div className='cube-face face5'>
                            <FaHive className='about-icon' fill='#EDF81D'/>
                        </div>
                        <div className='cube-face face6'>
                            <FaHive className='about-icon' fill='#DD0031'/>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}