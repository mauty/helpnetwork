import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

const FormDetails = (props) => {
  const { register, errors } = props;
  
  const { state, setState } = useContext(FormContext)

  const updateDetailsState = (newDetails) => {
    setState((prev) => ({...prev, details: newDetails}));
  }

  return (
    <div className="mx">
      <div className='flex flex-col p-2'>
        <label className="label">
          <span className="label-text">I need help with...</span>
        </label>
        <textarea
          label="details"
          placeholder="Please be specific about your needs :) "
          className="textarea h-24 textarea-bordered"
          {...register('details', { required: true, maxLength: 280 })}
          onChange={(event)=>updateDetailsState(event.target.value)}
        />
        {errors.details && (
          <label className='text-xs text-red-800'>Provide a few details about your help request.</label>
        )}
      </div>
    </div>
  );
}

export default FormDetails;