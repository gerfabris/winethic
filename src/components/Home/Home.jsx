import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { Logo } from './Logo/Logo'
import LogoHome from '../../assets/logo/Logo W.png'
import Loader from 'react-loaders'
import './Home.css'

export const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    const nameArray = ['W', 'i', 'n', 'E', 't', 'h', 'i' , 'c']
    const jobArray = [
        'L',
        'e',
        'g',
        'a',
        'l',
        ' ',
        'S',
        'o',
        'l',
        'u',
        't',
        'i',
        'o',
        'n',
        's',
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    
    return(
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1 className='home-h1'>
                        <span className={letterClass}>H</span> 
                        <span className={`${letterClass} _12`}>i,</span> 
                        <br/>
                        <span className={`${letterClass} _13`}>We</span>
                        <span className={`${letterClass} _14`}>'re</span> 
                        <img src={LogoHome} alt="WinEtic" className='home-img'/>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2 className='home-h2'>
                        Compliance / Cripto / Blabla
                    </h2>
                    <Link to='/contact' className='flat-button'>
                            CONTACT US
                    </Link>
                    <Logo />
                </div>
            </div>
            <Loader type='ball-zig-zag-deflect' />
        </>
    )
}