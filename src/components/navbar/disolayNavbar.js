import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DisplayNavbar = ({ children }) => {
    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        if (location.pathname === '/') {
            setShowNavbar(false);
        } else if (location.pathname === '/login') {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }
    }, [location]);

    return <div>{showNavbar && children}</div>;
};

export default DisplayNavbar;