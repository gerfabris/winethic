import { useState , useEffect, useRef } from 'react'
import Loader from 'react-loaders'
import { AnimatedLetters } from '../AnimatedLetters/AnimatedLetters'
import emailjs from '@emailjs/browser'
import './Contact.css'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export const Contact = () =>{
    /* -- animated letters -- */
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    /* -- title -- */
    const arrayTItle = ['C', 'o', 'n' , 't', 'a', 'c', 't', ' ', 'U', 's']
    /* ------ */
    return(
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1 className='contact-title'>
                        <AnimatedLetters
                            strArray={arrayTItle}
                            idx={15}
                            letterClass={letterClass}
                        />
                    </h1>
                    <p className='contact-p'>
                        Acá chamuyo de contacto
                    </p>
                    <div className='contact-form'>
                        <form action='' >
                            <ul className='contact-form-ul'>
                                <li className="contact-form-li half">
                                    <input 
                                        type="text" 
                                        name='name' 
                                        placeholder='Name' 
                                        required
                                        className='contact-form-input' 
                                    />
                                </li>
                                <li className="contact-form-li half">
                                    <input 
                                        type="email" 
                                        name='email' 
                                        placeholder='Email' 
                                        required
                                        className='contact-form-input'
                                    />
                                </li>
                                <li className="contact-form-li">
                                    <input 
                                        type="text" 
                                        name='subject' 
                                        placeholder='Subject' 
                                        required
                                        className='contact-form-input'
                                    />
                                </li>
                                <li className="contact-form-li">
                                    <textarea 
                                        name="message" 
                                        id="" cols="30" 
                                        rows="10"
                                        placeholder='Message'
                                        required
                                        className='contact-form-textarea'
                                    >
                                    </textarea>
                                </li>
                                <li className="contact-form-li">
                                    <input 
                                        type="submit" 
                                        className='flat-button'
                                        value='SEND' 
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    WIneThic Legal Solutions,
                    <br />
                    Argentina pa,
                    <br />
                    Mendoza City,
                    <br />
                    <span className='info-map-span'>
                        winethic@gmail.com
                    </span>
                </div>
                <div className="map-wrap">
                    <MapContainer 
                        center={[-32.89084, -68.82717]}
                        zoom={13}
                    >
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[-32.89084, -68.82717]} >
                            <Popup>
                                WinEthic, come here for the glorious
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}