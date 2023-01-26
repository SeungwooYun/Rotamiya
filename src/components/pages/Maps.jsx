import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
// npm i -S @react-google-maps/api npm 패키지 추가했음 for google maps
import { useMemo } from 'react';


const Maps = () => {
    const containerStyle = {
        width: '100%',
        height: '350px',
        margin: "30px auto",
        display: "inline-block"
    };

    const center = useMemo(() => ({
        lat: 33.528274,
        lng: 86.166465,
    }), []);

    const koreaAdress = {
        lat: 35.8149,
        lng: 127.1446,
    }

    const uzbekAdress = {
        lat: 40.124921,
        lng: 67.880688
    }

    const dubaiAdress = {
        lat: 25.098876,
        lng: 55.345028
    }
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })


    // --------------------------------------------


    if (!isLoaded) return <div>Loading..</div>

    return <GoogleMap
        zoom={1}
        center={center}
        mapContainerStyle={containerStyle}>
        <MarkerF
            position={koreaAdress}
        />
        <MarkerF
            position={uzbekAdress}
        />
        <MarkerF
            position={dubaiAdress}
        />
    </GoogleMap>
}

export default Maps