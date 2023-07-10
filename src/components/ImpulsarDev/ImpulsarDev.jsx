import "./ImpulsarDev.css";
import LogoImpulsar from "../../assets/impulsarDev/impulsar.png";

export const ImpulsarDev = () => {
    return (
        <div className="container-impulsarDev">
                <h3 className="impulsarDev-title"> Diseñado por  </h3>
                <a 
                    href="https://www.impulsardev.com.ar" 
                    target="blank" 
                    className="impulsarDev-container-image"
                >
                    <img 
                        src={LogoImpulsar} 
                        alt="Impulsar Dev Solutions" 
                        className="impulsarDev-image"
                    />
                </a>
        </div>
    );
};