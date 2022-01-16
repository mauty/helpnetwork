import { useState, useRef } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";
import Mark from "./Map/Mark";

const geolocateControlStyle = {
  right: 10,
  top: 10,
};

const navControlStyle = {
  right: 10,
  bottom: 40,
};

export default function Map({ children }) {
  const mapRef = useRef(null);
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
  });

  return (
    <ReactMapGL
      className="flex"
      {...viewport}
      width="100%"
      height="60vh"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
      mapStyle={"mapbox://styles/mapbox/streets-v11"}
      ref={(instance) => (mapRef.current = instance)}
    >
      <Mark />
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation={true}
        auto
      />
      <NavigationControl style={navControlStyle} />
    </ReactMapGL>
  );
}
