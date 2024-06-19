import Loader from "react-loaders";
import { useState , useEffect } from "react"
import { AnimatedLetters } from "../AnimatedLetters/AnimatedLetters"
import { renderServices } from "./useRenderServices";
import { useTranslation } from 'react-i18next'
import { useStyleTags } from "../../hooks/useStyleTags";
import { useLocalizedDataServices } from "../../hooks/useDataServices";
import './Products.css'

export const Products = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    /* -- style tags --  */
    useStyleTags()
    /* Animated Letters */
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    /* -- Services Data -- */
    const services = useLocalizedDataServices()
    /* -- translations -- */
    const {t} = useTranslation('global');
    const getTitleArray = () => {
        let title = t('services.title')    
        return title.split('')
    }
    const titleArray = getTitleArray()
    /* -------- */
    return(
        <>
            <div className="container services-page">
                <h1 className="services-page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={titleArray}
                        idx={10}
                    />
                </h1>
                <div className="services-intro-container">
                    <p className="services-intro-paragraph">
                        {t('services.intro.paragraph.first')}
                    </p>
                    <p className="services-intro-paragraph">
                        {t('services.intro.paragraph.second')}
                    </p>
                    <p className="services-intro-paragraph">
                        {t('services.intro.paragraph.third')}
                    </p>
                    <p className="services-intro-paragraph">
                        {t('services.intro.paragraph.fourth')}
                    </p>
                </div>
                <div className="containerRender">{renderServices(services)}</div>
            </div>
            <Loader type="ball-zig-zag-deflect" />
        </>
    )
}