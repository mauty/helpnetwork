import { useState } from "react";
import { set } from "react-hook-form";

const TimeChooser = (props) => {
  const { } = props;

  const [timeSensitiveToggle, setTimeSensitiveToggle ] = useState(false)
  
  const clickHandler = () => {
    console.log('>>>> confirm time_sensitive = false');
    // TO DO set state for time_senstive = false
  }

  return (
    <div className='flex justify-between p-2 gap-4 mt-8'>
      <div className="form-control gap-2 w-full">
        <button className="btn btn-secondary mb-6" onClick={clickHandler}>Anytime is Fine</button>
        <div className="flex justify-between items-center">
          <label className='text-lg font-semibold'>Or Specific Time:</label>
          <input
            type="checkbox" 
            className="toggle toggle-primary" 
            unchecked="true" 
            onChange={() => setTimeSensitiveToggle(!timeSensitiveToggle)}/>
        </div>
        { timeSensitiveToggle &&
          <div id="date-time">
            <div>
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" className="input input-sm input-bordered w-full sm:w-80" placeholder="eg: M6C 2R8"/>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input type="time" className="input input-sm input-bordered w-full sm:w-80" placeholder="eg: M6C 2R8"/>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default TimeChooser;