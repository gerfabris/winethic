import { useEffect, useState } from 'react';

export const useImageSwitch = (imageLarge, imageSmall) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
        setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Limpieza del event listener al desmontar el componente
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = windowWidth < 520;
    const imageUrl = isMobile ? imageSmall : imageLarge;

    return imageUrl;
};