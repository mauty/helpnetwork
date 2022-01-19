const ResourceListItem = (props) => {
  const { resourceName } = props;
  
  return (
    <li >
      <div className="alert-sm alert-info rounded m-1">
        <div className="flex justify-between items-center">
          <label className='text-sm font-semibold'>{resourceName}</label>
          <input type="checkbox" className="toggle toggle-primary" unchecked="true" />
        </div>
      </div>
    </li>
  );
}

export default ResourceListItem;