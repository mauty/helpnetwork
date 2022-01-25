import { useState } from 'react';
import { useQuery } from 'react-query';
import Head from 'next/head';
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
import FilterButton from '../components/Home/FilterButton';
import Empty from '../components/ui/Empty';
import DesktopNav from '../components/ui/DesktopNav';


export default function Home() {
  const [ currentCategories, setCurrentCategories ] = useState([]);
  const [ currentResources, setCurrentResources ] = useState([]);
  const [ currentHoverId, setCurrentHoverId ] = useState(-1);

  const [ time, setTime ] = useState({ from: "07:00:00", to: "15:00:00" });
  const [ isTimeFiltering, setIsTimeFiltering ] = useState(false);

  const { viewport, copyViewport, setViewport, isViewportLoading } = useViewport();

  const { isLoading, isError, data } = useQuery(
    ['requests', copyViewport, currentCategories.length, currentResources.length, isTimeFiltering],
    () => useAxios({
      url: '/requests',
      method: "get",
      params: {
        long: viewport.longitude,
        lat: viewport.latitude,
        zoom: viewport.zoom,
        time: isTimeFiltering? time: null,
        categories: currentCategories,
        resources: currentResources } }
  ));

  function handleTimeChange({ target }) {
    const { name, value } = target;
    const currentTime = {...time};

    currentTime[name] = value;
    setTime(currentTime);
  }

  return (
    <>
      <Head>
        <title>helpnetwork | home</title>
      </Head>
      <DesktopNav current={'home'}/>
      <NavBar currentNav={"help"}>
        <Container size='full'>
          <div className='lg:flex lg:flex-row'>
            <Map setViewport={setViewport} viewport={viewport}>
              <div className='flex justify-start gap-2 m-2'>
                <div className="dropdown">
                  <button className="btn btn-sm btn-ghost px-1"><Filter/></button>
                  <ul tabIndex="0" className="p-1 bg-opacity-95 shadow menu dropdown-content bg-base-100 rounded-box w-80 my-1">
                    <MapCollapseTab name="Category">
                      <FilterButton type='categories' currentData={currentCategories} setData={setCurrentCategories}  />
                    </MapCollapseTab>
                    <MapCollapseTab name="Resources">
                      <FilterButton type='resources' currentData={currentResources} setData={setCurrentResources}  />
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
                  id={request.id}
                  isHovered={currentHoverId === request.id}
                  setHover={() => setCurrentHoverId(request.id)}
                  setLeave={() => setCurrentHoverId(-1)}
                  />
              ) }
            </Map>
            <div className='flex flex-col w-full h-72 lg:h-full sm:shadow overflow-y-scroll pt-2'>
              <ul className="p-4 pt-0 divide-y w-full">
                { isError && <ErrorMessage title="Error" error="Something unexpected... Try again"/> }
                { (isLoading || isViewportLoading) ? (<Shimmer />) : (
                  data?.length? (
                  data.map((request, index) =>
                    <ListItem
                    key={request.id}
                    id={request.id}
                    index={index}
                    data={request}
                    isHovered={currentHoverId === request.id}
                    setHover={() => setCurrentHoverId(request.id)}
                    setLeave={() => setCurrentHoverId(-1)}
                    />
                  )) : (<Empty/>)
                )}
              </ul>
            </div>
          </div>
        </Container>
      </NavBar>
    </>
  )
}
