import CategoryList from "./CategoryList";
import Container from "../ui/Container";
import NavBar from "../NavBar";
import ResourceList from "./ResourceList";
import Stepper from "./Stepper";

const NewRequest = (props) => {
  const { } = props;
  
  return (
    <div className="mb-auto">
      <h2>What kind of help do you need?</h2>
      <CategoryList />
      <div className="mx">
        <div className='flex flex-col p-2'>
          <label class="label">
            <span class="label-text">Details</span>
          </label>
          <textarea class="textarea h-24 textarea-bordered"></textarea>
        </div>
      </div>
      <ResourceList />
      <Stepper />

    </div>
  );
}

export default NewRequest;