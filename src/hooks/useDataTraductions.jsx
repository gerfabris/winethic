import { useEffect, useState } from 'react';
import i18n from 'i18next';

export const useDataTraductions = (dataSpanish, dataEnglish) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const loadData = () => {
            let data;

            if (i18n.language === 'en') {
                data = dataEnglish;
            } else if (i18n.language === 'es') {
                data = dataSpanish;
            } else {
                // Establece un valor predeterminado en caso de que no se encuentre un idioma válido
                data = dataSpanish;
            }

            setData(data);
        };

        loadData();
    }, [i18n.language]);

    return data;
};