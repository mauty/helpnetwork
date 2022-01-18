import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import useAxios from "../../hooks/useAxios";

import Container from "../ui/Container";
import NavBar from "../NavBar";
import CategoryList from "./CategoryList";
import ResourceList from "./ResourceList";
import LocationChooser from "./LocationChooser";
import TimeChooser from "./TimeChooser";
import Stepper from "./Stepper";


const NewRequestForm = (props) => {
  const { } = props;
  
  const {isLoading, isError, data} = useQuery('categories', () => {
    useAxios({ url: '/categories', method: "get"})
  })
  console.log('data from categories>>>>>', data)
  // const getCategories = () => {
  //   const categoryData = data
  // return categoryData; 
  // };

  // getCategories()

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {}
  });

  useEffect(() => {
    register()
  }, [register])

  const [state, setState] = useState({
    categoryId: 0,
    details: '',
    resourceSelected: 0
  })

  const handleCreate = async (data) => {

  };

  const onSubmit = (data) => {
    // setSubmitting(true)
    // handleCreate(data)
  };

  return (
    <div className="mb-auto">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-xl font-bold">What kind of help do you need?</h2>
        <CategoryList />
        <div className="mx">
          <div className='flex flex-col p-2'>
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea className="textarea h-24 textarea-bordered"></textarea>
          </div>
        </div>
        <ResourceList />
        <LocationChooser />
        <TimeChooser />
        <div className="flex justify-center">
          <button className="btn btn-wide btn-md btn-primary m-4">Create Help Request</button>
        </div>
      </form>
    </div>
  );
}

export default NewRequestForm;