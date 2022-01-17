import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import useAxios from '../hooks/useAxios';
import Mark from '../components/Map/Mark';

import NavBar from  '../components/NavBar';
import Map from '../components/Map';
import Container from '../components/ui/Container';
import ErrorMessage from '../components/ui/ErrorMessage';
import Shimmer from '../components/ui/Shimmer';
import ListItem from '../components/Home/ListItem';
import useViewport from '../hooks/useViewport';


export default function Home() {
  const { viewport, copyViewport, setViewport } = useViewport();
  const {isLoading, isError, data} = useQuery(['requests', copyViewport], () => useAxios({ url: '/requests', method: "get", params: { long: viewport.longitude, lat: viewport.latitude } }));

  return (
    <>
      <Container size='full'>
        <Map setViewport={setViewport} viewport={viewport}>
          <div className='flex justify-start gap-2 m-2'>
            <div className="dropdown">
              <button className="btn btn-sm">Filter</button>
              <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 my-1">
                <li>
                  <a>Category</a>
                </li>
                <li>
                  <a>Time</a>
                </li>
                <li>
                  <a>Resource</a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-sm">Sort</button>
              <ul tabIndex="0" className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 my-1">
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
          </div>
          { data && data.map((request) =>
            <Mark key={request.id} longitude={request.long} latitude={request.lat} />
          ) }
        </Map>
        <div className='flex w-full h-64 shadow overflow-y-scroll pt-2'>
          <ul className="p-4 pt-0 divide-y w-full">

            { isError && <ErrorMessage title="Error" error="Something unexpected... Try again"/> }
            { isLoading && <Shimmer /> }
            { data && data.map(request =>
              <ListItem key={request.id} details={request.request_details}/>
            )}
          </ul>
      </div>
      </Container>
    </>
  )
}
