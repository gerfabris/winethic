import { useState , useEffect } from 'react'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import { FaHive } from 'react-icons/fa'
import Loader from 'react-loaders'
import './About.css'

export const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>
                <div className='about-text-zone'>
                    <h1 className='about-title'>
                        <AnimatedLetters
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'U', 's']}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p className='about-p'>
                        En Winethic abogados, nos esforzamos por construir relaciones confiables a largo plazo con nuestros 
                        clientes al eliminar la carga del departamento de legales y compliance con un servicio estelar, 
                        personalizado y eficiente que les permita concentrarse en lo que más importa; hacer crecer una empresa 
                        de tecnología innovadora de acuerdo a los pilares y estándares éticos más elevados
                    </p>
                    <p className='about-p'>
                        Se lanzó WINETHIC para ayudar a las nuevas empresas y empresas en ascenso a superar los desafíos 
                        asociados con la estrategia y la planificación legal y de compliance. Ya sea para recaudar capital 
                        operativo adicional o para cumplir con los requisitos de la Junta Directiva, nuestro equipo de 
                        asesores dinámicos está aquí para ayudarlo.
                    </p>
                    <p className='about-p'>
                        Nos enorgullecemos de adaptar nuestro enfoque a las necesidades de cada cliente. Al ayudar a múltiples 
                        empresas, nuestro equipo ha adquirido conocimiento de varias industrias disruptivas tecnológicas.
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