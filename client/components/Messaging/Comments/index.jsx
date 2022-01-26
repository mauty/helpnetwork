import CommentListItem from "./CommentListItem";
import { useContext } from "react";
import { UserContext } from "../../../pages/_app";

const CommentList = ({ commentsData }) => {
  const { currentUser } = useContext(UserContext);

  console.log(commentsData);
  const listOfComments = commentsData?.map((comment) => {
    return (
      <div className="mb-20 mt-4">
        <CommentListItem
          key={comment.id}
          personId={comment.person.id}
          avatar={comment.person.imgURL}
          body={comment.body}
          first_name={comment.person.first_name}
          last_name={comment.person.last_name}
          timestamp={comment.timestamp}
          currentUser={currentUser}
        />
      </div>
    );
  });

  return (
    <>
      <div className="mx-auto max-w-screen-sm h-auto overflow-y-auto">
        <h3 className="mb-2 text-lg font-semibold text-gray-900">Comments</h3>
        <div className="space-y-4 flex flex-col-reverse">
          {commentsData && listOfComments}
        </div>
      </div>
    </>
  );
};

export default CommentList;
