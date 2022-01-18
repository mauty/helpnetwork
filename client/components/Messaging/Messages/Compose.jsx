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

// <div class="form-control" onSubmit={(event) => event.preventDefault()}>
//   <label className="label">
//     <span className="label-text">Message</span>
//   </label> 
//   <input type="text" placeholder="Enter Message" class="input input-bordered" value={}>
// </div>


// <form autoComplete='off' >
// 					<input
// 						className=''
// 						name='name'
// 						type='text'
// 						placeholder='Enter Message'
// 						onChange={(event) => setName(event.target.value)}
// 						value={name}
// 						data-testid='student-name-input'
// 					/>
// 				</form>

export default Compose;