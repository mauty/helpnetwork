const MessageListItem = (props) => {
  const { body, time} = props;
  
//function to detect which user



  return (
    <>
    <div className="rounded-full bg-blue-900 text-white p-2 border border-indigo-600 ">
        {body}
    </div>
    <div>
        {time}
    </div>
    </>
  );
}



export default MessageListItem;