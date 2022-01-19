import ResourceListItem from "./ResourceListItem";

const ResourceList = (props) => {
  const { } = props;
  
  const resourcesData = [
    "Snow Blower",
    "Lawn Mower",
    "Pickup Truck",
    "Ladder",
    "Wheelbarrow",
    "Hammer Drill"
  ]

  const resourceComponentArray = resourcesData.map((resource) => {
    return (
      <ResourceListItem resourceName={resource} />
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