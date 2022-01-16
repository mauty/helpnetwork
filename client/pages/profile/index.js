import NavBar from "../../components/NavBar"
import { useEffect, useState } from 'react';
import Container from '../../components/ui/Container';

function Profile(data = null) {
  const [profileData, setProfileData] = useState(data);

  useEffect(() => {
    if(data === null) {
      // Query your profile here from the server
    }
  }, [])

  return (
    <Container title='John Smith'>
      <div className="flex flex-col gap-6 mx-2">
        <div className='flex justify-between p-2'>
            <p>Lorem ipsum dolor sit amet,
              consec tetur adipiscing elit. Nam condimentum
              tempus diam, ultricies sollicitudin erat facilisis eget.
              Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula,
              vitae pharetra quam. Nullam at ligula sed metu.Lorem ipsum dolor sit amet,
              consec tetur adipiscing elit. Nam condimentum
              tempus diam, ultricies sollicitudin erat facilisis eget.
              Vestibulum rhoncus dui vel eros laoreet consectetur. Vivamus eget elementum ligula,
              vitae pharetra quam. Nullam at ligula sed metu.
            </p>
            <img className="rounded-full border bg-gray-300 border-gray-600 h-32 w-32 block" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Image" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
          Resources
          </h1>
          <div className="flex flex-col sm:w-96">
            <div class="alert-sm alert-info rounded m-1">
              <div class="flex-1">
                <label className='text-sm font-semibold'>SNOW BLOWER</label>
              </div>
            </div>
            <div class="alert-sm alert-info rounded m-1">
              <div class="flex-1">
                <label className='text-sm font-semibold'>LADDER</label>
              </div>
            </div>
            <div class="alert-sm alert-info rounded m-1">
              <div class="flex-1">
                <label className='text-sm font-semibold'>LEAF BLOWER</label>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
            Points Earned
          </h1>
          <div className='flex gap-2'>
            <div class="rating rating-md">
              <input disabled class="mask mask-star-2 bg-warning"/>
              <input disabled class="mask mask-star-2 bg-warning"/>
              <input disabled class="mask mask-star-2 bg-warning"/>
              <input disabled class="mask mask-star-2 bg-warning"/>
              <input disabled class="mask mask-star-2 bg-warning"/>
            </div>
            <label className='font-medium text-gray-800 text-lg'>545</label>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
            Completed Requests
          </h1>
          <div class="alert-sm alert-success rounded m-1">
              <div class="flex flex-col">
                <label className='text-sm font-semibold'>Gutter Cleaning</label>
                <label className='text-xs'>Betsy Johnson</label>
              </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <button class="btn btn-primary">Contact Helper</button>
        </div>
      </div>
    </Container>
    <NavBar />
  )
  
}

export default Profile