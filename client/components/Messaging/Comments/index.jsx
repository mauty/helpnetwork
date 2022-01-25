import CommentListItem from "./CommentListItem";
import { useContext } from "react";
import { UserContext } from "../../../pages/_app";

const CommentList = ( {commentsData}) => {
  const { currentUser } = useContext(UserContext);

	const listOfComments = commentsData?.map((comment, index) => {
    return (
      <CommentListItem
        key={index}
        avatar={comment.person.imgURL}
				body={comment.body}
        first_name={comment.person.first_name}
        last_name={comment.person.last_name}
        timestamp={comment.timestamp}
        currentUser={currentUser}
      />
    );
  });





return (
  <><div className='flex mx-auto items-center border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed'>
    {/* comment post */}
  </div><footer className='mx-auto max-w-screen-sm pb-5'>
      <h3 className='mb-4 text-lg font-semibold text-gray-900'>
        Comments
      </h3>
      <div className='space-y-4 flex flex-col-reverse gap-3'>
        {commentsData && listOfComments}
      </div>
    </footer>
		</>

);

  
}
export default CommentList;

