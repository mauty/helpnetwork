import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

const FormDetails = (props) => {
  const { } = props;
  
  const [ state, setState ] = useContext(FormContext)

  return (
    <div className="mx">
      <div className='flex flex-col p-2'>
        <label className="label">
          <span className="label-text">Details</span>
        </label>
        <textarea className="textarea h-24 textarea-bordered"></textarea>
      </div>
    </div>
  );
}

export default FormDetails;