import { useRouter } from "next/router"
import { useContext, useRef, useMemo } from "react";
import useCountStars from "../../hooks/useCountStars";
import { UserContext } from "../../pages/_app";
import NavBar from "../NavBar";
import Container from '../ui/Container';
import { useMutation } from "react-query";
import useAxios from "../../hooks/useAxios";
import Link from "next/link";
import ModalNewReview from "./ModalNewReview";
import ProfileReviewItem from "./ProfileReviewItem";

export default function ProfileView({ data }) {
  const scrollRef = useRef(null);
  const router = useRouter();

  const { currentUser } = useContext(UserContext);
  const { stars } = useCountStars(data?.points[0]?._sum?.points_value | 0);

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

  console.log(data);

  return (
    <NavBar currentNav={"profile"}>
      <Container title={`${data.first_name} ${data.last_name}`}>
        <div className="flex flex-col gap-16 mx-2 pb-20">
          <div className='flex justify-between p-2'>
              <p className="w-3/4">{data.bio}</p>
              <div className="flex flex-col px-2 items-center">
                <img className="rounded-full border bg-gray-300 border-gray-600 block" src={data.imgURL} alt="Image" />
                <div className="rating rating-sm mt-2">
                  {
                    data.reviewHearts[0] && (
                      [1, 2, 3, 4, 5].map(num =>
                        <input key={num} type="radio" name="rating-3" readOnly checked={num === useMemo(() => Math.floor(data.reviewHearts[0]._avg.rating), [data])} className="mask mask-heart bg-error"/>
                      )
                    )
                  }
                </div>
                <p onClick={() => {
                  scrollRef.current.scrollIntoView({
                    behavior: "smooth",
                    inline: "start"
                  });
                }}
                className="text-sm link hover:text-blue-600 focus:text-blue-600 cursor-pointer">
                  { (data.reviewsToMe && data.reviewsToMe.length) || "0"} Reviews
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
                        <div key={`ResourceId${resource.id}`} className="alert-sm alert-info rounded m-1">
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
                    <input key={`askldfji${num}`} type="radio" checked={stars === num} className="mask mask-star-2 bg-warning" disabled/>
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
              {
                currentUser && data && currentUser.id !== data.id && data.reviewsToMe.filter(review => review.reviewerId === currentUser.id).length === 0 && (
                  <ModalNewReview currentUser={currentUser} profileId={data.id} router={router} />
                )
              }
            </div>
            <div className="flex flex-col">
              {
                data && data.reviewsToMe.map(review =>
                  <ProfileReviewItem key={review.id} data={review}/>
                )
              }
              {
                data.reviewsToMe.length === 0 && (
                  <p className="px-2 text-md">no reviews found</p>
                )
              }
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