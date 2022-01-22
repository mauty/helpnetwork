import { useRouter } from "next/router"
import useCountStars from "../../hooks/useCountStars";
import NavBar from "../NavBar";
import Container from '../ui/Container';

export default function ProfileView({ data }) {
  const router = useRouter();
  const { stars } = useCountStars(data?.points[0]?._sum?.points_value | 0);
  console.log(data);

  return (
    <NavBar currentNav={"profile"}>
      <Container title={`${data.first_name} ${data.last_name}`}>
        <div className="flex flex-col gap-6 mx-2">
          <div className='flex justify-between p-2'>
              <p>{data.bio}</p>
              <img className="rounded-full border bg-gray-300 border-gray-600 h-32 w-32 block" src={data.imgURL} alt="Image" />
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
          <div className="mb-4">
            <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
              Points Earned
            </h1>
            <div className='flex gap-2'>
              <div className="rating rating-md px-2">
                {
                  [1, 2, 3, 4, 5].map(num => (
                    <input key={num} type="radio" checked={stars === num} className="mask mask-star-2 bg-warning" disabled/>
                  ))
                }
              </div>
              <label className='font-medium text-gray-800 text-xl'>{data.points[0] ? data.points[0]._sum.points_value : 0}</label>
            </div>
          </div>
          {
            data.Helper && data.Helper.length > 0 && (
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
                  Completed Requests
                </h1>
                {
                  data.Helper.map(request =>
                    <div key={request.id} className="alert-sm alert-success rounded m-1">
                        <div className="flex flex-col">
                          <label className='text-lg font-semibold'>{request.category.name}</label>
                          <label className='text-xs'>{request.requester.first_name} {request.requester.last_name}</label>
                          <label className='text-md mt-2'>Points received: <span className="text-lg text-yellow-500 font-semibold">{request.points_value}</span></label>
                        </div>
                    </div>
                  )
                }
              </div>
            )
          }
          {
            router.asPath !== '/profile' && (
              <div className='flex justify-center'>
                <button className="btn btn-primary">Contact Helper</button>
              </div>
            )
          }
        </div>
    </Container>
    </NavBar>
  )
}