import { useRef } from "react";
import ReactMapGL, { GeolocateControl, NavigationControl } from "react-map-gl";

export default function Map({
  children,
  viewport,
  setViewport,
  isGeoLocate = true,
  height = '55vh',
  width = '100vw',
}) {
  const mapRef = useRef(null);

  return (
    <ReactMapGL
      className="flex"
      {...viewport}
      width={width}
      height={height}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`}
      mapStyle={"mapbox://styles/mapbox/streets-v11"}
      ref={(instance) => (mapRef.current = instance)}
    >
      {isGeoLocate && (
        <GeolocateControl
          style={{ right: 10, top: 10 }}
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
          auto
        />
      )}
      <NavigationControl style={{ right: 10, bottom: 40 }} />
      {children}
    </ReactMapGL>
  );
}
