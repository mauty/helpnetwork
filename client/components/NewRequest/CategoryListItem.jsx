const CategoryListItem = (props) => {
  const { name } = props;
  
  return (
    <li className="mb-1">
      <button className="btn btn-sm">{name}</button>
    </li>
  );
}

export default CategoryListItem;