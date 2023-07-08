import { useEffect, useState } from 'react';
import i18n from 'i18next';
import dataServicesEnglish from '../data/dataServicesEnglish.json';
import dataServicesSpanish from "../data/dataServices.json"

export const useLocalizedDataServices = () => {
    const [localizedDataServices, setLocalizedDataServices] = useState([]);

    useEffect(() => {
        const loadLocalizedDataServices = () => {
            let dataServices;

            if (i18n.language === 'en') {
                dataServices = dataServicesEnglish;
            } else if (i18n.language === 'es') {
                dataServices = dataServicesSpanish;
            } else {
                // Establece un valor predeterminado en caso de que no se encuentre un idioma válido
                dataServices = dataServicesSpanish;
            }

            setLocalizedDataServices(dataServices);
        };

        loadLocalizedDataServices();
    }, [i18n.language]);

    return localizedDataServices;
};