import { useContext } from "react";
import { FormContext } from "../../contexts/FormContext";
import CategoryListItem from "./CategoryListItem";
import clsx from "clsx";

const CategoryList = (props) => {
  const { categoryData } = props;
  const {state, setState} = useContext(FormContext)
  
  const clickHandler = (id) => {
    setState((prev) => ({...prev, categoryId: id, resources: {}}));
  }

  const categoriesArray = categoryData.map((category) => {
    return (
      <li key={category.id} className="mb-1 w-full">
        <button 
          className={clsx("btn btn-sm w-full text-left justify-start", {"btn-primary": category.id === state.categoryId})} 
          onClick={() => clickHandler(category.id)} 
        >
          <img src={category.image} />
          <div className="ml-4">
            {category.name}
          </div>
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