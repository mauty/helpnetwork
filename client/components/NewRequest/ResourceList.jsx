import ResourceListItem from "./ResourceListItem";
import { FormContext } from "../../contexts/FormContext";
import { useContext, useState } from "react";
import { useEffect } from "react";

const ResourceList = (props) => {
  const { resourceData } = props;

  const { state, setState } = useContext(FormContext)
  const [selectedResources, setSelectedResources ] = useState([])

  useEffect(() => {
    console.log('resourceData from Resource useEffect>>',resourceData)
    let filteredResources = resourceData.filter((resource) => {
      if (resource.category_id === state.categoryId) {
        return true
      } else {
        return false
      }
    });
    setSelectedResources(filteredResources)
    console.log('filteredResources', filteredResources)

  },[state.categoryId])
  
  
  const resourceComponentArray = selectedResources.map((resource) => {
    return (
      <ResourceListItem
        key={resource.id}
        id={resource.id}
        resourceName={resource.name} 
      />
    )
  })

  return (
    <div>
      <h2 className="text-lg font-bold">Resources Needed:</h2>
      <ul>
        {resourceComponentArray}
      </ul>
    </div>
  );
}

export default ResourceList;