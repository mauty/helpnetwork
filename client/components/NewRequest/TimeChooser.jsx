import { useState } from "react";
import { set } from "react-hook-form";
import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import clsx from "clsx";

const TimeChooser = (props) => {
  const { register, errors } = props;

  const { state, setState } = useContext(FormContext)

  const [timeSensitiveToggle, setTimeSensitiveToggle ] = useState(false)
  
  const anytimeButton = () => {
    setTimeSensitiveToggle(false)
    setState((prevState) => ({...prevState, timeSensitive: false}))
    updateDateState('')
    updateTimeState('')
  }

  const updateTimeSensitive = () => {
    setTimeSensitiveToggle(!timeSensitiveToggle)
    setState((prevState) => ({...prevState, timeSensitive: !timeSensitiveToggle}))
    updateDateState('')
    updateTimeState('')
  }

  const updateDateState = (dateInput) => {
    setState((prevState) => ({...prevState, date: dateInput}));
  };

  const updateTimeState = (timeInput) => {
    setState((prevState) => ({...prevState, startTime: timeInput}));
  };

  return (
    <div className='flex justify-between p-2 gap-4 mt-8'>
      <div className="form-control gap-2 w-full">
        <button
          className={clsx("btn mb-6",{"btn-secondary": timeSensitiveToggle === false, "btn-disabled": timeSensitiveToggle === true})}
          onClick={anytimeButton}>Anytime is Fine</button>
        <div className="flex flex-col justify-between items-left">
          <label className='text-lg font-semibold mb-2'>Or Specific Time:</label>
          <input
            type="checkbox" 
            className="toggle toggle-primary" 
            checked={timeSensitiveToggle}
            onChange={updateTimeSensitive}/>
        </div>
        { timeSensitiveToggle &&
          <div id="date-time">
            <div>
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input
                type="date"
                className="input input-sm input-bordered w-full sm:w-80"
                {...register('date', { required: true })}
                onChange={(event) => updateDateState(event.target.value) }
              />
              {errors.date && (
                <label className='text-xs text-red-800'>Provide a date for your help request.</label>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text">Time</span>
              </label>
              <input
                type="time"
                className="input input-sm input-bordered w-full sm:w-80"
                {...register('time', { required: true })}
                onChange={(event) => updateTimeState(event.target.value)}
              />
              {errors.time && (
                <label className='text-xs text-red-800'>Provide a time for your help request.</label>
              )}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default TimeChooser;