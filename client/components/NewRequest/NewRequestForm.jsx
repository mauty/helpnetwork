import { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import useAxios from "../../hooks/useAxios";

import { FormContext } from "../../contexts/FormContext";

import Container from "../ui/Container";
import NavBar from "../NavBar";
import CategoryList from "./CategoryList";
import ResourceList from "./ResourceList";
import LocationChooser from "./LocationChooser";
import TimeChooser from "./TimeChooser";
import Stepper from "./Stepper";


const NewRequestForm = (props) => {
  const { } = props;
  
  const { state, setState } = useContext(FormContext)

  console.log('state from useContext', state)

  // State Needed for Each Component
  // - open/closed
  // - empty/data validated
  // - 

  const getCategories = () => {
    const {isLoading, isError, data} = useQuery('categories', () => useAxios({ url: '/categories', method: "get"}))
    const categoryData = data
    // console.log('categoryData>>>>>', categoryData)
    return categoryData;
  };

  const categoryData = getCategories()

  // Get Resources and build object by ids
  // 


  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {}
  });

  useEffect(() => {
    console.log('state from inside of useEffect', state)
  }, [state])

  // useEffect(() => {
  //   register()
  // }, [register])


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
          {categoryData && <CategoryList categoryData={categoryData} />}
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
            <button className="btn btn-wide btn-md btn-primary m-4" type="submit" >Create Help Request</button>
          </div>
        </form>
      </div>
    
    
  );
}

export default NewRequestForm;