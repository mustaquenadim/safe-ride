import React, { useContext } from 'react';
import { UserContext } from '../../App';

const GoogleMap = () => {
    const {getRide, setRide} = useContext(UserContext);
    return (
        <>
            <iframe
                title='Google Map'
                src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDMdlO3qKX7wG6u0KUkTJuVH9IUA57oAm4&origin=Bangladesh+${getRide.from || 'Dhaka'}&destination=Bangladesh+${getRide.to || 'Dhaka'}&avoid=tolls|highways`}
                width='800'
                height='650'
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=''
                loading='lazy'
            ></iframe>
        </>
    );
};

export default GoogleMap;
