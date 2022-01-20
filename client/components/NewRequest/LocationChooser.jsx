import Geocode from "react-geocode";
import { useEffect, useState } from "react";

Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAPS_API);

const LocationChooser = (props) => {
  const { } = props;
  
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  const [locationToggle, setLocationToggle] = useState(false)

  const clickHandler = () => {
    console.log('>>>> trigger google places lookup');
    // TO DO google places geolocation lookup
  }

  const getCoordsFromPostal = (fromForm) => {
    
    Geocode.fromAddress(fromForm).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log('geocode>>>>',lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  const handleLocationClick = () => {
    getLocation()
    setLocationToggle(false)
  }

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        console.log('navigator>>>>',lat, lng)
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  return (
    <div className='flex justify-between p-2 gap-4 mt-10'>
      <div className="form-control gap-2 w-full">
        <button className="btn btn-secondary mb-6" onClick={handleLocationClick}>Use My Current Location</button>
        <h2>{lat}, {lng}</h2>
        <div className="flex justify-between items-center">
          <label className='text-lg font-semibold'>Or Somewhere Else:</label>
          <input
            type="checkbox" 
            className="toggle toggle-primary" 
            checked={locationToggle}
            onChange={() => setLocationToggle(!locationToggle)}
          />
        </div>
        { locationToggle &&
          <div>
            <label className="label">
              <span className="label-text">Postal Code</span>
            </label>
            <input
              type="text" 
              className="input input-sm input-bordered w-full sm:w-80" 
              placeholder="eg: M6C 2R8"
              onChange={(event) => getCoordsFromPostal(event.target.value)}
              />
          </div>
        }
      </div>
    </div>
  );
}

export default LocationChooser;