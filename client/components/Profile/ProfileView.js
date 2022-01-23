import { useRouter } from "next/router"
import { useContext, useRef } from "react";
import useCountStars from "../../hooks/useCountStars";
import { UserContext } from "../../pages/_app";
import NavBar from "../NavBar";
import Container from '../ui/Container';
import { useMutation } from "react-query";
import useAxios from "../../hooks/useAxios";
import Link from "next/link";
import ModalNewReview from "./ModalNewReview";

export default function ProfileView({ data }) {
  const { currentUser } = useContext(UserContext);
  const router = useRouter();
  const { stars } = useCountStars(data?.points[0]?._sum?.points_value | 0);
  const scrollRef = useRef(null);

  const mutation = useMutation((newHelp) =>
    useAxios({ url: `/conversations/new`, method: 'post', params: newHelp }),
  );

  function handleContactPerson() {
    mutation.mutate({ helper_id: currentUser.id, requester_id: data.id }, {
      onSuccess: (data) => {
        router.push(`/messages/${data.id}`);
      }
    })
  }

  return (
    <NavBar currentNav={"profile"}>
      <Container title={`${data.first_name} ${data.last_name}`}>
        <div className="flex flex-col gap-16 mx-2 pb-20">
          <div className='flex justify-between p-2'>
              <p className="w-3/4">{data.bio}</p>
              <div className="flex flex-col px-2 items-center gap-2">
                <img className="rounded-full border bg-gray-300 border-gray-600 block" src={data.imgURL} alt="Image" />
                <div class="rating rating-sm">
                  <input type="radio" name="rating-3" class="mask mask-heart bg-error"/>
                  <input type="radio" name="rating-3" checked="checked" class="mask mask-heart bg-error"/>
                  <input type="radio" name="rating-3" class="mask mask-heart bg-error"/>
                  <input type="radio" name="rating-3" class="mask mask-heart bg-error"/>
                  <input type="radio" name="rating-3" class="mask mask-heart bg-error"/>
                </div>
                <p onClick={() => {
                  scrollRef.current.scrollIntoView({
                    behavior: "smooth",
                    inline: "start"
                  });
                }}
                className="text-xs link hover:text-blue-600 focus:text-blue-600 cursor-pointer">
                  402 reviews
                </p>
              </div>
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
          <div ref={scrollRef} className="mb-10">
            <div className="flex gap-2 items-center">
              <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 p-2">
                Reviews
              </h1>
              <ModalNewReview />
            </div>
            <div className="flex flex-col">
              <div className="flex my-2 shadow-md py-4 px-1">
                <div className="avatar">
                <div className="bg-neutral-focus text-neutral-content rounded-lg w-14 h-14 m-2">
                  <img src={data.imgURL}></img>
                </div>
                </div>
                <div className="flex flex-col justify-center w-full">
                    <div className="flex justify-between">
                      <label className='text-md font-semibold'>Bob Johnson</label>
                      <p className="font-medium text-xs text-gray-600">4 years ago</p>
                    </div>
                    <div className="rating rating-xs px-2">
                      {
                        [1, 2, 3, 4, 5].map(num => (
                          <input key={num} type="radio" checked={stars === num} className="mask mask-heart bg-error" disabled/>
                        ))
                      }
                    </div>
                    <p className='text-xs break-all pt-2 w-5/6'>asdflkjaajskdlfjjjjjjjjffffffflaksjdfklasjflkjasdflkasjlkfaflkasjdflkjasjdfljasdflasjfjalsdffsdfffffffffffffffffsdfjsalkdjfklasdfdsdfjlkasdjfklasdflskfjlasdfasdkf</p>
                </div>
              </div>
            </div>
          </div>
          {
            (router.asPath !== '/profile' && currentUser && currentUser.id !== data.id) ? (
              <div className='flex justify-center'>
                <button onClick={handleContactPerson} className="btn btn-primary">Contact Helper</button>
              </div>
            ): (
              <>
                <Link href={'/profile/edit'}>
                  <button className="btn btn-sm btn-primary">Edit Profile</button>
                </Link>
                <Link href={'/auth/logout'}>
                  <button className="btn btn-sm btn-warning">Logout</button>
                </Link>
              </>
            )
          }
        </div>
    </Container>
    </NavBar>
  )
}