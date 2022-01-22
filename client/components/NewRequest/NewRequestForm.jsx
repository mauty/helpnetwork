import { useEffect, useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../hooks/useAxios";
import { useQuery, useMutation } from 'react-query';
import { useRouter } from "next/router";
import Geocode from "react-geocode";



import { FormContext } from "../../contexts/FormContext";

import Container from "../ui/Container";
import NavBar from "../NavBar";
import CategoryList from "./CategoryList";
import ResourceList from "./ResourceList";
import LocationChooser from "./LocationChooser";
import TimeChooser from "./TimeChooser";
import Stepper from "./Stepper";
import FormDetails from "./FormDetails";
import { User } from "react-feather";


const NewRequestForm = (props) => {
  const { } = props;
  
  const { state, setState } = useContext(FormContext)

  const router = useRouter()

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
  // const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
  //   defaultValues: {}
  // });

  // useEffect(() => {
  //   register()
  // }, [register])


  const handleCreate = async (data) => {

  };

  const getCoordsFromPostal = (fromForm) => {
    let lat = 0;
    let lng = 0;
    return Geocode.fromAddress(fromForm)
    .then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log('geocode>>>>',lat, lng);
        setState((prevState) => ({...prevState, location: {...prevState.location, lat: lat, long: lng}}))
        console.log('state from geocode then>>>', state);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  const onSubmit = (event) => {
    // setSubmitting(true)
    // handleCreate(data)
    getCoordsFromPostal(state.location.postalCode)
    // .then(console.log('requestPayloadBeforeSubmit>>>', requestPayload))
    console.log('requestPayloadBeforeSubmit>>>', requestPayload)
    event.preventDefault()
    // useAxios({ url: `/request`, method: 'post', params: requestPayload })
    // .then(router.push('/'))
  };

  const requestedResourcesArray = Object.keys(state.resources).map(key => parseInt(key))
  console.log('requestedResourcesArray>>',requestedResourcesArray)

  const calculatePointValue = () => {
    let basePoints = 50
    const resourcePoints = requestedResourcesArray.length * 10
    let timePoints = 0
    if (state.time_sensitive === true) {
      timePoints += 30
    }
    const awardedPoints = basePoints + resourcePoints + timePoints
    console.log('awardedPoints', awardedPoints)
    return awardedPoints
  }

  useEffect(() => {
      const awardedPoints = calculatePointValue()
      // setState((prevState) => ({...prevState, pointsValue: awardedPoints}))
  }, [state])


  const requestPayload = {
    request_details: state.details,
    lat: state.location.lat,
    long: state.location.long,
    postal_code: state.location.postalCode,
    category_id: state.categoryId,
    time_sensitive: state.timeSensitive,
    start_time: `${state.date} ${state.startTime}:00`,
    end_time: '0000-00-00 00:00:00',
    points_value: 50,
    requester_id: 1, // TO DO get user.id from auth context
    requested_resources: requestedResourcesArray
  };

  // console.log('requestPayload', requestPayload)

  return (
    
      <div className="mb-auto">
        {/* <form className=""  autoComplete="off"> */}
          <h2 className="text-xl font-bold">What kind of help do you need?</h2>
          {categoryData && <CategoryList categoryData={categoryData} />}
          <FormDetails />
          {resourceData && <ResourceList resourceData={resourceData}/>}
          <LocationChooser />
          <TimeChooser />
          <div className="flex justify-center">
            <button className="btn btn-wide btn-md btn-primary m-4"
              type="submit" 
              onClick={onSubmit} >Create Help Request</button>
          </div>
        {/* </form> */}
      </div>
    
    
  );
}

export default NewRequestForm;