import { useState } from 'react';
import { useQuery } from 'react-query';
import useAxios from '../hooks/useAxios';
import clsx from 'clsx';

import { Filter } from 'react-feather';

import NavBar from  '../components/NavBar';
import Map from '../components/Map';
import Container from '../components/ui/Container';
import ErrorMessage from '../components/ui/ErrorMessage';
import Shimmer from '../components/ui/Shimmer';
import ListItem from '../components/Home/ListItem';
import useViewport from '../hooks/useViewport';
import MapCollapseTab from '../components/Home/MapCollapseTab';
import Mark from '../components/Map/Mark';
import TimeInput from '../components/Home/TimeInput';


export default function Home() {
  const [ currentCategory, setCategory ] = useState(null);
  const [ currentResources, setResources ] = useState([]);

  const [ time, setTime ] = useState({ from: "07:00:00", to: "15:00:00" });
  const [ isTimeFiltering, setIsTimeFiltering ] = useState(false);

  const { viewport, copyViewport, setViewport, isViewportLoading } = useViewport();

  const { isLoading, isError, data } = useQuery(
    ['requests', copyViewport, currentCategory, currentResources.length, isTimeFiltering],
    () => useAxios({
      url: '/requests',
      method: "get",
      params: {
        long: viewport.longitude,
        lat: viewport.latitude,
        time: isTimeFiltering? time: null,
        category_id: currentCategory,
        resources: currentResources } }
  ));

  console.log(data);

  const { data: categoriesData } = useQuery('categories', () => useAxios({ url: '/categories', method: "get"}));
  const { data: resourcesData } = useQuery('resources', () => useAxios({ url: '/resources', method: "get"}));

  function handleTimeChange(event) {
    setTime(prevState => prevState[event.target.name] = event.target.value);
  }

  return (
    <>
      <Container size='full'>
        <Map setViewport={setViewport} viewport={viewport}>
          <div className='flex justify-start gap-2 m-2'>
            <div className="dropdown">
              <button className="btn btn-sm btn-ghost px-1"><Filter/></button>
              <ul tabIndex="0" className="p-1 bg-opacity-95 shadow menu dropdown-content bg-base-100 rounded-box w-80 my-1">
                <MapCollapseTab name="Category">
                {
                  categoriesData &&
                    categoriesData.map(category =>
                      <button
                        key={category.id}
                        className={clsx('btn btn-xs btn-primary m-1', category.id === currentCategory && ("btn-error"))}
                        onClick={
                          () => setCategory(prevState => {
                            if(prevState === category.id) return null;
                            return category.id;
                          })
                        }>
                        {category.name}
                      </button>)
                }
                </MapCollapseTab>
                <MapCollapseTab name="Resources">
                {
                  resourcesData &&
                    resourcesData.map(resource =>
                      <button
                        key={resource.id}
                        className={clsx('btn btn-xs btn-primary m-1', currentResources.includes(resource.id) && ("btn-error"))}
                        onClick={
                          () => setResources(prevState => {
                            if(prevState.includes(resource.id)) {
                              return prevState.filter(id => resource.id !== id)
                            }

                            return [...prevState, resource.id];
                          })
                        }>
                        {resource.name}
                      </button>)
                }
                </MapCollapseTab>

                <MapCollapseTab name="Time">
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <TimeInput name="from" value={time.from} setValue={handleTimeChange}/>
                      <TimeInput name="to" value={time.to} setValue={handleTimeChange}/>
                    </div>
                    <button
                      onClick={() => setIsTimeFiltering(prevState => !prevState)}
                      className={clsx('btn btn-primary btn-sm', isTimeFiltering && 'btn-error')}>
                        <Filter className='w-4 h-4 mr-2'/>
                        { isTimeFiltering ? "Remove time filter" : "Filter Time" }
                    </button>
                  </div>
              </MapCollapseTab>
              </ul>
            </div>
          </div>
          { data && data.map((request, index) =>
            <Mark
              key={request.id}
              longitude={request.long}
              latitude={request.lat}
              index={index + 1}
              description={request.request_details}
              id={request.id} />
          ) }
        </Map>
        <div className='flex w-full h-64 shadow overflow-y-scroll pt-2'>
          <ul className="p-4 pt-0 divide-y w-full">

            { isError && <ErrorMessage title="Error" error="Something unexpected... Try again"/> }
            { (isLoading || isViewportLoading) ? (<Shimmer />) : (
              data && data.map((request, index) =>
                <ListItem
                key={request.id}
                id={request.id}
                index={index}
                data={request}
                />
              )
            )}
          </ul>
      </div>
      </Container>
    </>
  )
}
