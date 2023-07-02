import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useStyleTags = () => {
    const location = useLocation();

    useEffect(() => {
        const bottomTagsElement = document.querySelector('.bottom-tags');

        if (location.pathname === '/services' && bottomTagsElement) {
        bottomTagsElement.style.bottom = 'calc(0% - 60px)';
        }

        return () => {
        if (bottomTagsElement) {
            bottomTagsElement.style.bottom = '';
        }
        };
    }, [location]);

    return null;
};