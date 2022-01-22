import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import CategoryListItem from "./CategoryListItem";
import clsx from "clsx";

const CategoryList = (props) => {
  const { categoryData } = props;
  const {state, setState} = useContext(FormContext)
  
  const clickHandler = (id) => {
    // setState((prev) => ({...prev, categoryId: id}));
  }

  const categoriesArray = categoryData.map((category) => {
    return (
      <li key={category.id} className="mb-1">
        <button 
          className={clsx("btn btn-sm", {"btn-primary": category.id === state.categoryId})} 
          onClick={() => clickHandler(category.id)} 
        >
          {category.name}
        </button>
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