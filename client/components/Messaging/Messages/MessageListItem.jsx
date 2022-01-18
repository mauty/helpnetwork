const MessageListItem = (message, isItMine) => {
  

  const message = (isItMine) => {
  if(isItMine) {
    <div className="rounded-md justify-right bg: green">
      {message}
    </div>
  } else
    <div className="rounded-md justify-left">
      {message}
    </div>
  }

  const 
  return (
    {message}
  );


}



export default MessageListItem;