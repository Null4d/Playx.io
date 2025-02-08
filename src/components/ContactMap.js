import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import darkModeStyles from "./map.json";

const center = {
    lat: 37.3875,
    lng: -122.0575,
};

const ContactMap = () => {
    return (
        <LoadScript googleMapsApiKey="AIzaSyAKcsjAv1WiZWCPngxU4KnPbqZZsidsTpk">
            <div className="block w-full h-[600px] opacity-80">
                <GoogleMap
                    mapContainerClassName="w-full h-600px"
                    center={center}
                    zoom={12}
                    options={{ styles: darkModeStyles }}
                />
            </div>
        </LoadScript>
    );
};

export default ContactMap;
