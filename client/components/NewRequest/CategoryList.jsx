import CategoryListItem from "./CategoryListItem";

const CategoryList = (props) => {
  const { } = props;
  
  const categories = [
    "Groceries",
    "Pharmacy Items",
    "Pet Care",
    "Cleaning",
    "Home Maintenance",
    "Meal Preparation",
    "Tech Support",
    "Gardening",
    "Exercise",
    "Moving Furniture",
    "Mental Wellness",
    "House Sitting"
  ]
  const categoriesArray = categories.map((category) => {
    return (
    <CategoryListItem name={category}/>
    )
  });

  return (
    <ul>
      {categoriesArray}
    </ul>
  );
}

export default CategoryList;