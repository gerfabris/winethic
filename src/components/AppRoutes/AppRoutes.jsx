import { BrowserRouter } from 'react-router-dom'
import { PublicRoutes } from './PublicRoutes';

export const AppRoutes = () => {
    return (
            <BrowserRouter>
                <PublicRoutes />
            </BrowserRouter>
        );
};