import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import Link from 'next/link';

import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import MarkFace from '../../components/Points/MarkFace';
import Map from '../../components/Map';
import Container from '../../components/ui/Container';
import ErrorMessage from '../../components/ui/ErrorMessage';
import Shimmer from '../../components/ui/Shimmer';
import useViewport from '../../hooks/useViewport';
import ListItem from '../../components/Points/ListItem';

import { UserContext } from '../_app';

export default function Home() {
  useAuth();
  const [ currentHoverId, setCurrentHoverId ] = useState(-1);
  const { currentUser } = useContext(UserContext);
  const { viewport, copyViewport, setViewport, isViewportLoading } = useViewport();
  const {isLoading, isError, data} = useQuery(['points', copyViewport], () => useAxios({ url: '/points', method: "get", params: { long: viewport.longitude, lat: viewport.latitude }}));
  const {data: userData} = useQuery(['profile', copyViewport], () => useAxios({ url: `/profile/${currentUser.id}`, method: "get" }));

  return (
    <>
      <Container size='full'>
        <Map setViewport={setViewport} viewport={viewport}>
          { data && data.map(person =>
            <MarkFace
              key={person.id}
              longitude={person.long}
              latitude={person.lat}
              id={person.id}
              imgUrl={person.imgURL}
              points={person.points}
              isHovered={currentHoverId === person.id}
              />
          ) }
        </Map>

        { isError && <ErrorMessage title="Error" error="Something unexpected... Try again"/> }
        { (isLoading || isViewportLoading) ? (<div className='p-2'><Shimmer /></div>) : (
          <div className="overflow-y-scroll h-96">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Points</th>
                  </tr>
                </thead>
                <tbody>
                {
                  userData && (
                  <tr>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="w-12 h-12 mask mask-squircle">
                            <img
                              src="https://daisyui.com/tailwind-css-component-profile-2@56w.png"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-blue-500">YOU</div>
                          <Link href={`/profile/${userData.id}`}>
                            <span className="text-sm opacity-50 link hover:text-blue-500">
                              View Profile
                            </span>
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="text-orange-600 text-2xl">200</td>
                  </tr>
                  )
                }
                {
                  data && data.map(person =>
                    <ListItem
                    key={person.id}
                    data={person}
                    setHover={() => setCurrentHoverId(person.id)}
                    setLeave={() => setCurrentHoverId(-1)}
                    isHovered={currentHoverId === person.id}
                    />
                  )
                }
                </tbody>
              </table>
          </div>
        ) }
      </Container>
    </>
  )
}
