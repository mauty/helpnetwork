import { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import useAxios from "../../hooks/useAxios";
import { useQuery, useMutation } from 'react-query';


import { FormContext } from "../../contexts/FormContext";

import Container from "../ui/Container";
import NavBar from "../NavBar";
import CategoryList from "./CategoryList";
import ResourceList from "./ResourceList";
import LocationChooser from "./LocationChooser";
import TimeChooser from "./TimeChooser";
import Stepper from "./Stepper";
import FormDetails from "./FormDetails";


const NewRequestForm = (props) => {
  const { } = props;
  
  const { state, setState } = useContext(FormContext)

  // State Needed for Each Component
  // - open/closed
  // - empty/data validated

    // Get All Categories and return array of category objects
  const getCategories = () => {
    const {isLoading, isError, data} = useQuery('categories', () => useAxios({ url: '/categories', method: "get"}))
    const categoryData = data
    return categoryData;
  };

  const categoryData = getCategories()

  // Get All Resources and return array of resource objects
  const getAllResources = () => {
    const {isLoading, isError, data} = useQuery('resources', () => useAxios({ url: '/resources', method: "get"}))
    return data;
  };

  const resourceData = getAllResources()

  // REACT-HOOK-FORM CODE
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
    defaultValues: {}
  });

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
        <form className="" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <h2 className="text-xl font-bold">What kind of help do you need?</h2>
          {categoryData && <CategoryList categoryData={categoryData} />}
          <FormDetails />
          {resourceData && <ResourceList resourceData={resourceData}/>}
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