import { useState , useEffect } from "react"
import { AnimatedLetters } from "../AnimatedLetters/AnimatedLetters"
import Loader from "react-loaders";
import dataServices from "../../data/dataServices.json"
import { renderServices } from "./useRenderServices";
import './Products.css'

export const Products = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

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
    const services = dataServices
    /* -------- */

    return(
        <>
            <div className="container services-page">
                <h1 className="services-page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Nuestros Servicios".split("")}
                        idx={10}
                    />
                </h1>
                <div className="containerRender">{renderServices(services)}</div>
            </div>
            <Loader type="pacman" />
        </>
    )
}