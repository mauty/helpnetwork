import { useQuery } from 'react-query';
import useAxios from '../../../hooks/useAxios';

//text box div
//send button

//create message with body
//send button that posts to DB

const Compose = (props) => {
  const { } = props;
  
  return (
    <div className="fixed w-full flex justify-between bg-green-100 bottom: 0px;">
      <textarea
        className="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
        rows="1"
        placeholder="Message..."
      ></textarea>
      <button className="m-2 outline: none;">        
      </button>
    </div>
  );
}


export default Compose;