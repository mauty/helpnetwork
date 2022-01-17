const CategoryListItem = (props) => {
  const { name } = props;
  
  return (
    <li>
      <button className="btn btn-sm">{name}</button>
    </li>
  );
}

export default CategoryListItem;