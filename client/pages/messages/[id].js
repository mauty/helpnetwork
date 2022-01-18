import Container from '../../components/ui/Container';
import Messages from '../../components/Messaging/Messages';
import Compose from '../../components/Messaging/Messages/Compose';

function Conversation() {
	return (
		<div className='flex flex-col justify-between'>
			<Container title='Message'></Container>
			<Messages></Messages>
		</div>
	);
}
//help request header
//container for conversation
//send messge button
export default Conversation;
