import { useRouter } from "next/router"
import Container from '../ui/Container';

export default function ProfileView({ data }) {
  const router = useRouter();

  console.log(data);

  return (
    <Container title={`${data.first_name} ${data.last_name}`}>
      <div className="flex flex-col gap-6 mx-2">
        <div className='flex justify-between p-2'>
            <p>{data.bio}</p>
            <img className="rounded-full border bg-gray-300 border-gray-600 h-32 w-32 block" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80" alt="Image" />
        </div>
        <div>
          {
            data.personal_resources && data.personal_resources.length > 0 && (
              <>
                <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
                Resources
                </h1>
                <div className="flex flex-col sm:w-96">
                  {
                    data.personal_resources.map(({resource}) => (
                      <div key={resource.id} className="alert-sm alert-info rounded m-1">
                        <div className="flex-1">
                          <label className='text-sm font-semibold'>{resource.name}</label>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </>
            )
          }
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
            Points Earned
          </h1>
          <div className='flex gap-2'>
            <div className="rating rating-md px-2">
              <input type="radio" checked="checked" className="mask mask-star-2 bg-warning" disabled/>
              <input type="radio" className="mask mask-star-2 bg-warning" disabled/>
              <input type="radio" className="mask mask-star-2 bg-warning"disabled/>
              <input type="radio" className="mask mask-star-2 bg-warning" disabled/>
              <input type="radio" className="mask mask-star-2 bg-warning" disabled/>
            </div>
            <label className='font-medium text-gray-800 text-xl'>{data.points}</label>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
            Completed Requests
          </h1>
          <div className="alert-sm alert-success rounded m-1">
              <div className="flex flex-col">
                <label className='text-sm font-semibold'>Gutter Cleaning</label>
                <label className='text-xs'>Betsy Johnson</label>
              </div>
          </div>
        </div>
        {
          router.asPath !== '/profile' && (
            <div className='flex justify-center'>
              <button className="btn btn-primary">Contact Helper</button>
            </div>
          )
        }
      </div>
    </Container>
  )
}