import Loader from "react-loaders";
import { useState, useEffect, useRef } from "react";
import { AnimatedLetters } from "../AnimatedLetters/AnimatedLetters";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useTranslation } from 'react-i18next'
import "./Contact.css";

export const Contact = () => {
  /* -- animated letters -- */
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  /* -- translations -- */
  const {t} = useTranslation('global');
  const getTitleArray = () => {
    let title = t('contact.title')    
    return title.split('')
} 
  const arrayTitle = getTitleArray()
  /* ------ */
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1 className="contact-title">
            <AnimatedLetters
              strArray={arrayTitle}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p className="contact-p">{t('contact.speach') }</p>
          <div className="contact-form">
            <form action="">
              <ul className="contact-form-ul">
                <li className="contact-form-li half">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.name') }
                    required
                    className="contact-form-input"
                  />
                </li>
                <li className="contact-form-li half">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.email') }
                    required
                    className="contact-form-input"
                  />
                </li>
                <li className="contact-form-li">
                  <input
                    type="text"
                    name="subject"
                    placeholder={t('contact.subject') }
                    required
                    className="contact-form-input"
                  />
                </li>
                <li className="contact-form-li">
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder={t('contact.message')}
                    required
                    className="contact-form-textarea"
                  ></textarea>
                </li>
                <li className="contact-form-li">
                  <input type="submit" className="flat-button" value="SEND" />
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
          <span className="info-map-span">winethic@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-32.89084, -68.82717]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-32.89084, -68.82717]}>
              <Popup>WinEthic, come here for the glorious</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
