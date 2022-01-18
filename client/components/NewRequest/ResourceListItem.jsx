const ResourceListItem = (props) => {
  const { resourceName } = props;
  
  return (
    <li>
      <div class="alert-sm alert-info rounded m-1">
        <div class="flex justify-between items-center">
          <label className='text-sm font-semibold'>{resourceName}</label>
          <input type="checkbox" class="toggle toggle-primary" unchecked="true" />
        </div>
      </div>
    </li>
  );
}

export default ResourceListItem;