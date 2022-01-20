import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";

const ResourceListItem = (props) => {
  const { id, resourceName } = props;
  const {state, setState} = useContext(FormContext)
  
  const clickHandler = (id) => {
    setState((prev) => {
      if (prev.resources[id]) {
        let newResourceState = null
        prev.resources[id] === true ? newResourceState = false : newResourceState = true;
        return {...prev, resources: {...prev.resources, [id]: newResourceState }}
      }

      return ({...prev, resources: {...prev.resources, [id]: true }})
    });
  }

  return (
    <li >
      <div className="alert-sm alert-info rounded m-1">
        <div className="flex justify-between items-center">
          <label className='text-sm font-semibold'>{resourceName}</label>
          <input 
            type="checkbox" 
            className="toggle toggle-primary" 
            unchecked="true" 
            onChange={()=> clickHandler(id)}
          />
        </div>
      </div>
    </li>
  );
}

export default ResourceListItem;