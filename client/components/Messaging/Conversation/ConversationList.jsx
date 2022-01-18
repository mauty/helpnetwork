import ConversationListItem from "./ConversationListItem";


  //call db for list of conversations for current user
  //map conversationListItem
  //sort by timestamp, prepend
  //link a conversation to a specific message
  
  //flow: 
    //Press button to except request
    //create conversation with default first message
    //transition from conversation to mesage page

  //state management to go back and nav bar

  //functions
    //start a new conversation, prepend new conversation to top of stack
    //render conversations
    //transition from conversation page dynamic message page


   
  const { data, error } = useSWR('/api/posts', fetcher)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>
  return (
    <ul> 
      {data.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
   )

   const getConversations ()

conversations = []

function ConversationList(props) {
	const conversations = props.days;
	const listConversations = conversations.map((conversation) => {
		return (
			<ConversationListItem
				key={conversation.id}
				name= "Amir"
        avatar="AA"
        time="12:30"
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
			/>
		);
	});
	return <ul>{listConversations}</ul>;
}

export default ConversationList;