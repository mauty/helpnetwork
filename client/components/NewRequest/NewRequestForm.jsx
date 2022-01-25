import { useEffect, useState } from "react";
import { useContext } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery, useMutation } from 'react-query';
import { useRouter } from "next/router";
import Geocode from "react-geocode";
import { useForm } from "react-hook-form";


import { FormContext } from "../../contexts/FormContext";
import { UserContext } from "../../pages/_app";


import CategoryList from "./CategoryList";
import ResourceList from "./ResourceList";
import LocationChooser from "./LocationChooser";
import TimeChooser from "./TimeChooser";
import FormDetails from "./FormDetails";
import { User } from "react-feather";


const NewRequestForm = (props) => {
  const { } = props;
  
  const { state, setState } = useContext(FormContext)
  const { currentUser } = useContext(UserContext);
  const [ submitDisabled, setSubmitDisabled ] = useState(true)

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

  

  // useEffect(() => {
  //   register()
  // }, [register])


  const handleCreate = async (data) => {

  };

  const getCoordsFromPostal = (fromForm) => {
    let lat = 0;
    let lng = 0;
    Geocode.fromAddress(fromForm)
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

	const mutation = useMutation((newHelp) =>
		useAxios({ url: `/request/`, method: 'post', params: requestPayload }),
	);



  const onSubmit = (data) => {
    // setSubmitting(true)
    // handleCreate(data)
    getCoordsFromPostal(state.location.postalCode)
    // .then(console.log('requestPayloadBeforeSubmit>>>', requestPayload))
    console.log('datafrom onsubmit', data)
    console.log('requestPayloadBeforeSubmit>>>', requestPayload)
    // event.preventDefault()
    mutation.mutate(
      { requestPayload },
      {
      onSuccess: (data) => {
        router.push(`/requests/${data.id}`);
      },
    },);
    // useAxios({ url: `/request`, method: 'post', params: requestPayload })
    // .then(router.push('/requests/confirm'))
  };

  const requestedResourcesArray = Object.keys(state.resources).map(key => parseInt(key))
  console.log('requestedResourcesArray>>',requestedResourcesArray)

  const calculatePointValue = () => {
    const basePoints = 50
    const resourcePoints = requestedResourcesArray.length * 10
    let timePoints = 0
    if (state.timeSensitive === true) {
      timePoints = 30
    } else {
      timePoints = 0
    }    
    const totalPoints = basePoints + resourcePoints + timePoints
    console.log('totalPoints', totalPoints)
    return totalPoints
  }

  useEffect(() => {
      const awardedPoints = calculatePointValue()
      console.log('awardedPoints>>>', awardedPoints)
      setState((prevState) => ({...prevState, pointsValue: awardedPoints}))
  }, [state.resources, state.timeSensitive])

  useEffect(() => {
    console.log('state.location.lat', state.location.lat)
    if (state.location.lat === 0 || state.location.lat === undefined) {
      setSubmitDisabled(true)
    } else if (state.categoryId === 0 ) {
      setSubmitDisabled(true)
    } else if (state.location.postalCode && state.location.postalCode.length < 6 ) {
      setSubmitDisabled(true)
    } else {
      setSubmitDisabled(false)
    }
  },[state.location.lat, state.location.long])


  const requestPayload = {
    request_details: state.details,
    lat: state.location.lat,
    long: state.location.long,
    postal_code: state.location.postalCode,
    category_id: state.categoryId,
    time_sensitive: state.timeSensitive,
    start_time: `${state.date} ${state.startTime}:00`,
    end_time: '0000-00-00 00:00:00',
    points_value: state.pointsValue,
    requester_id: currentUser?.id, // TO DO get user.id from auth context
    requested_resources: requestedResourcesArray
  };

  console.log('requestPayload line 136>>>>', requestPayload)

  // REACT-HOOK-FORM CODE
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();


  return (
    
      <div id="new-request-form">
        {/* <form className=""  autoComplete="off"> */}
          <h2 className="text-2xl font-extrabold font-sans my-4">What kind of help do you need?</h2>
          {categoryData && <CategoryList categoryData={categoryData} register={register} errors={errors} />}
          <FormDetails register={register} errors={errors}/>
          {resourceData && <ResourceList resourceData={resourceData}/>}
          <LocationChooser />
          <TimeChooser register={register} errors={errors} />
          <div className="flex justify-center">
            <button className="btn btn-wide btn-md btn-primary m-4"
              type="submit" 
              onClick={handleSubmit(onSubmit)}
              disabled={submitDisabled}
            >Create Help Request</button>
          </div>
        {/* </form> */}
      </div>
    
    
  );
}

export default NewRequestForm;