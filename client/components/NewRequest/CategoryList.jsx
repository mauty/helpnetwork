import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import CategoryListItem from "./CategoryListItem";

const CategoryList = (props) => {
  const { categoryData } = props;
  const {state, setState} = useContext(FormContext)
  
  const clickHandler = (id) => {
    setState((prev) => ({...prev, categoryId: id}));
  }

  console.log('categoryData from Category List Component>>>>>', categoryData)
  
  // const categories = [
  //   "Groceries",
  //   "Pharmacy Items",
  //   "Pet Care",
  //   "Cleaning",
  //   "Home Maintenance",
  //   "Meal Preparation",
  //   "Tech Support",
  //   "Gardening",
  //   "Exercise",
  //   "Moving Furniture",
  //   "Mental Wellness",
  //   "House Sitting"
  // ];

  const categoriesArray = categoryData.map((category) => {
    return (
      <li key={category.id} className="mb-1">
        <button className="btn btn-sm" onClick={() => clickHandler(category.id)} >{category.name}</button>
      </li>
    // <CategoryListItem key={category.id} name={category.name}/>
    )
  });

  return (
    <ul>
      {categoriesArray}
    </ul>
  );
}

export default CategoryList;