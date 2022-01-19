import { useQuery, useMutation } from "react-query";
import useAxios from "../../../hooks/useAxios";
import { useEffect, useState } from "react";
//text box div
//send button

//create message with body
//send button that posts to DB

const Compose = (props) => {
  const { reload } = props;

  const [text, setText] = useState("");

  const mutation = useMutation((newMessage) =>
    useAxios({ url: `/conversations/1`, method: "post", params: newMessage })
  );

  function handleSubmit() {
    mutation.mutate({ body: text });
    setText("");
    reload();
  }

  // mutation.mutate({ id: "adfadsf" });
  return (
    <div className="w-full flex justify-between">
      <textarea
        className="flex-grow focus:bg-white m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none"
        rows="1"
        placeholder="Message..."
        onChange={(event) => setText(event.target.value)}
        value={text}
      ></textarea>
      <button className="p-5" onClick={() => handleSubmit()}>
        Send
      </button>
    </div>
  );
};

export default Compose;
