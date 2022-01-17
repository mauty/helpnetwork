import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import Conversations from '../../components/Messaging/Conversation/';
function Messages() {
	return (
		<>
			<NavBar />
			<Container title='All Messages'></Container>
			<Conversations></Conversations>
		</>
	);
}

//list of conversation
export default Messages;
