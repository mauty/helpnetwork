const LocationChooser = (props) => {
  const { } = props;
  
  const clickHandler = () => {
    console.log('>>>> trigger google places lookup');
    // TO DO google places geolocation lookup
  }

  return (
    <div className='flex justify-between p-2 gap-4 mt-10'>
      <div className="form-control gap-2 w-full">
      <button className="btn btn-secondary mb-6" onClick={clickHandler}>Use My Current Location</button>
      <div className="flex justify-between items-center">
        <label className='text-lg font-semibold'>Or Somewhere Else:</label>
        <input type="checkbox" className="toggle toggle-primary" unchecked="true" />
      </div>
          <label className="label">
            <span className="label-text">Postal Code</span>
          </label>
          <input type="text" className="input input-sm input-bordered w-full sm:w-80" placeholder="eg: M6C 2R8"/>
        </div>
      </div>
  );
}

export default LocationChooser;