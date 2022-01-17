import NavBar from '../../components/NavBar';
import Container from '../../components/ui/Container';
import ConversationList from '../../components/Messaging/ConversationList';
function Messages() {
	return (
		<>
			<NavBar />
			<Container title='All Messages'></Container>
			<ConversationList></ConversationList>
		</>
	);
}

//list of conversation
export default Messages;
