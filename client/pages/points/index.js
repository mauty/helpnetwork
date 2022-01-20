import { useQuery } from 'react-query';
import useAxios from '../../hooks/useAxios';
import Mark from '../../components/Map/Mark';

import Map from '../../components/Map';
import Container from '../../components/ui/Container';
import ErrorMessage from '../../components/ui/ErrorMessage';
import Shimmer from '../../components/ui/Shimmer';
import useViewport from '../../hooks/useViewport';
import ListItem from '../../components/Points/ListItem';


export default function Home() {
  const { viewport, copyViewport, setViewport, isViewportLoading } = useViewport();
  const {isLoading, isError, data} = useQuery(['points', copyViewport], () => useAxios({ url: '/points', method: "get", params: { long: viewport.longitude, lat: viewport.latitude } }));

  return (
    <>
      <Container size='full'>
        <Map setViewport={setViewport} viewport={viewport}>
          { data && data.map((request, index) =>
            <Mark key={request.id} longitude={request.long} latitude={request.lat} index={index + 1} />
          ) }
        </Map>

        { isError && <ErrorMessage title="Error" error="Something unexpected... Try again"/> }
        { (isLoading || isViewportLoading) ? (<Shimmer />) : (
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                <ListItem data={null}/>
                <ListItem data={null}/>
                <ListItem data={null}/>
                <ListItem data={null}/>
              </tbody>
            </table>
          </div>
        ) }
      </Container>
    </>
  )
}
