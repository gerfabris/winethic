import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import './ButtonTranslations.css'

export const ButtonTranslations = ( {styleButton} ) => {
    const [isEs, setIsEs] = useState(true);
    const {i18n} = useTranslation('global');

    const handleButtonClickEs = () => {
        setIsEs(true);
        i18n.changeLanguage('es')
    };
    const handleButtonClickEn = () => {
        setIsEs(false);
        i18n.changeLanguage('en')
    };


    return (
    <div 
        className={styleButton}
    >
        <button
            onClick={handleButtonClickEs}
            className={isEs ? 'buttons button-es' : 'buttons'}
        >
            ES
        </button>
        <button
            onClick={handleButtonClickEn}
            className={isEs ? 'buttons' : 'buttons button-en'}
        >
            EN
        </button>    
    </div>
    );
};
