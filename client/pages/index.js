import { useState } from 'react';
import { useQuery } from 'react-query';
import useAxios from '../hooks/useAxios';
import Mark from '../components/Map/Mark';
import { AlignCenter, Filter } from 'react-feather';

import NavBar from  '../components/NavBar';
import Map from '../components/Map';
import Container from '../components/ui/Container';
import ErrorMessage from '../components/ui/ErrorMessage';
import Shimmer from '../components/ui/Shimmer';
import ListItem from '../components/Home/ListItem';
import useViewport from '../hooks/useViewport';
import MapCollapseTab from '../components/Map/MapCollapseTab';
import clsx from 'clsx';


export default function Home() {
  const [ currentCategory, setCategory ] = useState(null);
  const [ currentResources, setResources ] = useState([]);
  const { viewport, copyViewport, setViewport, isViewportLoading } = useViewport();

  const { isLoading, isError, data } = useQuery(['requests', copyViewport], () => useAxios({ url: '/requests', method: "get", params: { long: viewport.longitude, lat: viewport.latitude } }));
  const { data: categoriesData } = useQuery('categories', () => useAxios({ url: '/categories', method: "get"}));
  const { data: resourcesData } = useQuery('resources', () => useAxios({ url: '/resources', method: "get"}));

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

                <MapCollapseTab name="Time"><div>asdf</div></MapCollapseTab>
              </ul>
            </div>
            <div className="dropdown">
              <button className="btn btn-sm btn-ghost px-1"><AlignCenter/></button>
              <ul tabIndex="0" className="p-1 bg-opacity-95 shadow menu dropdown-content bg-base-100 rounded-box w-52 my-1">
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
          { data && data.map((request, index) =>
            <Mark key={request.id} longitude={request.long} latitude={request.lat} index={index + 1} />
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
                category={request.category_name}
                name={`${request.first_name} ${request.last_name}`}
                index={index + 1}
                createdAt={request.createdAt}
                time={{ isSensitive: request.time_sensitive, start_time: request.start_time }}/>
              )
            )}
          </ul>
      </div>
      </Container>
    </>
  )
}
