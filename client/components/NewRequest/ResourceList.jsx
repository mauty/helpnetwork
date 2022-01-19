import ResourceListItem from "./ResourceListItem";

const ResourceList = (props) => {
  const { resourceData } = props;
  
  const resourceComponentArray = resourceData.map((resource) => {
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