import React, { useEffect } from 'react';
import useViewport from '../../hooks/useViewport';
import Map from '../Map';
import Mark from '../Map/Mark';

/***************************************************************************
 * TODO: IN THE FUTURE
 * ./components/Map/index component should be like this in default
 * with the useViewport in the same file so it doesn't re render everything
 * in the page where you have the useViewport
 ***************************************************************************/

export default function RequestMap({ long, lat }) {
  const { viewport, setViewport} = useViewport();
  useEffect(() => {
      setViewport({ longitude: long, latitude: lat, zoom: 16, maxZoom: 16, minZoom: 13 });
  }, [long, lat])

  return (
    <Map viewport={viewport} setViewport={setViewport} isGeoLocate={false} height="30vh" width="50vw">
      <Mark longitude={long} latitude={lat}/>
    </Map>
  );
}
