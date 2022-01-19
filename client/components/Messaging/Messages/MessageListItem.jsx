const MessageListItem = (props) => {
  const { body, time} = props;
  
//function to detect which user



  return (
    <>
    <div className="w-300 mx-50 rounded-full bg-blue-900 dark:bg-slate-900 border border-indigo-600 ">
        {body}
    </div>
    <div>
        {time}
    </div>
    </>
  );
}



export default MessageListItem;