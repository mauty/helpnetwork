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
    <ul>
      {resourceComponentArray}
    </ul>
  );
}

export default ResourceList;