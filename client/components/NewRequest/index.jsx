import CategoryList from "./CategoryList";
import Container from "../ui/Container";
import NavBar from "../NavBar";
import ResourceList from "./ResourceList";
import Stepper from "./Stepper";
import { useState } from "react";

const NewRequest = (props) => {
  const { } = props;
  
  const [state, setState] = useState({
    categoryId: 0,
    details: '',
    resourceSelected: 0
  })

  return (
    <div className="mb-auto">
      <h2 className="text-xl font-bold">What kind of help do you need?</h2>
      <CategoryList />
      <div className="mx">
        <div className='flex flex-col p-2'>
          <label className="label">
            <span className="label-text">Details</span>
          </label>
          <textarea className="textarea h-24 textarea-bordered"></textarea>
        </div>
      </div>
      <ResourceList />
      <Stepper />
      <div className="flex justify-center">
        <button className="btn btn-wide btn-md btn-primary m-4">Next</button>
      </div>
    </div>
  );
}

export default NewRequest;