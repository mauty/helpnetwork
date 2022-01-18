import Link from 'next/link';
import MessageList from './MessageList';
import Compose from './Compose';
const Messages = (props) => {
  const { } = props;
  
  return (
    <div>
      <MessageList></MessageList>
      <Compose></Compose>
    </div>
  );
}

export default Messages;